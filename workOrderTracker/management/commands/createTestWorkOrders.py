from django.core.management.base import BaseCommand, CommandError
from datetime import date, timedelta
from workOrderTracker.models import WorkOrder, User


admin_user = User.objects.filter(role="Admin").first()
sales_user = User.objects.filter(role="Manager").first()

sample_work_orders = [
    {
        "due_date": date.today() + timedelta(days=7),
        "status": "Pending",
        "assigned_to": admin_user,
        "priority": "High",
        "customer": "John Doe, 123 Main St, Springfield",
        "product": "Widget A",
        "quantity": 50,
        "sales_id": sales_user,
    },
    {
        "due_date": date.today() + timedelta(days=14),
        "status": "In Progress",
        "assigned_to": admin_user,
        "priority": "Medium",
        "customer": "Acme Corp, 456 Elm St, Metropolis",
        "product": "Widget B",
        "quantity": 100,
        "sales_id": sales_user,
    },
    {
        "due_date": date.today() + timedelta(days=3),
        "status": "Pending",
        "assigned_to": admin_user,
        "priority": "Low",
        "customer": "Jane Smith, 789 Oak St, Gotham",
        "product": "Widget C",
        "quantity": 25,
        "sales_id": sales_user,
    },
    {
        "due_date": date.today() + timedelta(days=10),
        "status": "Completed",
        "assigned_to": admin_user,
        "priority": "High",
        "customer": "Global Tech, 101 Maple Ave, Star City",
        "product": "Widget D",
        "quantity": 75,
        "sales_id": sales_user,
    },
    {
        "due_date": date.today() + timedelta(days=5),
        "status": "Pending",
        "assigned_to": admin_user,
        "priority": "Medium",
        "customer": "Mega Corp, 202 Pine St, Central City",
        "product": "Widget E",
        "quantity": 150,
        "sales_id": sales_user,
    },
]


class Command(BaseCommand):
    help = "create test work orders"

    def handle(self, *args, **options):
        for work_order_data in sample_work_orders:
            WorkOrder.objects.create(**work_order_data)
        self.stdout("Sample Orders Created")
