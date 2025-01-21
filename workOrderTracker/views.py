from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models


def homepage(request):
    return HttpResponse("Work Order Home")


def tracker_view(request):
    return render(request, "tracker.html")


def test_functions(request):
    """
    Retrieve and return a list of all work orders ordered by due date.
    Includes all fields of WorkOrder and the name of the assigned person.
    """
    work_orders = (
        models.WorkOrder.objects.select_related("assigned_to")
        .order_by("due_date")
        .values(
            *[field.name for field in models.WorkOrder._meta.fields],
            "assigned_to__name"
        )
    )

    return JsonResponse({"data": list(work_orders)})
