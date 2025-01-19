from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.homepage, name="tracker-home"),
    path("tracker/", views.tracker_view, name="tracker-dashboard"),
    path("testlink/", views.test_functions, name="test"),
]
