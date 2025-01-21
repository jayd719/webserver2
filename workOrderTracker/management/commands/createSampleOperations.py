from tqdm import tqdm
from django.core.management.base import BaseCommand
from workOrderTracker.models import (
    WorkOrder,
    WorkOrderOperation,
    PRIORITY_CHOICES,
    STATUS_CHOICES,
)

import random

work_orders = WorkOrder.objects.all()


class Command(BaseCommand):
    help = "create Sample Operations"

    def handle(self, *args, **options):
        # Fetch existing work orders for assigning operations
        work_orders = list(WorkOrder.objects.all())

        if not work_orders:
            print("No work orders found! Please create some work orders first.")
        else:
            # Sample operations for each work order
            for work_order in tqdm(work_orders, desc="Creating Sample Orperations"):
                num_operations = random.randint(
                    1, 5
                )  # Random number of operations per work order
                for step in range(1, num_operations + 1):
                    operation_data = {
                        "step_number": step,
                        "work_order": work_order,
                        "machine": f"Machine-{random.randint(1, 10)}",
                        "description": f"Operation {step} for WorkOrder {work_order.job_number}",
                        "estimated_hours": round(random.uniform(1.0, 10.0), 2),
                        "actual_hours": round(random.uniform(0.0, 10.0), 2),
                        "status": random.choice(STATUS_CHOICES),
                    }
                    WorkOrderOperation.objects.create(**operation_data)

        print("Sample Operations Created!!")
