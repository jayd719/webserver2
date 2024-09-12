from django.urls import path
from .views import resume1,resume2
urlpatterns = [
    path('', resume1,name="resume-one"),
    path('resume/', resume2,name="resume-two"),
]