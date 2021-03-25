from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Startup, JobOpening
from .serializers import StartupSerializer, JobOpeningSerializer

class StartupsView(generics.ListCreateAPIView):
    queryset = Startup.objects.all()
    serializer_class = StartupSerializer