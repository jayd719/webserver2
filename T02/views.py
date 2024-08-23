from django.shortcuts import render
from django.shortcuts import HttpResponse


def helloworld(request):
    return render(request,'landingPage/index.html')


# Create your views here.
