from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return render(request, 'testapp/index.html')


@csrf_exempt
def register(request):
    if request.method == 'POST' and request.content_type == 'application/json':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except Exception:
            return JsonResponse({'message': 'Invalid JSON.'}, status=400)

        username = data.get('username', '').strip()
        email = data.get('email', '').strip()
        password = data.get('password', '')


        errors = []
        if not username:
            errors.append('Username is required.')
        if not email:
            errors.append('Email is required.')
        if not password:
            errors.append('Password is required.')

        if errors:
            return JsonResponse({'message': errors[0]}, status=400)
        return JsonResponse({'message': 'Registration successful!'}, status=201)

    return render(request, 'testapp/register.html')