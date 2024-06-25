from django.urls import path,include
from .views import *

urlpatterns = [
    path('',main,name='home-main'),
    path('',main,name='homepage'),
    path('check-out-work/',cncSimPage,name='projects-page'),
    path('locationFromCords/',locationFromCords,name='location-from-cords'),
    path('engineering/',engineeringPage,name='engineeringPage'),
    path('engineering/cnc_machine_simulation/',cncSimPage,name='cncSimPage'),
    path('gantchart/',gantchart,name='gantchart'),
    path('aboutme/',aboutme,name='about-me'),
    path('createCookies/',createCookies,name='createCookies'),
    path('visitors/',visitors,name='visitors'),
    path('req/',requirements,name='require'),
    path('sorting-algorithms/',sorting,name = 'sorting'),
    path('test/',test,name='rest')
    
]
