from django.urls import path
from . import views

app_name = 'startups'

urlpatterns = [
    path('', views.StartupsList.as_view(), name='startups_list'),
    path('<int:user_id>', views.StartupsInfo.as_view(), name='view_startup'),
    path('create/<int:uid>', views.create_startup, name="create_startup"),
    path('update/<int:uid>', views.update_startup_info, name="update_startup"),
]