from django.db import models

# Create your models here.
class Usuario(models.Model):
    cedula = models.CharField(max_length=10, blank=False, default='',primary_key=True)
    nombre = models.CharField(max_length=30, blank=False, default='')
    apellido = models.CharField(max_length=30, blank=False, default='')
    sexo = models.CharField(max_length=10, blank=False, default='')
    cargo = models.CharField(max_length=30, blank=False, default='')
    fechaNacimiento = models.DateField()
    direccion = models.CharField(max_length=200, blank=False, default='')
    telefono = models.IntegerField(blank=False, default=1)
    email = models.EmailField(max_length=254)
    active = models.BooleanField(default=False)