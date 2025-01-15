from django.shortcuts import render, redirect


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
