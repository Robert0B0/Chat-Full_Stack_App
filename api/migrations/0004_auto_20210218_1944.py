# Generated by Django 3.1.5 on 2021-02-18 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_room'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='room',
            new_name='naming',
        ),
    ]
