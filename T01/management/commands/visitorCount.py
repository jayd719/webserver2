from typing import Any
from django.core.management.base import BaseCommand
from T01.models import visitor

def getNumberOfVisitors():
    return visitor.objects.all().count()

class Command(BaseCommand):
    def handle(self,*args, **options):
        print(getNumberOfVisitors())
        return 