from django.core.management.base import BaseCommand, CommandError
from T04.models import GeoLocations
import json
import os


class Command(BaseCommand):
    help = "base command"
    path = "out/log-locations.json"

    def handle(self, *args, **options):
        self.stdout.write("Unterminated line\n")
        visitors = GeoLocations.objects.all().order_by("-timestamp")
        for visitor in visitors:
            print(visitor)
