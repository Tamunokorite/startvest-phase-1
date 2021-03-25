from django.urls import path
from .views import StartupsView

urlpatterns = [
    path('', StartupsView.as_view(), name='startups'),
]