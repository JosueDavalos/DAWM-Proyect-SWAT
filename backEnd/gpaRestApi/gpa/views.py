from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.shortcuts import get_object_or_404
 
from gpa.models import Persona, Animal, Organizacion, FormularioPonerAdopcion,Adopcion,EstadoAnimal
from django.contrib.auth.models import User
from gpa.serializers import PersonaSerializer, UsuarioSerializer, AnimalSerializer, OrganizacionSerializer, FormularioPonerAdopcionSerializer,AdopcionSerializer

from django.core.mail import send_mail
from django.conf import settings

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
    #user = get_object_or_404(Persona, pk=pk)

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


@csrf_exempt
def user_login_request(request):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        user = get_object_or_404(User,username=user_data['username'])
        user_serializer = UsuarioSerializer(user) 


        if user.check_password(user_data['password']):
            if user_data['username']=="admin":
                user_data['cargo']='A'
            else:
                id=user_serializer.data['id']

                try:
                    persona = Persona.objects.get(user=id)             
                except Persona.DoesNotExist:
                    persona = None
                person_serializer = PersonaSerializer(persona)
                user_data['cargo']=person_serializer.data['cargo']
            
            return JsonResponse(user_data, safe=False)
        return JsonResponse('Usuario o contraseña incorrecto',status=status.HTTP_404_NOT_FOUND,safe=False)
    




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
        print(animales_serializer)
        if animales_serializer.is_valid():
            estado = None
            animales_serializer.save()
            try:
                estado = EstadoAnimal.objects.filter(estado='E')[0]
            except:
                print('\tNo hay estado animal')
            animales_serializer.save().estado=estado
            

            return JsonResponse(animales_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(animales_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        Animal.objects.all().delete()
        return HttpResponse("All animals has been deleted",status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def animal_en_adopcion(request):
    if request.method == 'GET':
        animales = Animal.objects.filter(estado__estado='E')
        animales_serializer = AnimalSerializer(animales, many=True)
        return JsonResponse(animales_serializer.data, safe=False)
 
@csrf_exempt
def animal_adoptados(request):
    if request.method == 'GET':
        animales = Animal.objects.filter(estado__estado='A')
        animales_serializer = AnimalSerializer(animales, many=True)
        return JsonResponse(animales_serializer.data, safe=False)

@csrf_exempt 
def animal_detail(request, pk):
    animal = get_object_or_404(Animal, pk=pk)
    
    if request.method == 'GET': 
        animal_serializer = AnimalSerializer(animal) 
        return JsonResponse(animal_serializer.data) 
    
    #cambiar a adoptado
    elif request.method == 'PUT':
        estado = None
        try:
            estado = EstadoAnimal.objects.filter(estado='A')[0]
        except:
            print('\tAnimal no puede ser adoptado')
        animal.estado=estado
        animal.save()
        return JsonResponse(AnimalSerializer(animal).data)

    elif request.method == 'DELETE': 
        animal.delete()
        return HttpResponse("Animal %s has been deleted successfully" % pk ,status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def animal_filter(request, tipo):
    
    animales = Animal.objects.filter(tipo=tipo)
    
    if request.method == 'GET': 
        #adopciones = Adopcion.objects.all()
        
        serializer = AnimalSerializer(animales, many=True)
        return JsonResponse(serializer.data, safe=False)




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
 
@csrf_exempt 
def organizacion_detail(request, pk):
    organizacion = get_object_or_404(Organizacion, pk=pk)
    
    if request.method == 'GET': 
        organizacion_serializer = OrganizacionSerializer(organizacion) 
        return JsonResponse(organizacion_serializer.data) 

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OrganizacionSerializer(organizacion, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
 
    elif request.method == 'DELETE': 
        organizacion.delete()
        return HttpResponse("Organizacion %s has been deleted successfully" % pk ,status=status.HTTP_204_NO_CONTENT)



@csrf_exempt
def formularioPonerAdopcion_list(request):
    # NOT YET GET MODEL BASED ERROR
    if request.method == 'GET':
        formularios = FormularioPonerAdopcion.objects.all()
        formulario_serializer = FormularioPonerAdopcionSerializer(formularios, many=True)
        return JsonResponse(formulario_serializer.data, safe=False)

    elif request.method == 'POST':
        formulario_data = JSONParser().parse(request)
        formulario_serializer = FormularioPonerAdopcionSerializer(data=formulario_data)

        if formulario_serializer.is_valid():
            formulario_data['persona'] = Persona.objects.get(pk=formulario_data['persona'])
            formulario_data['animal'] = Animal.objects.get(pk=formulario_data['animal'])
            FormularioPonerAdopcion.objects.create(**formulario_data).save()

            return HttpResponse('Formulario has been successfully created', status=status.HTTP_201_CREATED) 
        return HttpResponse('Ocurrió un error', status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        FormularioPonerAdopcion.objects.all().delete()
        return HttpResponse("All Formularios has been deleted",status=status.HTTP_204_NO_CONTENT)
 
@csrf_exempt 
def formularioPonerAdopcion_detail(request, pk):
    formulario = get_object_or_404( FormularioPonerAdopcion, pk=pk)
    if request.method == 'GET': 
        formulario_serializer = FormularioPonerAdopcionSerializer(formulario) 
        return JsonResponse(formulario_serializer.data) 

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = FormularioPonerAdopcionSerializer(formulario, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
 
    elif request.method == 'DELETE': 
        formulario.delete()
        return HttpResponse("Formulario %s has been deleted successfully" % pk ,status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def adopcion_list(request):
    if request.method == 'GET':
        objetos = Adopcion.objects.all()
        objeto_serializer = AdopcionSerializer(objetos, many=True)
        return JsonResponse(objeto_serializer.data, safe=False)

    elif request.method == 'POST':
        objeto_data = JSONParser().parse(request)
        objeto_serializer = AdopcionSerializer(data=objeto_data)

        if objeto_serializer.is_valid():
            objeto_data['idUsuario'] = Persona.objects.get(pk=objeto_data['idUsuario'])
            objeto_data['idAnimal'] = Animal.objects.get(pk=objeto_data['idAnimal'])
            Adopcion.objects.create(**objeto_data).save()

            return HttpResponse('Formulario has been successfully created', status=status.HTTP_201_CREATED) 
        return HttpResponse('Ocurrió un error', status=status.HTTP_400_BAD_REQUEST)
   
    elif request.method == 'DELETE':
        Adopcion.objects.all().delete()
        return HttpResponse("Todas las adopciones fueron eliminadas",status=status.HTTP_204_NO_CONTENT)
 
@csrf_exempt 
def adopcion_detail(request, pk):
    objeto = get_object_or_404( Adopcion, pk=pk)
    if request.method == 'GET': 
        objeto_serializer = AdopcionSerializer(objeto) 
        return JsonResponse(objeto_serializer.data) 

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AdopcionSerializer(objeto, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
 
    elif request.method == 'DELETE': 
        objeto.delete()
        return HttpResponse("La adopcion %s ha sido eliminada exitosamente" % pk ,status=status.HTTP_204_NO_CONTENT)

@csrf_exempt 
def contactanos(request):
    if  request.method=='POST':
        data = JSONParser().parse(request)
        mensaje = 'Su mascota ha sido agragada en la lista de adopciones de la página.'
        email = data['email']

        email_from = settings.EMAIL_HOST_USER
        send_mail('Mascota en adopcion!', mensaje, email_from , [email])
        return HttpResponse("Gracias por contactarnos"  ,status=status.HTTP_200_OK)

@csrf_exempt 
def contactanos_home(request):
    if  request.method=='POST':
        data = JSONParser().parse(request)
        email = data['email']
        mensaje = data['mensaje']
        admin_email = 'eunicegalvez17@gmail.com'
        mensaje = 'Un nuevo usuario se desea contactar con GPA\nCorreo: %s\nMensaje: %s' %(email,mensaje)

        email_from = settings.EMAIL_HOST_USER
        send_mail('Formulario de información', mensaje, email_from , [admin_email])
        return HttpResponse("Gracias por contactarnos"  ,status=status.HTTP_200_OK)

@csrf_exempt
def adopcion_filter_month(request, mes):
    
    adopciones = Adopcion.objects.filter(fecha__month=mes)
        
    if request.method == 'GET': 
        serializer = AdopcionSerializer(adopciones, many=True)
        return JsonResponse(serializer.data, safe=False)
