from django.urls import path
from .views import resume1
urlpatterns = [
    path('', resume1,name="resume-one"),
]