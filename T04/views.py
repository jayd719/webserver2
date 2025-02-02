from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from .models import GeoLocations
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
    return JsonResponse({"message": "hellowoo"})


def knn(request):
    return render(request, "ProjectReports/KNN.html")


def log_cordinates(request):
    """
    Handles the logging of geolocation data sent via a POST request.

    Parameters:
    - request: HttpRequest object, expected to contain JSON data in the body.

    Behavior:
    - If the request method is POST:
        - Tries to parse the JSON data from the request body.
        - Extracts geolocation details from the 'pos' -> 'coords' structure in the JSON.
        - Saves the extracted data to the `GeoLocations` database model.
        - Responds with a success message if the data is processed and saved successfully.
    - If JSON parsing fails, responds with an error indicating invalid JSON data.
    - For non-POST requests, responds with a "method not allowed" error.

    Returns:
    - JsonResponse with a status code:
        - 200 on success.
        - 400 for invalid JSON data.
        - 405 for non-POST methods.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            # Extract fields
            coords = data.get("pos", {}).get("coords", {})

            # Save to the database
            geolocation = GeoLocations.objects.create(
                title=data.get("title"),
                ip=request.META.get("REMOTE_ADDR"),
                accuracy=coords.get("accuracy"),
                latitude=coords.get("latitude"),
                longitude=coords.get("longitude"),
            )
            return JsonResponse({"message": "Data Processed"}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid Json Data"}, status=400)

    return JsonResponse({"erorr": "only POST request allow"}, status=405)
