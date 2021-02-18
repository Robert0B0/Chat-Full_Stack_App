from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverview, name='backend-overview'),
    path('message-list/', views.MessageList, name='message-list'),
    path('message-create/', views.MessageCreate, name='message-create'),
    #path('message-update/<str:pk>/', views.MessageUpdate, name='message-update'),
    #path('message-delete/<str:pk>/', views.MessageDelete, name='message-delete'),

    path('room-list/', views.RoomList, name='room-list'),
    path('room-create/', views.RoomCreate, name='room-create'),

]
