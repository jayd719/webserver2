from django.shortcuts import render


def resume1(request):
    return render(request, 'resume1.html')


def resume2(request):
    return render(request, 'resume2.html')


def about_me(request):
    return render(request, 'aboutMe/index.html')
    

def open_cv_project_1(request):
    return render(request, "ProjectReports/openCV1.html")
