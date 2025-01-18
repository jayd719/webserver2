from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from .models import GeoLocation
import json


def resume1(request):
    return render(request, "resume1.html")


def resume2(request):
    return render(request, "resume2.html")


def about_me(request):
    return render(request, "aboutMe/index.html")


def open_cv_project_1(request):
    return render(request, "ProjectReports/openCV1.html")


def cp411_project(request):
    return render(request, "ProjectReports/CP411.html")


def pres(request):
    return redirect(
        "https://docs.google.com/presentation/d/1aESC8HSqfXATkgoLYQXO24lREU6zhjDBWmhg3BD7Iqw/edit?usp=sharing"
    )


def log_cordinates(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            geolocation = GeoLocation.objects.create(
                timestamp=data.get("timestamp"),
                accuracy=data["coords"]["accuracy"],
                latitude=data["coords"]["latitude"],
                longitude=data["coords"]["longitude"],
                altitude=data["coords"].get("altitude"),
                altitude_accuracy=data["coords"].get("altitudeAccuracy"),
                heading=data["coords"].get("heading"),
                speed=data["coords"].get("speed"),
            )
            return JsonResponse({"message": "Data Processed"}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid Json Data"}, status=400)

    return JsonResponse({"erorr": "only POST request allow"}, status=405)
