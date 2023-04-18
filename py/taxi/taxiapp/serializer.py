from rest_framework import serializers
from .models import taxiMo

class taxiMoSerializer(serializers.ModelSerializer):
    class Meta:
        model = taxiMo
        fields = '__all__'