from django.conf.urls import url 
from gpa import views 
 
urlpatterns = [ 
    url(r'^user/$', views.user_list),
    url(r'^user/(?P<pk>[0-9]+)$', views.user_detail),
    url(r'^user/cargo/(?P<cargo>[a-z]+)$', views.user_list_cargo),
]