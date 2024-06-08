from django.db import models

class visitor(models.Model):
    ip = models.CharField(max_length=200)
    visitTime = models.DateTimeField()
    city = models.CharField(max_length=145)
    country = models.CharField(max_length=135)
    state = models.CharField(max_length=134)

