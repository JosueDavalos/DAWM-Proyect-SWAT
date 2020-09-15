# pylint: disable=too-few-public-methods
from django.contrib.auth.models import User
from django.db import models


class Persona(models.Model):
    CARGOS = (
        ('A', 'Admin'),
        ('V', 'Voluntario'),
        ('O', 'Organizador'),
        ('E', 'Externo'),
    )

    cedula = models.CharField(max_length=10, blank=False, primary_key=True)
    nombre = models.CharField(max_length=30, blank=False, default='')
    apellido = models.CharField(max_length=30, blank=False, default='')
    sexo = models.CharField(max_length=10, blank=False, default='')
    fechaNacimiento = models.DateField()
    telefono = models.CharField(max_length=12, blank=False, default='---')
    celular = models.CharField(max_length=10, blank=False,default='---' )
    ciudad = models.CharField(max_length=100, blank=False, default='')
    direccion = models.CharField(max_length=200, blank=False, default='')
    email = models.EmailField(max_length=254)
    cargo = models.CharField(max_length=1, blank=False, choices=CARGOS)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    foto = models.ImageField(upload_to='users/pictures', blank=True, null=True)
    def __str__(self):
            return self.cedula

class Recurso(models.Model):
    id = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=30, blank=False, default='')
    nombre = models.CharField(max_length=30, blank=False, default='')
    descripcion = models.CharField(max_length=200, blank=False, default='')

class Organizacion(models.Model):
    id = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=30, blank=False, default='')
    nombre = models.CharField(max_length=30, blank=False, default='')
    descripcion = models.CharField(max_length=200, blank=False, default='')
    ubicacion = models.CharField(max_length=200, blank=False, default='')
    contacto = models.IntegerField(blank=False, default=1)

class Donacion(models.Model):
    id = models.AutoField(primary_key=True)
    idOrganizacion = models.ForeignKey(Organizacion, on_delete=models.CASCADE)
    idRecurso = models.ForeignKey(Recurso, on_delete=models.CASCADE)
    fecha = models.DateField()
    costo = models.FloatField(blank=False, default=1)


class EnfermedadAnimal(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30, null=False)
    fecha = models.DateField(null=False)
    sintomas = models.CharField(max_length=200, null=False)
    duracion = models.IntegerField()

class Medicina(models.Model):
    id = models.AutoField(primary_key=True)
    recurso = models.ForeignKey(Recurso, on_delete=models.CASCADE) 
    fechaCompra = models.DateField(null=False)
    costo = models.DecimalField(max_digits=6, decimal_places=2)

class HistorialMedico(models.Model):
    id = models.AutoField(primary_key=True)
    medicina = models.ForeignKey(Medicina, on_delete=models.SET_NULL, null=True)
    enfermedad = models.ForeignKey(EnfermedadAnimal, on_delete=models.SET_NULL, null=True)

class EstadoAnimal(models.Model):
    ESTADOS = (
        ('A', 'adoptado'),
        ('E', 'en_adopcion'),
        ('C', 'colonia'),
        ('P', 'colonia'),
    )
    id = models.AutoField(primary_key=True)
    estado = models.CharField(max_length=20, null=False, choices=ESTADOS)

class Animal(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    tipo = models.CharField(max_length=20)
    raza = models.CharField(max_length=50)
    edad = models.IntegerField()
    sexo = models.CharField(max_length=20)
    esterilizado = models.CharField(max_length=3)
    color = models.CharField(max_length=20)
    # ubicacion = models.CharField(max_length=200, null=False) #REVISAR SI VA ESTO
    # descripcion = models.CharField(max_length=200)#REVISAR SI VA ESTO
    dueno = models.ForeignKey(Persona, on_delete=models.SET_NULL, null=True) #SI SE CAMBIA LA TABLA USUARIO MODIFICAR ESTO
    historial = models.ForeignKey(HistorialMedico, on_delete=models.SET_NULL, null=True)
    estado = models.ForeignKey(EstadoAnimal, on_delete=models.SET_NULL, null=True)
    def __str__(self):
            return self.nombre

class FotoAnimal(models.Model):
    id = models.AutoField(primary_key=True)
    foto = models.ImageField(upload_to='animals/pictures', blank=True, null=True)
    image = models.ForeignKey(Animal, on_delete=models.CASCADE)

class Adopcion(models.Model):
    id = models.AutoField(primary_key=True)
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, related_name='adopciones')
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    def __str__(self):
        return "Id:%s\nUsuario: %s\nAnimal:%s\nFecha:%s" %(self.id,self.persona,self.animal,self.fecha)

class Ubicacion(models.Model):
    id = models.AutoField(primary_key=True)
    lat = models.FloatField(blank=False, default=1)
    long = models.FloatField(blank=False, default=1)

class FormularioPonerAdopcion(models.Model):
    id = models.AutoField(primary_key=True)
    persona = models.ForeignKey(Persona, on_delete=models.CASCADE, related_name='formularios') #SI SE CAMBIA LA TABLA USUARIO MODIFICAR ESTO
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    motivo = models.CharField(max_length=400, null=False)
    fecha = models.DateTimeField(auto_now_add=True, blank=True)
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.SET_NULL, null=True) 
    def __str__(self):
        return "id: %s\nuser: %s\nanimal:%s" % (self.id,self.persona, self.animal)







