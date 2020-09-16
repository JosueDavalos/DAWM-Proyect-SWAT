from rest_framework import serializers 
from gpa.models import Persona, Animal, Adopcion, FormularioPonerAdopcion, Ubicacion, Organizacion
from django.contrib.auth.models import User



class PersonaSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Persona
        fields = ('cedula',
                  'nombre',
                  'apellido',
                  'sexo',
                  'cargo',
                  'ciudad',
                  'fechaNacimiento',
                  'direccion',
                  'telefono',
                  'celular',
                  'email',
                  'user',
                  'foto')

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',
                  'username',
                  'password',
                  'email',
                  'is_superuser',
                  'is_staff'
                  )

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ('nombre',
                  'tipo',
                  'raza', 
                  'edad', 
                  'sexo', 
                  'esterilizado', 
                  'color'
                  )


class OrganizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizacion
        fields = ('nombre',
                  'tipo',
                  'descripcion', 
                  'ubicacion', 
                  'contacto', 
                  )

class FormularioPonerAdopcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormularioPonerAdopcion
        fields = (
                  'persona',
                  'animal',
                  'motivo',
                  'fecha',
                  'ubicacion')
        depth = 1





#Cargar datos a la base
def load_data():
    from datetime import datetime
    import pandas as pd
    import django


    #ANIMALES
    df = pd.read_csv('backEnd/datos/aac_shelter_cat_outcome_eng.csv')
    df = df[df['name'].notnull()]
    df['date_of_birth'] = ((datetime.now() - pd.to_datetime(df['date_of_birth'])).dt.days/365).astype(int)
    l = ['name','animal_type','breed','date_of_birth','sex','Spay/Neuter','color1']
    for data in df[l].head(100).values:
        nombre, tipo, raza, edad, sexo, esterilizado, color = list(data) 
        animal = Animal.objects.create(nombre=nombre, tipo=tipo, raza=raza, edad= edad, sexo=sexo, esterilizado=esterilizado, color=color)
        animal.save()
    print("Animales cargados....OK")

    #PERSONAS
    personas = pd.read_pickle('backEnd/datos/personas')
    for persona in personas.values:
        cedula, nombre, apellido, sexo, fechaNacimiento, telefono, celular, ciudad, direccion, email, cargo = list(persona)
        try:
            person = Persona.objects.create(cedula=cedula, nombre=nombre, apellido=apellido, sexo=sexo, fechaNacimiento=fechaNacimiento, 
                                        telefono=telefono, celular=celular, ciudad=ciudad, direccion=direccion, email=email, cargo=cargo)
            person.save()
        except django.db.utils.IntegrityError:
            print("No se pudo ingresar a la persona",list(persona))
    print("Personas cargadas....OK")

    #ADOPCIONES
    adopciones = pd.read_pickle('backEnd/datos/adopciones')
    for dato in adopciones.values:
        animal, duenio, fecha= list(dato) 
        adopcion = Adopcion.objects.create(idUsuario=Persona.objects.get(pk=duenio), idAnimal=Animal.objects.get(pk=animal), fecha=fecha)
        adopcion.save()
    print("Adopciones cargadas....OK")


    #FORMULARIO DE ADOPCION
    import random as rd
    formularios = pd.read_pickle('backEnd/datos/formulario_adopciones')
    d_ciudad = {'Guayaquil':[-2.19616, -79.88621], 'Quito': [-0.1721188747651727, -78.541259765625], 'Cuenca':[-2.09616, -78.607177734375]}

    for dato in formularios.values:
        animal, duenio, motivo, fecha= list(dato) 
        duenio = Persona.objects.get(pk=duenio)
        
        #UBICACION
        lat, long = d_ciudad.get(duenio.ciudad, [-2.19616-1/(rd.randint(-10,10)+0.99), -79.88621-1/(rd.randint(-10,10)+0.99)])
        ubi = Ubicacion.objects.create(lat= lat, long=long)
        ubi.save()

        formulario = FormularioPonerAdopcion.objects.create(persona=duenio, animal=Animal.objects.get(pk=animal),
                                                            motivo=motivo, fecha=fecha, ubicacion=ubi)
        formulario.save()
    print("Formularios cargados....ok")
                            

    USER
    admin = User.objects.create_user('admin', 'jedavalo@espol.edu.ec', 'admin', is_superuser=True, is_staff=True)
    josue = User.objects.create_user('josue', 'jedavalo@espol.edu.ec', 'josue')
    bryan = User.objects.create_user('bryan', 'bryan@espol.edu.ec', 'bryan')
    erick = User.objects.create_user('erick', 'erick@espol.edu.ec', 'erick')
    eunice = User.objects.create_user('eunice', 'eunice@espol.edu.ec', 'eunice')

    Persona.objects.create(cedula='0989195204', nombre='Josue', apellido='Davalos', sexo='Masculino', fechaNacimiento='1998-12-07', telefono='---', 
                            celular='0989195204', ciudad='Guayaquil', direccion='Ceibos', email='jedavalo@espol.edu.ec', cargo='A', 
                            user=User.objects.get(username='josue')).save()

    Persona.objects.create(cedula='0989195205', nombre='Erick', apellido='Pulla', sexo='Masculino', fechaNacimiento='1998-12-07', telefono='---', 
                            celular='0989195204', ciudad='Guayaquil', direccion='Ceibos', email='erick@espol.edu.ec', cargo='A', 
                            user=User.objects.get(username='erick')).save()

    Persona.objects.create(cedula='0989195206', nombre='Bryan', apellido='Sanchez', sexo='Masculino', fechaNacimiento='1998-12-07', telefono='---', 
                            celular='0989195204', ciudad='Guayaquil', direccion='Ceibos', email='bryan@espol.edu.ec', cargo='A', 
                            user=User.objects.get(username='bryan')).save()


    Persona.objects.create(cedula='0989195207', nombre='Eunice', apellido='Galvez', sexo='Masculino', fechaNacimiento='1998-12-07', telefono='---', 
                            celular='0989195204', ciudad='Guayaquil', direccion='Ceibos', email='eunice@espol.edu.ec', cargo='A', 
                            user=User.objects.get(username='eunice')).save()


    print("Usuarios cargados....Ok\n")



# load_data() #Desconmentar si se quiere agregar datos, cuando haces migrate tambien se corre esta linea

