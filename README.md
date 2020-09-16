Para nuestro proyecto usamos AngularJs como framework de FrontEnd y Django para BackEnd

# FRONT END

## Instalación de paquetes
Es necesario instalar los siguientes paquetes:

```
npm install @angular/localize --save
npm install --save-dev @angular-devkit/build-angular
npm install --save intro.js
npm install --save @types/intro.js
npm install ngx-pagination --save
```

## Ejecución
Para ejecutar el front, se debe navegar a la carpeta frontApp y ejecutar como proyecto de Angular por medio del comando:

```
ng serve
```
Si se lo ejecuta de forma local en el puerto 4200 por defecto.

# BACK END

## Instalación de paquetes
Es necesario instalar los siguientes paquetes:

```
pip install djangorestframework pymysql mysqlclient django-cors-headers cryptography Pillow
```

## Ejecución del servidor
Para ejecutar el servidor del back end de Django, es necesario navegar hasta la carpeta ./backEnd/gpaRestApi y ejecutar el siguiente comando:
```
py manage.py runserver
```
Si se lo ejecuta de forma local en el puerto 8000 por defecto.