from django.core.management.base import BaseCommand
from workOrderTracker.models import User

sample_users = [
    {"name": "Alice Admin", "email": "alice.admin@example.com", "role": "Admin"},
    {"name": "Bob Manager", "email": "bob.manager@example.com", "role": "Manager"},
    {
        "name": "Charlie Engin",
        "email": "charlie.engin@example.com",
        "role": "Engin",
    },
    {
        "name": "Diana Machinist",
        "email": "diana.machinist@example.com",
        "role": "Machinist",
    },
    {"name": "Eve Admin", "email": "eve.admin@example.com", "role": "Admin"},
    {"name": "Frank Manager", "email": "frank.manager@example.com", "role": "Manager"},
    {
        "name": "Grace Engineer",
        "email": "grace.engineer@example.com",
        "role": "Engineer",
    },
    {
        "name": "Hank Machinist",
        "email": "hank.machinist@example.com",
        "role": "Machinist",
    },
    {"name": "Ivy Admin", "email": "ivy.admin@example.com", "role": "Admin"},
    {"name": "Jack Manager", "email": "jack.manager@example.com", "role": "Manager"},
]


class Command(BaseCommand):
    help = "create sample users"

    def handle(self, *args, **options):
        for user_data in sample_users:
            User.objects.create(**user_data)
        print("Sample users created successfully!")
