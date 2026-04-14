from rest_framework import serializers
from .models import FoodTruck

# This class serializes the FoodTruck model, allowing it to be converted to and from JSON format for API responses and requests
class FoodTruckSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodTruck
        fields = '__all__'