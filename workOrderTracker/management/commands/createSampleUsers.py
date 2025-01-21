from django.core.management.base import BaseCommand
from workOrderTracker.models import User
from tqdm import tqdm

sample_users = [
    {"name": "Alice Johnson", "email": "alice.johnson@example.com", "role": "Admin"},
    {"name": "Bob Smith", "email": "bob.smith@example.com", "role": "Manager"},
    {"name": "Charlie Brown", "email": "charlie.brown@example.com", "role": "Engineer"},
    {"name": "Diana Prince", "email": "diana.prince@example.com", "role": "Machinist"},
    {"name": "Edward Clark", "email": "edward.clark@example.com", "role": "Admin"},
    {"name": "Fiona Gray", "email": "fiona.gray@example.com", "role": "Manager"},
    {"name": "George King", "email": "george.king@example.com", "role": "Engineer"},
    {"name": "Helen Adams", "email": "helen.adams@example.com", "role": "Machinist"},
    {"name": "Ian Wright", "email": "ian.wright@example.com", "role": "Engineer"},
    {"name": "Jane Doe", "email": "jane.doe@example.com", "role": "Admin"},
]


class Command(BaseCommand):
    help = "create sample users"

    def handle(self, *args, **options):
        for user_data in tqdm(sample_users, desc="Creating Sample Users"):
            User.objects.create(**user_data)
        print("Sample users created successfully!")
