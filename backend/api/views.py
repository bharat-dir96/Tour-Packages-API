from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TourPackage
from .serializers import TourPackageSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/packages',
        'GET /api/package/:code'
    ]
    return Response(routes)

@api_view(['GET'])
def getpackages(request):
    packages = TourPackage.objects.all()
    serializer = TourPackageSerializer(packages, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getpackage(request, pk):
    package = TourPackage.objects.get(code=pk)
    serializer = TourPackageSerializer(package, many=False)
    return Response(serializer.data)