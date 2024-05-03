from django.urls import path,include
from .views import main,projects
from .views import locationFromCords
from .views import engineeringPage
from .views import gantchart
urlpatterns = [
    path('',main,name='home-main'),
    path('',main,name='homepage'),
    path('check-out-work/',projects,name='projects-page'),
    path('locationFromCords/',locationFromCords,name='location-from-cords'),
    path('engineering/',engineeringPage,name='engineeringPage'),
    path('gantchart/',gantchart,name='gantchart')
    
]
