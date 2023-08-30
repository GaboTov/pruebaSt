from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import ReservaCita
from .cita_manager import CitaManager



@receiver(post_save, sender=ReservaCita)
def nuevas_citas(sender, instance, created, **kwargs):
    citaManager = CitaManager()
    citaManager.nuevas_citas(instance)



       
        
        
    