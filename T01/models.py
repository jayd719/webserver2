from django.db import models

class visitor(models.Model):
    ip = models.CharField(max_length=200)
    visitTime = models.DateTimeField()