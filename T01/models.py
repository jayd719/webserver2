from django.db import models

# Create your models here.
class PythonLibs(models.Model):
    name = models.CharField(max_length=20,primary_key = True)
    imageLink = models.TextField()
    onHold=models.BooleanField(default=True)


class Skills(models.Model):
    name = models.CharField(max_length=20,primary_key = True)
    category=models.CharField(max_length=30)
    show=models.BooleanField(default=True)
    


class CNC(models.Model):
    name = models.CharField(max_length=20,primary_key = True)
    des=models.TextField()
    show=models.BooleanField(default=True)
    

class User(models.Model):
    pass