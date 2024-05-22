from django.shortcuts import render
from django.shortcuts import HttpResponse
from serverJSP.settings import COMPANYNAME
from .models import PythonLibs 
from .models import CNC
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt





def main(requests):  
    newUser=False
    if requests.COOKIES.get('cookiesThisIsUseless') is None:  
        newUser=True
    data={'newUser':newUser}
    return render(requests,f'components/homepage.html',data)

def createCookies(requests):
    html = HttpResponse("")
    html.set_cookie('cookiesThisIsUseless', 'cookiesCreated',secure=True)
    return html





