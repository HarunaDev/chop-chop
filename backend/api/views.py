from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

# Create your views here.
# implement creating a new user view
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all() #view all existing users to prevent creating a user that already exists
    serializer_class = UserSerializer #specify what type of data to accept to make a new user
    permission_classes =[AllowAny] #allows anyone who is not authenticated to use this view to create a new user

# get user name to render as name
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_author(request):
    user = request.user
    return Response({'username': user.username})