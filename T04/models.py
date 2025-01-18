from django.db import models

from django.db import models


class GeoLocation(models.Model):
    timestamp = models.BigIntegerField()  # To store the timestamp in milliseconds

    # Coordinates fields
    accuracy = models.FloatField()  # Accuracy in meters
    latitude = models.FloatField()  # Latitude of the location
    longitude = models.FloatField()  # Longitude of the location
    altitude = models.FloatField(null=True, blank=True)  # Altitude, can be null
    altitude_accuracy = models.FloatField(
        null=True, blank=True
    )  # Altitude accuracy, can be null
    heading = models.FloatField(null=True, blank=True)  # Heading, can be null
    speed = models.FloatField(null=True, blank=True)  # Speed, can be null

    def __str__(self):
        return f"Location at ({self.latitude}, {self.longitude}) with accuracy {self.accuracy}m"

    class Meta:
        verbose_name = "Geo Location"
        verbose_name_plural = "Geo Locations"
