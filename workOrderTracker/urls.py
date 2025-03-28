from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.homepage, name="tracker-home"),
    path("tracker/", views.tracker_view, name="tracker-dashboard"),
    # test
    path("tracker-main/", views.tracker_main_view, name="tracker-main"),
    path("get_users_list/", views.tracker_user_list, name="tracker-userlist"),
    path("tracker-cached/", views.tracker_cached_json, name="tracker-version-2"),
]

# actions
urlpatterns += [
    # update Date
    path(
        "tracker/update_tracker_field/<str:job_number>",
        views.tracker_update_fields,
        name="update-tracker-field",
    ),
    path(
        "tracker/update_operation_field/<str:job_number>",
        views.tracker_update_operation,
        name="update-tracker-operation",
    ),
]
