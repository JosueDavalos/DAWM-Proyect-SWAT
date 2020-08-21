from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from gpa.models import Persona,Usuario
from gpa.serializers import PersonaSerializer,UsuarioSerializer
 
#Personas

'''
        /persona
        GET todos
        Post nuevo
        Delete ALL
'''
@csrf_exempt
def person_list(request):
    
    if request.method == 'GET':
        users = Persona.objects.all()
        users_serializer = PersonaSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
 
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = PersonaSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        Persona.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 

'''
        /persona/id
        GET por ID
        PUT por ID
        DELETE por ID
'''
@csrf_exempt 
def person_detail(request, pk):
    
    try: 
        user = Persona.objects.get(pk=pk) 
    except Persona.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        user_serializer = PersonaSerializer(user) 
        return JsonResponse(user_serializer.data) 
 
    elif request.method == 'PUT': 
        user_data = JSONParser().parse(request) 
        user_serializer = PersonaSerializer(user, data=user_data) 
        if user_serializer.is_valid(): 
            user_serializer.save() 
            return JsonResponse(user_serializer.data) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        user.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 

'''
        /persona/cargo/<nombre del cargo>
        filtro por cargo
'''    
@csrf_exempt
def person_list_cargo(request, cargo):
    
    users = Persona.objects.filter(cargo=cargo)
        
    if request.method == 'GET': 
        user_serializer = PersonaSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'


#Usuarios

'''
        /usuario
        GET todos
        Post nuevo
        Delete ALL
'''
@csrf_exempt
def user_list(request):
    #GET list, POST new, DELETE ALL
    if request.method == 'GET':
        users = Usuario.objects.all()
        users_serializer = UsuarioSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
 
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UsuarioSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        Usuario.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 
 
'''
        /usuario/id
        GET por ID
        PUT por ID
        DELETE por ID
'''
@csrf_exempt 
def user_detail(request, pk):
    #GET por ID, PUT por ID, DELETE por ID
    try: 
        user = Usuario.objects.get(pk=pk) 
    except Usuario.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        user_serializer = UsuarioSerializer(user) 
        return JsonResponse(user_serializer.data) 
 
    elif request.method == 'PUT': 
        user_data = JSONParser().parse(request) 
        user_serializer = UsuarioSerializer(user, data=user_data) 
        if user_serializer.is_valid(): 
            user_serializer.save() 
            return JsonResponse(user_serializer.data) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        user.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
 
    