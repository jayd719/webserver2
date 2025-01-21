from django.core.management.base import BaseCommand, CommandError
from datetime import date, timedelta
from workOrderTracker.models import WorkOrder, User, STATUS_CHOICES
import random
from tqdm import tqdm


users = list(User.objects.all())

sample_work_orders = [
    {
        "job_number": f"JOB{str(i).zfill(4)}",
        "due_date": date.today() + timedelta(days=random.randint(1, 200)),
        "mark_completed_date": None if random.random() > 0.5 else date.today(),
        "quantity": random.randint(10, 100),
        "status": random.choice(STATUS_CHOICES),
        "assigned_to": random.choice(users),
        "customer_name": f"Customer {i}",
        "description": f"Description for work order JOB{str(i).zfill(4)}",
        "notes_one": f"Note one for work order JOB{str(i).zfill(4)}",
        "notes_two": f"Note two for work order JOB{str(i).zfill(4)}",
        "estimated_hours": round(random.uniform(5.0, 50.0), 2),
        "completed_hours": 0,
        "incoming_inspection": random.choice([True, False]),
        "shipping_this_month": random.choice([True, False]),
        "on_hold": random.choice([True, False]),
        "is_rush": random.choice([True, False]),
    }
    for i in range(1, 11)
]


class Command(BaseCommand):
    help = "create test work orders"

    def handle(self, *args, **options):
        for work_order_data in tqdm(
            sample_work_orders, desc="Creating Sample Work Orders"
        ):
            WorkOrder.objects.create(**work_order_data)
        print("Sample WorkOrders created successfully!")
