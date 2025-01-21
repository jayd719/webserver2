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
    Includes all fields of WorkOrder, the name of the assigned person, and associated operations.
    """

    # Build the result list with operations included
    result = []
    for work_order in models.WorkOrder.objects.all().order_by("due_date"):
        # Convert the work order to a dictionary including all its fields
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
        }

        # Add operations from the prefetched attribute
        work_order_dict["operations"] = [
            {
                "step_number": operation.step_number,
                "machine": operation.machine,
                "description": operation.description,
                "estimated_hours": operation.estimated_hours,
                "actual_hours": operation.actual_hours,
                "status": operation.status,
                "priority": operation.priority,
                "custom_notes": operation.custom_notes,
            }
            for operation in models.WorkOrderOperation.objects.filter(
                work_order=work_order.job_number
            )
        ]

        result.append(work_order_dict)

    return JsonResponse({"data": result})
