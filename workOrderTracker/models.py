from django.db import models
from datetime import timedelta, date
from django.db.models.query import QuerySet

STATUS_CHOICES = [
    ("Pending", "Pending"),
    ("In Progress", "In Progress"),
    ("Completed", "Completed"),
    ("Canceled", "Canceled"),
]
PRIORITY_CHOICES = [("High", "High"), ("Medium", "Medium"), ("Low", "Low")]


# User Model
class User(models.Model):
    ROLES = [
        ("Admin", "Admin"),
        ("Manager", "Manager"),
        ("Engineer", "Engineer"),
        ("Machinist", "Machinist"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10, choices=ROLES)

    def __str__(self):
        return self.name

    def is_admin(self):
        return self.role == "Admin"

    def is_manager(self):
        return self.role == "Manager"


# Work Order Model
class WorkOrder(models.Model):
    order_date = models.DateField(auto_now_add=True)
    due_date = models.DateField()
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default=STATUS_CHOICES[0]
    )
    assigned_to = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_to",
    )
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    customer = models.TextField()
    product = models.TextField()
    quantity = models.PositiveIntegerField()
    sales_id = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="sales_id",
    )
    operations = 1

    def __str__(self):
        return f"Work Order {self.id} - {self.status}"

    def is_overdue(self):
        return self.due_date < date.today() and self.status != "Completed"

    def mark_completed(self):
        self.status = "Completed"
        self.save()

    def days_remaining(self):
        return (self.due_date - date.today()).days

    def get_priority_display_name(self):
        return dict(self.PRIORITY_CHOICES).get(self.priority, "Unknown")

    def assign_to_user(self, user):
        self.assigned_to = user
        self.save()

    @classmethod
    def get_overdue_orders(cls):
        return cls.objects.filter(
            due_date__lt=date.today(), status__in=["Pending", "In Progress"]
        )

    @classmethod
    def get_high_priority_orders(cls):
        return cls.objects.filter(priority="High")

    def operations(self):
        return WorkOrderOperation.objects.filter(work_order=self)


# Work Order Operarion Model
class WorkOrderOperation(models.Model):
    """Check if the operation has exceeded its estimated hours."""

    work_order = models.ForeignKey(WorkOrder, on_delete=models.CASCADE)
    machine = models.TextField(max_length=100)
    description = models.TextField(max_length=2000)
    estimated_hours = models.FloatField()
    actual_hours = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)

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
