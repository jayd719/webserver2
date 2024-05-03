from django.shortcuts import render
from serverJSP.settings import COMPANYNAME
from .models import PythonLibs 
from .models import CNC
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



def main(requests):
    DATA={
    'companyName':COMPANYNAME,
    'pythonLibs': PythonLibs.objects.all(),
    'machines':CNC.objects.all()
}   
    
    return render(requests,f'components/homepage.html',DATA)

def projects(requests):
    DATA={
    'companyName':COMPANYNAME,
    'pythonLibs': PythonLibs.objects.all(),
    'machines':CNC.objects.all()
}   
    return render(requests,f'projects/projects.html',DATA)


@csrf_exempt
def locationFromCords(request):
    """request - the HTTP request object (HttpRequest)
    Returns:
        JSON response indicating the success or failure of the operation (JsonResponse)
    -------------------------------------------------------
    """
    if request.method == 'POST':
        try:
            cordinates = json.loads(request.body.decode('utf-8'))['data']

            return JsonResponse({'success': True})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)



def engineeringPage(requests):
    return render(requests,f'EngineeringPage/engineeringPage.html')

def gantchart(requests):
    return render(requests,'ganttChart/ganttchart.html')