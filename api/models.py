from django.db import models


""" class User(models.Model):
    name = models.CharField(max_length=200, null=True, default='Username')

    def __str__(self):
        return self.name
"""


class Room(models.Model):
    naming = models.CharField(max_length=200, null=True, default='New Room')
    user = models.CharField(max_length=500)

    def __str__(self):
        return self.room


class Message(models.Model):
    text = models.CharField(max_length=500)
    user = models.CharField(max_length=500)
   # room = models.ForeignKey(Room, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.user
