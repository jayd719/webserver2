from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models
import json


def homepage(request):
    return HttpResponse("Work Order Home")


def tracker_view(request):
    return render(request, "tracker.html")


def tracker_main_view(request):
    """
    Retrieve and return a list of all work orders ordered by due date.
    Includes all fields of WorkOrder, the name of the assigned person, and associated operations.
    """
    # Query work orders with related data
    work_orders = (
        models.WorkOrder.objects.select_related("assigned_to")
        .prefetch_related("operations")
        .order_by("due_date")
    )

    # Build the result list
    result = []
    for work_order in work_orders:
        work_order_dict = {
            "job_number": work_order.job_number,
            "order_date": work_order.order_date,
            "due_date": work_order.due_date,
            "mark_completed_date": work_order.mark_completed_date,
            "quantity": work_order.quantity,
            "status": work_order.status,
            "assigned_to": (
                work_order.assigned_to.name if work_order.assigned_to else None
            ),
            "customer_name": work_order.customer_name,
            "description": work_order.description,
            "notes_one": work_order.notes_one,
            "notes_two": work_order.notes_two,
            "estimated_hours": work_order.estimated_hours,
            "completed_hours": work_order.completed_hours,
            "incoming_inspection": work_order.incoming_inspection,
            "shipping_this_month": work_order.shipping_this_month,
            "on_hold": work_order.on_hold,
            "is_rush": work_order.is_rush,
            "operations": list(work_order.operations.values()),
        }
        result.append(work_order_dict)

    return JsonResponse({"data": result})


def tracker_updateDate(request, job_number):
    if request.method == "POST":
        try:
            date = json.loads(request.body)["newDate"]
            models.WorkOrder.objects.get(job_number=job_number).update_date(date)
            return JsonResponse({"message": "Data Processed"}, status=200)
        except:
            return JsonResponse({"error": "Invalid JSON Data"}, status=400)

    return JsonResponse({"error": "only POST Request Allowed"}, status=405)
