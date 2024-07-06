from django.shortcuts import render

# Create your views here.

def criketAppHomePage(request):
    return render(request,'cricketApp/index.html')