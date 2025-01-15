from django.urls import path
from django.shortcuts import redirect
from .views import *

urlpatterns = [
    path("resume/1/", resume1, name="resume"),
    path("resume/2/", resume2, name="resume-two"),
    path("aboutme/", about_me, name="about-me"),
    path("image-processing-toolkit/", open_cv_project_1, name="imageprocessing"),
    path("computer-graphics-3d-renderer/", cp411_project, name="renderer"),
    path("pres", pres, name="temp"),
]
