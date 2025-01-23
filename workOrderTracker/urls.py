from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.homepage, name="tracker-home"),
    path("tracker/", views.tracker_view, name="tracker-dashboard"),
    # test
    path("testlink/", views.tracker_main_view, name="test"),
]

# actions
urlpatterns += [
    # update Date
    path(
        "tracker/update_tracker_field/<str:job_number>",
        views.tracker_update_fields,
        name="update-tracker-field",
    ),
]
