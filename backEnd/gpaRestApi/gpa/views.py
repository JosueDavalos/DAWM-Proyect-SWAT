from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.shortcuts import get_object_or_404
 
from gpa.models import Persona, Animal, Organizacion
from django.contrib.auth.models import User
from gpa.serializers import PersonaSerializer, UsuarioSerializer, AnimalSerializer, OrganizacionSerializer
 
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
        users = User.objects.all()
        users_serializer = UsuarioSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
 
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UsuarioSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            #VER SI DE ENCUENTRA UNA FIRMA DE SERIALIZAR BIEN LA CONTRASEÑA
            user = User.objects.get(username=user_data['username'])
            user.set_password(user_data['password']) 
            user.save()

            return HttpResponse('User create successfully! ', status=status.HTTP_201_CREATED) 
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        User.objects.all().delete()
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
        user = User.objects.get(pk=pk) 
    except User.DoesNotExist: 
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
 
    


#Animales

'''
        /usuario
        GET todos
        Post nuevo
        Delete ALL
'''
@csrf_exempt
def animal_list(request):
    #GET list, POST new, DELETE ALL
    if request.method == 'GET':
        animales = Animal.objects.all()
        animales_serializer = AnimalSerializer(animales, many=True)
        return JsonResponse(animales_serializer.data, safe=False)

    elif request.method == 'POST':
        animal_data = JSONParser().parse(request)
        animales_serializer = AnimalSerializer(data=animal_data)
        if animales_serializer.is_valid():
            animales_serializer.save()
            return HttpResponse('Animal has been successfully created', status=status.HTTP_201_CREATED) 
        return JsonResponse(animales_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        Animal.objects.all().delete()
        return HttpResponse("All animals has been deleted",status=status.HTTP_204_NO_CONTENT)
 
@csrf_exempt 
def animal_detail(request, pk):
    animal = get_object_or_404(Animal, pk=pk)
    
    if request.method == 'GET': 
        animal_serializer = AnimalSerializer(animal) 
        return JsonResponse(animal_serializer.data) 
 
    elif request.method == 'DELETE': 
        animal.delete()
        return HttpResponse("Animal %s has been deleted successfully" % pk ,status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def organizacion_list(request):
    #GET list, POST new, DELETE ALL
    if request.method == 'GET':
        organizaciones = Organizacion.objects.all()
        organizaciones_serializer = OrganizacionSerializer(organizaciones, many=True)
        return JsonResponse(organizaciones_serializer.data, safe=False)

    elif request.method == 'POST':
        org_data = JSONParser().parse(request)
        org_serializer = OrganizacionSerializer(data=org_data)
        if org_serializer.is_valid():
            org_serializer.save()
            return HttpResponse('The organization has been successfully created', status=status.HTTP_201_CREATED) 
        return JsonResponse(org_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        Organizacion.objects.all().delete()
        return HttpResponse("All Organizations has been deleted",status=status.HTTP_204_NO_CONTENT)
 