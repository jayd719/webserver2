from django.shortcuts import render
from django.shortcuts import HttpResponse


def helloworld(request):
    return render(request,'landingPage/index.html')

def helloword_projects(request):
    return render(request,'projects/index.html')


# Create your views here.
