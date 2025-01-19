"""
URL configuration for serverJSP project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include

from homepage.views import HVAC


urlpatterns = [
    path("admin12/", admin.site.urls),
    path("hvac_system/", HVAC, name="hvac"),
    path("version_1/", include("T01.urls")),
    path("", include("T02.urls")),
    path("manufacturing_engineering/", include("T03.urls")),
    path("pages/", include("T04.urls")),
    path("work-order-tracker/", include("workOrderTracker.urls")),
]
