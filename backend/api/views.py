from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.core.mail import send_mail
from django.conf import settings

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

# View toget user details and send order
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_order_email(request):
    user = request.user
    order_details = request.data.get('order')
    
    subject = 'Your Order Confirmation'
    message = f'Thank you for your order, {user.username}!\n\nYou ordered {order_details["base"]} with the following sides and toppings:\n\n'

    if order_details.get("sides"):
        message += "Sides:\n"
        for side in order_details["sides"]:
            message += f"- {side}\n"

    if order_details.get("toppings"):
        message += "\nToppings:\n"
        for topping in order_details["toppings"]:
            message += f"- {topping}\n"

    message += "\nEnjoy your meal!"

    send_mail(
        subject,
        message,
        settings.EMAIL_HOST_USER,
        [user.email],
        fail_silently=False,
    )
    
    return Response({'message': 'Order email sent successfully!'})