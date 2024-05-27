from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('event_page/', views.event_page, name='event'),
    path('about_page/', views.about_page, name='about'),
]