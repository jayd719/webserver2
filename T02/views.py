from django.shortcuts import render
from django.shortcuts import HttpResponse


def helloworld(request):
    return render(request,'landingPage/index.html')

def helloword_projects(request):
    return render(request,'projects/index.html')

def visiting_card(request):
    return render(request,"landingPage/cardHTML.html")

# Create your views here.
