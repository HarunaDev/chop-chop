from django.urls import path
from .views import get_author, send_order_email

# set url patterns
urlpatterns = [
    path('user/', get_author, name='get-author'),
    path('send-order-email/', send_order_email, name='send-order-email'),
]