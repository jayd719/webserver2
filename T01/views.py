from django.shortcuts import render, redirect
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .functions import *
from datetime import datetime


def main(requests):
    newUser = False
    data = {"newUser": None}
    return render(requests, f"components/homepage.html", data)


def createCookies(requests):
    html = HttpResponse("")
    html.set_cookie("cookiesThisIsUseless", "cookiesCreated", secure=True)
    return html


def visitors(requests):
    data = {"visitors": None}
    return render(requests, "visitors/main.html", data)


def projects(requests):
    DATA = {
        "companyName": None,
    }
    return render(requests, f"engineeringPageNew/index.html", DATA)


def aboutme(requests):
    return render(requests, "aboutpage/main.html")


@csrf_exempt
def locationFromCords(request):
    """request - the HTTP request object (HttpRequest)
    Returns:
        JSON response indicating the success or failure of the operation (JsonResponse)
    -------------------------------------------------------
    """
    if request.method == "POST":
        try:
            cordinates = json.loads(request.body.decode("utf-8"))["data"]
            return JsonResponse({"success": True})
        except json.JSONDecodeError as e:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)


def engineeringPage(requests):
    return render(requests, f"EngineeringPage/engineeringPage.html")


def gantchart(requests):
    return render(requests, "ganttChart/ganttchart.html")


def sorting(requests):
    return render(requests, "DSA/DSA-main.html")


def requirements(requests):
    return JsonResponse({"req": "This is the data"}, status=400)


def test(request):
    return render(request, "visitor/main.html")


def cncSimPage(request):
    return render(request, "simulationReport/index.html")


def websiteEstimator(request):
    return render(request, "websiteEstimator/main.html")


def updateCart(request):
    return HttpResponse(request.COOKIES["this"])


def redirect_(request):
    return redirect("/pages/aboutme")
