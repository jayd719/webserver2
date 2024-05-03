from django.shortcuts import render,HttpResponse
from django import forms
from django_recaptcha.fields import ReCaptchaField,ReCaptchaV2Checkbox

# Create your views here.

class ContactForm(forms.Form): 
    email = forms.CharField(max_length=100)
    captcha = ReCaptchaField(widget=ReCaptchaV2Checkbox)
    
def landingPage_1(requests):
    if requests.method == 'POST': 
        form = ContactForm(requests.POST) 
        if form.is_valid(): 
            print
            return HttpResponse("Yay! you are human.") 
        else: 
            return HttpResponse("OOPS! Bot suspected.") 
            
    else: 
        form = ContactForm() 
          
    return render(requests, 'homepage.html', {'form':form})

def projects(requests):
    return render(requests,'projects.html')
    