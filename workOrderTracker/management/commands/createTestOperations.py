from django.core.management.base import BaseCommand
from workOrderTracker.models import WorkOrder, WorkOrderOperation

work_orders = WorkOrder.objects.all()
sample_operations = [
    {
        "work_order": work_orders[0],
        "machine": "CNC Machine A",
        "description": "Cutting metal sheets into required dimensions.",
        "estimated_hours": 10.0,
        "actual_hours": 8.5,
        "status": "In Progress",
        "priority": "High",
    },
    {
        "work_order": work_orders[0],
        "machine": "Lathe Machine B",
        "description": "Shaping cylindrical parts.",
        "estimated_hours": 5.0,
        "actual_hours": 6.0,
        "status": "Completed",
        "priority": "Medium",
    },
    {
        "work_order": work_orders[1],
        "machine": "Welding Station 1",
        "description": "Welding metal plates together.",
        "estimated_hours": 7.0,
        "actual_hours": None,
        "status": "Pending",
        "priority": "Low",
    },
    {
        "work_order": work_orders[1],
        "machine": "Assembly Line C",
        "description": "Assembling small components into final products.",
        "estimated_hours": 12.0,
        "actual_hours": 11.0,
        "status": "In Progress",
        "priority": "High",
    },
    {
        "work_order": work_orders[2],
        "machine": "Painting Booth",
        "description": "Applying protective paint coating.",
        "estimated_hours": 4.0,
        "actual_hours": None,
        "status": "Pending",
        "priority": "Medium",
    },
]


class Command(BaseCommand):
    help = "create Sample Operations"

    def handle(self, *args, **options):
        for operation_data in sample_operations:
            WorkOrderOperation.objects.create(**operation_data)
