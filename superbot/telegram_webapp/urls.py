from django.urls import path
from . import views

urlpatterns = [
    path('start/', views.start, name='start'),
    path('new_order/', views.new_order, name='new_order'),
    
]