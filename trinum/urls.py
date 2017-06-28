from django.conf.urls import url
from . import views


app_name = 'trinum'

urlpatterns = [
    url(r'^', views.get_frontend),
]
