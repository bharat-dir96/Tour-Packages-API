from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import TourPackage
from .serializers import TourPackageSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/packages',
        'POST /api/packages',
        'GET /api/package/:code',
        'PUT /api/package/:code',
        'DELETE /api/package/:code'
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getpackages(request):
    if request.method == 'GET':
        packages = TourPackage.objects.all()
        serializer = TourPackageSerializer(packages, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TourPackageSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def getpackage(request, pk):
    
    try:
        package = TourPackage.objects.get(code=pk)
    except TourPackage.DoesNotExist:
         return Response({'error': 'Package not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TourPackageSerializer(package, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TourPackageSerializer(package, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        package.delete()
        return Response({'message': 'Package deleted successfully'}, status=status.HTTP_204_NO_CONTENT)