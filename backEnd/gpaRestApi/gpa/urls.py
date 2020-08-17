from django.conf.urls import url 
from gpa import views 
 
urlpatterns = [ 
    url(r'^persona/$', views.user_list),
    url(r'^persona/(?P<pk>[0-9]+)$', views.user_detail),
    url(r'^persona/cargo/(?P<cargo>[a-z]+)$', views.user_list_cargo),
]