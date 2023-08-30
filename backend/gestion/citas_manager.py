from . models import Empresa, Cita, ReservaCita

print('algo')
ultima_cita = Cita.objects.last('id')