from .views import *
from django.urls import path

urlpatterns = [
    path('home/',criketAppHomePage,name='cricketAppHome'),
]