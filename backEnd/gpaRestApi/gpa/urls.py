from django.conf.urls import url 
from gpa import views 
 
urlpatterns = [ 
    #persona
    url(r'^persona/$', views.person_list),
    url(r'^persona/(?P<pk>[0-9]+)$', views.person_detail),
    url(r'^persona/cargo/(?P<cargo>[a-z]+)$', views.person_list_cargo),

    #usuario
    url(r'^usuario/$', views.user_list),
    # url(r'^usuario/(?P<pk>[0-9]+)$', views.user_detail),

    #animales
    url(r'^animal/$', views.animal_list),
    url(r'^animal/(?P<pk>[0-9]+)$', views.animal_detail),
    #organizacion
    url(r'^organizacion/$', views.organizacion_list),
    
   
]