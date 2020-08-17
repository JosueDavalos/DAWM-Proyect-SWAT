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


class EnfermedadAnimal(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30, null=False)
    fecha = models.DateField(null=False)
    sintomas = models.CharField(max_length=200, null=False)
    duracion = models.IntegerField()

class Medicina(models.Model):
    id = models.AutoField(primary_key=True) #PONER FK BRYAN
    fechaCompra = models.DateField(null=False)
    costo = models.DecimalField(max_digits=6, decimal_places=2, null= False)

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
    raza = models.CharField(max_length=20)
    edad = models.IntegerField()
    sexo = models.IntegerField()
    esterilizado = models.IntegerField()
    color = models.CharField(max_length=10)
    # ubicacion = models.CharField(max_length=200, null=False) #REVISAR SI VA ESTO
    descripcion = models.CharField(max_length=200)#REVISAR SI VA ESTO
    dueno = models.ForeignKey(Usuario, on_delete=models.CASCADE, default='9999999999') #SI SE CAMBIA LA TABLA USUARIO MODIFICAR ESTO
    historial = models.ForeignKey(HistorialMedico, on_delete=models.SET_NULL, null=True)
    estado = models.ForeignKey(EstadoAnimal, on_delete=models.SET_NULL, null=True)


class FormularioPonerAdopcion(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE, default='9999999999') #SI SE CAMBIA LA TABLA USUARIO MODIFICAR ESTO
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    motivo = models.CharField(max_length=400, null=False)
    fecha = models.DateTimeField(auto_now_add=True, blank=True)
    ubicacion = models.CharField(max_length=20) #PONER FK BRYAN