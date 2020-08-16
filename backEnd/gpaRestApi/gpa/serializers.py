from rest_framework import serializers 
from gpa.models import Usuario
 
 
class UsuarioSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Usuario
        fields = ('cedula',
                  'nombre',
                  'apellido',
                  'sexo',
                  'cargo',
                  'fechaNacimiento',
                  'direccion',
                  'telefono',
                  'email',
                  'active')