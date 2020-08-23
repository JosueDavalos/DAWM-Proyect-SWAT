from rest_framework import serializers 
from gpa.models import Persona, Animal
from django.contrib.auth.models import User


def load_data():
    from datetime import datetime
    import pandas as pd

    df = pd.read_csv('backEnd/datos/aac_shelter_cat_outcome_eng.csv')
    df = df[df['name'].notnull()]
    df['date_of_birth'] = ((datetime.now() - pd.to_datetime(df['date_of_birth'])).dt.days/365).astype(int)
    l = ['name','animal_type','breed','date_of_birth','sex','Spay/Neuter','color1']

    for data in df[l].head(100).values:
        nombre, tipo, raza, edad, sexo, esterelizado, color = list(data) 
        animal = Animal.objects.create(nombre=nombre, tipo=tipo, raza=raza, edad= edad, sexo=sexo, esterelizado=esterelizado, color=color)
        animal.save()
# load_data()

class PersonaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Persona
        fields = ('cedula',
                  'nombre',
                  'apellido',
                  'sexo',
                  'cargo',
                  'fechaNacimiento',
                  'direccion',
                  'telefono',
                  'email')

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',
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
                  'esterelizado', 
                  'color'
                  )