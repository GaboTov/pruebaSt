# Generated by Django 4.2.4 on 2023-08-30 09:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gestion', '0002_reservacita_cita'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cita',
            name='codigo',
        ),
        migrations.RemoveField(
            model_name='reservacita',
            name='fecha_cita',
        ),
    ]