from django.conf.urls import url 
from gpa import views 
 
urlpatterns = [ 
    #persona
    url(r'^persona/$', views.person_list),
    url(r'^persona/(?P<pk>[0-9]+)$', views.person_detail),
    url(r'^persona/cargo/(?P<cargo>[a-z]+)$', views.person_list_cargo),

    #usuario
    url(r'^usuario/$', views.user_list),
    url(r'^users/authenticate$', views.user_login_request),
    url(r'^usuario/(?P<pk>[0-9]+)$', views.user_detail),

    #animales
    url(r'^animal/$', views.animal_list), 
    url(r'^animal/(?P<pk>[0-9]+)$', views.animal_detail),
    url(r'^animal/EnAdopcion/$', views.animal_en_adopcion), 
    url(r'^animal/adoptados/$', views.animal_adoptados), 
    url(r'^animal/(?P<tipo>[a-z]+)$', views.animal_filter),
    
    #organizacion
    url(r'^organizacion/$', views.organizacion_list),
    url(r'^organizacion/(?P<pk>[0-9]+)$', views.organizacion_detail),
    
    #formulario poner adopcion
    url(r'^formularioPonerAdopcion/$', views.formularioPonerAdopcion_list),
    url(r'^formularioPonerAdopcion/(?P<pk>[0-9]+)$', views.formularioPonerAdopcion_detail),

    #adopcion
       #formulario poner adopcion
    url(r'^adopcion/$', views.adopcion_list),
    url(r'^adopcion/(?P<pk>[0-9]+)$', views.adopcion_detail),
    url(r'^adopcion/mes/(?P<mes>[0-9]+)$', views.adopcion_filter_month),
    
 
   
]