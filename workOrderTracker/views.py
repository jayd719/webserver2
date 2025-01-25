from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from . import models
import json


def homepage(request):
    return HttpResponse("Work Order Home")


def tracker_view(request):
    return render(request, "tracker.html")


def tracker_user_list(request):
    try:
        data = models.User.list_for()
        print(data)
        return JsonResponse({"users": data}, status=200)
    except Exception as e:
        # Handle unexpected errors and return a meaningful response
        return JsonResponse({"error": str(e)}, status=500)


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
            "sales_id": (work_order.sales_id.name if work_order.sales_id else None),
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

    return JsonResponse({"data": result, "users": models.User.list_for()})


def tracker_update_fields(request, job_number):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            field = data.get("field")
            value = data.get("value")

            try:
                model = models.WorkOrder.objects.get(job_number=job_number)
            except models.WorkOrder.DoesNotExist:
                return JsonResponse(
                    {"error": f"Work order {job_number} not found."}, status=404
                )

            field_actions = {
                "warning": lambda: model.update_incoming_inspection(value),
                "success": lambda: model.update_shipping_this_month(value),
                "error": lambda: model.update_is_rush(value),
                "info": lambda: model.update_on_hold(value),
                "due-date": lambda: model.update_date(value),
                "notes1": lambda: model.update_notes(value),
                "assigned_to": lambda: model.update_assigned_to(value),
            }

            field_actions.get(
                field, lambda: JsonResponse({"error": "Invalid JSON Data"}, status=400)
            )()

            return JsonResponse({"message": "Data Processed"}, status=200)
        except:
            return JsonResponse({"error": "Invalid JSON Data"}, status=400)
    return JsonResponse({"error": "only POST Request Allowed"}, status=405)


def tracker_update_operation(request,job_number):
    if request.method=="POST":
        try:
            data = json.loads(request.body)
            operation = int(data.get("opNumber"))
            value = models.STATUS_CHOICES[int(data.get("value"))][0]
            models.WorkOrderOperation.objects.filter(work_order=job_number,step_number=operation).update(status=value)

            return JsonResponse({"message": "Data Processed"}, status=200)
        except:
            return JsonResponse({"error": "Invalid JSON Data"}, status=400)
    return JsonResponse({"error": "only POST Request Allowed"}, status=405)
