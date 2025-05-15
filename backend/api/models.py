from django.db import models

class TourPackage(models.Model):
    title = models.CharField(max_length=100)
    origin = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)
    duration = models.CharField(max_length=50)
    departure = models.CharField(max_length=100)
    code = models.CharField(max_length=20)
    price = models.CharField(max_length=20)
    image = models.CharField(max_length=100)

    def __str__(self):
        return self.title