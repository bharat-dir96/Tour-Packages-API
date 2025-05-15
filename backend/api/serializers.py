from rest_framework.serializers import ModelSerializer
from .models import TourPackage

class TourPackageSerializer(ModelSerializer):
    class Meta:
        model = TourPackage
        fields = '__all__'