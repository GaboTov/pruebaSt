
from datetime import timedelta
from .models import Cita
from datetime import datetime, timedelta
INTERVALO_CITAS = 15
class CitaManager:
    #obtenemos la ultima cita en la fecha indicada y si no hay le indicamos que la hora es 8:45 para sumarle 15 minutos y empezar a las 9 am la primera cita
    def obtener_hora_ultima_cita(self, fecha):
        try:
            ultima_cita_fecha = Cita.objects.filter(fecha_cita__icontains=fecha).last()
            hora_ultima_cita = ultima_cita_fecha.fecha_cita
        except:
            hora_ultima_cita = datetime(
                year=fecha.year,
                month=fecha.month,
                day=fecha.day,
                hour=8,
                minute=45,
            )
        return hora_ultima_cita

    def generar_nueva_cita(self, instance, num_cita, fecha_nueva_cita):
        nueva_cita = Cita()
        nueva_cita.razon_social = instance.razon_social
        nueva_cita.paciente = ""
        nueva_cita.numero_cita = f"{num_cita}/{instance.numero_citas}"
        nueva_cita.fecha_cita = fecha_nueva_cita
        nueva_cita.realizada = False
        nueva_cita.save()

    def nuevas_citas(self, instance):
        for num_cita in range(1, instance.numero_citas + 1):
            fecha = instance.fecha_inicio_agenda
            hora_ultima_cita = self.obtener_hora_ultima_cita(fecha)
            fecha_nueva_cita = hora_ultima_cita + timedelta(minutes=INTERVALO_CITAS)  
            self.generar_nueva_cita(instance, num_cita, fecha_nueva_cita)