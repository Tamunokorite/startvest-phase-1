from rest_framework import serializers
from .models import Startup, JobOpening, StartupGallery
from users.models import User, user_type


class StartupGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = StartupGallery
        fields = '__all__'

class JobOpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOpening
        fields = '__all__'


class StartupSerializer(serializers.ModelSerializer):
    jobs = JobOpeningSerializer(many=True, required=False)
    images = StartupGallerySerializer(many=True, required=False)
    class Meta:
        model = Startup
        fields = '__all__'