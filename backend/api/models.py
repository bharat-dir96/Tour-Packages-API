from django.db import models
from datetime import date

class TourPackage(models.Model):
    title = models.CharField(max_length=100, unique=True)
    origin = models.CharField(max_length=50)
    destination = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    departure = models.CharField(max_length=100)
    upcoming_date = models.DateField(null=True)
    code = models.CharField(max_length=20, unique=True)
    price = models.CharField(max_length=20) 
    image = models.CharField(max_length=100)

    def __str__(self):
        return self.title