from django.urls import path
from .views import *
urlpatterns = [
    path('resume/1/', resume1,name="resume"),
    path('resume/2/', resume2,name="resume-two"),
    path('aboutme/',about_me,name='about-me')
]