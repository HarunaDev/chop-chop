from django.urls import path
from .views import get_author

# set url patterns
urlpatterns = [
    path('user/', get_author, name='get-author')
]