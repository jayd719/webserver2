from django.shortcuts import render,HttpResponse

# Create your views here.
def home(request):
    return render(request,'cncHomePage.html')


def cnc_simulator(request):
    return HttpResponse("project 1")

def setup_sheets(request):
    return HttpResponse("project 2")