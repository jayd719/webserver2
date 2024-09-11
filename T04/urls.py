from django.urls import path
from .views import resume1,resume2
urlpatterns = [
    path('1/', resume1,name="resume-one"),
    path('2/', resume2,name="resume-one"),
]