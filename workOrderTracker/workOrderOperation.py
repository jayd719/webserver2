from django.db import models
from datetime import timedelta
from django.db.models.query import QuerySet


class WorkOrderOperation(models.Model):
    OPERATION_STATUS = [
        ("On Hold", "On Hold"),
        ("In Progress", "In Progress"),
        ("Completed", "Completed"),
    ]
    PRIORITY_CHOICES = [
        ("Low", "Low"),
        ("Medium", "Medium"),
        ("High", "High"),
    ]

    work_order = models.ForeignKey(
        WorkOrder, on_delete=models.CASCADE, related_name="operations"
    )
    machine = models.ForeignKey(
        Machine, on_delete=models.CASCADE, related_name="operations"
    )
    description = models.TextField(max_length=2000)
    estimated_hours = models.FloatField()
    actual_hours = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=OPERATION_STATUS)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)

    def __str__(self) -> str:
        return (
            f"Operation for {self.work_order} on {self.machine} - Status: {self.status}"
        )

    # Additional Methods with Annotations

    def is_overdue(self) -> bool:
        """
        Check if the operation has exceeded its estimated hours.
        """
        return bool(self.actual_hours and self.actual_hours > self.estimated_hours)

    def mark_completed(self) -> None:
        """
        Mark the operation as 'Completed' and save the status.
        """
        self.status = "Completed"
        self.save()

    def calculate_remaining_hours(self) -> float:
        """
        Calculate remaining hours based on the estimated and actual hours.
        """
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
