from rest_framework import serializers 
from gpa.models import Persona,Usuario
 
 
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
        model = Usuario
        fields = ('id',
                  'user',
                  'password',
                  'persona',
                  'active')