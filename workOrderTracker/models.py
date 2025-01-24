"""-------------------------------------------------------
Work Order Tracker: Models
-------------------------------------------------------
Author:  JD
ID:      91786
Uses:    Django
Version:  1.0.8
__updated__ = Mon Jan 20 2025
-------------------------------------------------------
"""

from django.db import models
from datetime import timedelta, date, datetime
from django.db.models.query import QuerySet


STATUS_CHOICES = [
    ("NEW", "New"),
    ("PENDING", "Pending"),
    ("IN_PROGRESS", "In Progress"),
    ("COMPLETED", "Completed"),
    ("CANCELED", "Canceled"),
]

PRIORITY_CHOICES = [
    ("STD", "Standard"),
    ("HIGH", "High"),
    ("MEDIUM", "Medium"),
    ("LOW", "Low"),
]


class User(models.Model):
    ROLES = [
        ("ADMIN", "Admin"),
        ("MANAGER", "Manager"),
        ("ENGINEER", "Engineer"),
        ("MACHINIST", "Machinist"),
    ]
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def is_admin(self):
        return self.role == "Admin"

    def is_manager(self):
        return self.role == "Manager"

    def is_engineer(self):
        return self.role == "Engineer"

    def is_machinist(self):
        return self.role == "Machinist"

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["email"], name="unique_user_email"),
        ]


class WorkOrder(models.Model):
    """
    -------------------------------------------------------
    Model representing a work order tracker.
    Fields:
        job_number - Unique identifier for the work order (CharField)
        order_date - Date the work order was created (DateField)
        due_date - Due date for the work order (DateField)
        mark_completed_date - Date when the work order was marked completed (DateField)
        quantity - Quantity of items for the work order (PositiveIntegerField)
        status - Current status of the work order (CharField with choices)
        assigned_to - User assigned to the work order (ForeignKey to User)
        customer_name - Name of the customer (CharField)
        description - Description of the work order (TextField)
        notes_one - Additional notes for the work order (TextField)
        notes_two - Additional notes for the work order (TextField)
        estimated_hours - Estimated hours required for the work order (FloatField)
        completed_hours - Actual hours completed for the work order (FloatField)
        incoming_inspection - Indicates if the work order requires incoming inspection (BooleanField)
        shipping_this_month - Indicates if the order is scheduled for shipping this month (BooleanField)
        on_hold - Indicates if the work order is currently on hold (BooleanField)
        is_rush - Indicates if the work order is marked as rush (BooleanField)
        operations - Operations associated with the work order (JSONField)
    Use: WorkOrder
    -------------------------------------------------------
    """

    job_number = models.CharField(max_length=8, primary_key=True)
    order_date = models.DateField(auto_now_add=True)
    due_date = models.DateField()
    mark_completed_date = models.DateField(null=True, blank=True)
    quantity = models.PositiveIntegerField()

    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default=STATUS_CHOICES[0][0]
    )
    priority = models.CharField(
        max_length=10, choices=PRIORITY_CHOICES, default=PRIORITY_CHOICES[0][0]
    )

    sales_id = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="work_orders",
    )
    assigned_to = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_orders",
    )

    customer_name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True, max_length=10000)
    notes_one = models.TextField(blank=True, null=True, max_length=2000)
    notes_two = models.TextField(blank=True, null=True, max_length=2000)
    estimated_hours = models.FloatField(default=0.25)
    completed_hours = models.FloatField(default=0)
    incoming_inspection = models.BooleanField(default=False)
    shipping_this_month = models.BooleanField(default=False)
    on_hold = models.BooleanField(default=False)
    is_rush = models.BooleanField(default=False)
    operations = models.IntegerField(default=1)

    class Meta:
        ordering = ["-order_date"]
        verbose_name = "Work Order"
        verbose_name_plural = "Work Orders"

    def __str__(self):
        return f"WorkOrder #{self.job_number} - {self.customer_name}"

    def update_date(self, new_date: str):
        self.due_date = datetime.strptime(new_date, "%Y-%m-%d")
        self.save()
        return None

    def update_incoming_inspection(self, value):
        self.incoming_inspection = bool(value)
        self.save()

    def update_is_rush(self, value):
        self.is_rush = bool(value)
        self.save()

    def update_shipping_this_month(self, value):
        self.shipping_this_month = bool(value)
        self.save()

    def update_on_hold(self, value):
        self.on_hold = bool(value)
        self.save()

    def update_notes(self, notes):
        self.notes_one = notes
        self.save()

    def mark_as_completed(self):
        self.status = "Completed"
        self.mark_completed_date = models.DateField(auto_now=True)
        self.save()

    def update_completed_hours(self, hours):
        if hours < 0:
            raise ValueError("Completed hours cannot be negative.")
        self.completed_hours += hours
        self.save()

    def reset_notes(self):
        self.notes_one = ""
        self.notes_two = ""
        self.save()

    def calculate_progress(self):
        if self.estimated_hours > 0:
            return min((self.completed_hours / self.estimated_hours) * 100, 100)
        return 0

    def update_routing(self):
        return

    def is_overdue(self):
        return date.today() > self.due_date and self.status != "Completed"

    @classmethod
    def get_overdue_orders(cls):
        return cls.objects.filter(
            due_date__lt=date.today(), status__in=["Pending", "In Progress"]
        )

    @classmethod
    def get_high_priority_orders(cls):
        return cls.objects.filter(priority="High")

    def operations(self):
        return WorkOrderOperation.objects.filter(work_order=self.job_number)


class WorkOrderOperation(models.Model):
    """
    -------------------------------------------------------
    Model representing an operation within a work order.
    Fields:
        step_number - Sequential step number for the operation (PositiveIntegerField)
        work_order - Associated work order for the operation (ForeignKey to WorkOrder)
        machine - Name of the machine used for the operation (CharField)
        description - Description of the operation (TextField)
        estimated_hours - Estimated time required for the operation (FloatField)
        actual_hours - Actual time spent on the operation (FloatField)
        status - Current status of the operation (CharField with choices)
        priority - Priority level of the operation (CharField with choices)
        custom_notes - Additional notes for the operation (TextField)
    Use: WorkOrderOperation
    -------------------------------------------------------
    """

    step_number = models.PositiveIntegerField()
    work_order = models.ForeignKey(
        WorkOrder, on_delete=models.CASCADE, related_name="operations"
    )
    machine = models.CharField(max_length=100)
    description = models.TextField(max_length=2000)
    estimated_hours = models.FloatField()
    actual_hours = models.FloatField(null=True, blank=True, default=0.0)
    status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default=STATUS_CHOICES[1][0]
    )
    priority = models.CharField(
        max_length=10, choices=PRIORITY_CHOICES, default=PRIORITY_CHOICES[0][0]
    )
    custom_notes = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return (
            f"Operation for {self.work_order} on {self.machine} - Status: {self.status}"
        )

    def is_overdue(self) -> bool:
        """Check if the operation has exceeded its estimated hours."""
        return bool(self.actual_hours and self.actual_hours > self.estimated_hours)

    def mark_completed(self) -> None:
        """Mark the operation as 'Completed' and save the status."""
        self.status = "Completed"
        self.save()

    def calculate_remaining_hours(self) -> float:
        """alculate remaining hours based on the estimated and actual hours."""
        if self.actual_hours:
            return max(0.0, self.estimated_hours - self.actual_hours)
        return self.estimated_hours

    def get_priority_display_name(self) -> str:
        """
        Return a human-readable priority display name.
        """
        return dict(self.PRIORITY_CHOICES).get(self.priority, "Unknown")

    def get_status_display_name(self) -> str:
        """
        Return a human-readable status display name.
        """
        return dict(self.OPERATION_STATUS).get(self.status, "Unknown")

    def estimated_completion_time(self) -> timedelta:
        """
        Estimate the completion time in timedelta based on the remaining hours.
        """
        remaining_hours = self.calculate_remaining_hours()
        return timedelta(hours=remaining_hours)

    @classmethod
    def get_operations_by_status(cls, status: str) -> QuerySet["WorkOrderOperation"]:
        """
        Retrieve all operations filtered by status.
        """
        return cls.objects.filter(status=status)

    @classmethod
    def get_high_priority_operations(cls) -> QuerySet["WorkOrderOperation"]:
        """
        Retrieve all high-priority operations.
        """
        return cls.objects.filter(priority="High")

    def update_actual_hours(self, hours: float) -> None:
        """
        Update the actual hours spent on this operation.
        """
        if hours < 0:
            raise ValueError("Actual hours cannot be negative.")
        self.actual_hours = hours
        self.save()

    def is_critical(self) -> bool:
        """
        Determine if the operation is critical based on its priority and status.
        """
        return self.priority == "High" and self.status != "Completed"
