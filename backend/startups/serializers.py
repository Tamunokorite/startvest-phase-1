from rest_framework import serializers
from .models import Startup, JobOpening
from users.models import User, user_type


class JobOpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOpening
        fields = '__all__'

