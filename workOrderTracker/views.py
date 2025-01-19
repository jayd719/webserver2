from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models


def homepage(request):
    return HttpResponse("Work Order Home")


def tracker_view(request):
    return render(request, "tracker.html")


def test_functions(request):
    test = ""
    for wo in models.WorkOrder.objects.all():
        print(wo)

    return JsonResponse({"data": list(models.WorkOrder.objects.all().values())})
