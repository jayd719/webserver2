from django.db import models
from django.utils.timezone import now


class GeoLocations(models.Model):
    title = models.URLField(default=None)
    ip = models.GenericIPAddressField(default=None)
    timestamp = models.DateTimeField(default=now)

    # Coordinates fields
    accuracy = models.FloatField(help_text="Location accuracy in meters.")
    latitude = models.FloatField(help_text="Latitude of the location.")
    longitude = models.FloatField(help_text="Longitude of the location.")

    def __str__(self):
        return f"{self.title} - ({self.latitude}, {self.longitude})"

    class Meta:
        verbose_name = "Geolocation"
        verbose_name_plural = "Geolocations"
        ordering = ["-timestamp"]
