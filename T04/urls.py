from django.urls import path
from django.shortcuts import redirect
from .views import *

urlpatterns = [
    path("resume/1/", resume1, name="resume"),
    path("resume/2/", resume2, name="resume-two"),
    path("resume/3/", resume3, name="resume-three"),
    path("aboutme/", about_me, name="about-me"),
    path("knn-1/", knn, name="knn-1"),
    path("image-processing-toolkit/", open_cv_project_1, name="imageprocessing"),
    path("computer-graphics-3d-renderer/", cp411_project, name="renderer"),
    path("pres", pres, name="temp"),
    path("hk/", hackathon_project, name="hk"),
    path("data-visualisation-1", data_viz_project_1, name="data-v-1"),
    path("testlink/", log_cordinates, name="test"),
]
