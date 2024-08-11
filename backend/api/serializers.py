from django.contrib.auth.models import User
from rest_framework import serializers

# Create searializer for new user 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"passowrd": {"write_only": True}}

    
    # function to validate credentials and create new user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user