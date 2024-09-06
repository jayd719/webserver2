from django.urls import path
from .views import *

urlpatterns = [
    path('', home,name="cnc-home"),
    path("cnc_simulator",cnc_simulator,name="cnc-sim"),
    path("setup_sheets_for_mastercam",setup_sheets,name="cnc-ss")
]
