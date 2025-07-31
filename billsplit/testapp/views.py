from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.


def index(request):
    return render(request, 'testapp/index.html')


def register(request):
    context = {}
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        confirm_password = request.POST.get('confirm-password', '')

        # Basic validation
        errors = []
        if not username:
            errors.append('Username is required.')
        if not email:
            errors.append('Email is required.')
        if not password:
            errors.append('Password is required.')
        if password != confirm_password:
            errors.append('Passwords do not match.')

        if errors:
            context['errors'] = errors
            context['username'] = username
            context['email'] = email
        else:
            print("success")
    return render(request, 'testapp/register.html', context)