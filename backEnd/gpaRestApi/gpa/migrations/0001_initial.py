# Generated by Django 3.0.9 on 2020-08-23 17:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=30)),
                ('tipo', models.CharField(max_length=20)),
                ('raza', models.CharField(max_length=50)),
                ('edad', models.IntegerField()),
                ('sexo', models.CharField(max_length=20)),
                ('esterilizado', models.CharField(max_length=3)),
                ('color', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='EnfermedadAnimal',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=30)),
                ('fecha', models.DateField()),
                ('sintomas', models.CharField(max_length=200)),
                ('duracion', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='EstadoAnimal',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('estado', models.CharField(choices=[('A', 'adoptado'), ('E', 'en_adopcion'), ('C', 'colonia'), ('P', 'colonia')], max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Organizacion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(default='', max_length=30)),
                ('nombre', models.CharField(default='', max_length=30)),
                ('descripcion', models.CharField(default='', max_length=200)),
                ('ubicacion', models.CharField(default='', max_length=200)),
                ('contacto', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Recurso',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(default='', max_length=30)),
                ('nombre', models.CharField(default='', max_length=30)),
                ('descripcion', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Ubicacion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('lat', models.FloatField(default=1)),
                ('long', models.FloatField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('cedula', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('nombre', models.CharField(default='', max_length=30)),
                ('apellido', models.CharField(default='', max_length=30)),
                ('sexo', models.CharField(default='', max_length=10)),
                ('fechaNacimiento', models.DateField()),
                ('telefono', models.CharField(default='---', max_length=12)),
                ('celular', models.CharField(default='---', max_length=10)),
                ('ciudad', models.CharField(default='', max_length=100)),
                ('direccion', models.CharField(default='', max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('cargo', models.CharField(choices=[('A', 'Admin'), ('V', 'Voluntario'), ('O', 'Organizador'), ('E', 'Externo')], max_length=1)),
                ('foto', models.ImageField(blank=True, null=True, upload_to='users/pictures')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Medicina',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fechaCompra', models.DateField()),
                ('costo', models.DecimalField(decimal_places=2, max_digits=6)),
                ('recurso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Recurso')),
            ],
        ),
        migrations.CreateModel(
            name='HistorialMedico',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('enfermedad', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.EnfermedadAnimal')),
                ('medicina', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.Medicina')),
            ],
        ),
        migrations.CreateModel(
            name='FormularioPonerAdopcion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('motivo', models.CharField(max_length=400)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('animal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Animal')),
                ('ubicacion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.Ubicacion')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Persona')),
            ],
        ),
        migrations.CreateModel(
            name='Donacion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('costo', models.FloatField(default=1)),
                ('idOrganizacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Organizacion')),
                ('idRecurso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Recurso')),
            ],
        ),
        migrations.AddField(
            model_name='animal',
            name='dueno',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.Persona'),
        ),
        migrations.AddField(
            model_name='animal',
            name='estado',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.EstadoAnimal'),
        ),
        migrations.AddField(
            model_name='animal',
            name='historial',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='gpa.HistorialMedico'),
        ),
        migrations.CreateModel(
            name='Adopcion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('idAnimal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Animal')),
                ('idUsuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gpa.Persona')),
            ],
        ),
    ]
