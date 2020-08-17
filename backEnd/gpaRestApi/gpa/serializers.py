from rest_framework import serializers 
from gpa.models import Persona
 
 
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