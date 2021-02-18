from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MessageSerializer, RoomSerializer

from .models import Message, Room


@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'Message List': '/message-list/',
        'Messag Create': '/message-create/',
        'Messag Update': '/message/<str:pk>/',
        'Messag Delete': '/message/<str:pk>/',

        'Room List': '/room-list',
        'Room Create': '/room-create',

    }

    return Response(api_urls)


@api_view(['GET'])
def MessageList(request):
    messages = Message.objects.all()
    serializers = MessageSerializer(messages, many=True)

    return Response(serializers.data)


@api_view(['POST'])
def MessageCreate(request):
    serializer = MessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def RoomList(request):
    rooms = Room.objects.all()
    serializers = RoomSerializer(rooms, many=True)

    return Response(serializers.data)


@api_view(['POST'])
def RoomCreate(request):
    serializer = RoomSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
