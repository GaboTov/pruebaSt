# Gestión de citas

Ultima actualización:

# Contenido

- Objetivo
- Background
- Detalles de diseño
  - Solución
    - Frontend
    - Backend

# Objetivo

- Creación de un CRUD para la gestión de las citas
- Sistema de reserva de citas
- Sistema de seguimiento de citas

## Background

Este feature tiene dos partes, una para la persona encargada de las reservas de las citas y otra para el seguimiento de las citas medicas.

## Solución

### Frontend

### Destalle del diseño

![Interfaz de citas reservas y seguimiento](detalle-cita.png)

### Componente semana

Un calendario de lunes a sábado donde pondremos ver que citas tenemos agendadas y las que se han realizado y las que no con divido en el horario posible de las citas desde las 9 am hasta las 2 am y de 4 pm a 8 pm. Con una paginación por semanas.

### Reserva de citas

Un componente que aparece con la darle al botón de nuevas citas con la información necesaria para agendar la cita, razón social, periodo de tiempo de las citas y numero de citas, al guardar se hace un post para guardar las citas, debería recibir el nuevo estado de las citas y hacer render con las nuevas citas.

### Componente de las citas

Un cuadro parecido a un checkbox con tres estados posibles, vació para indicar que es una cita agendada, rellena con verde quiere decir que la cita ya se ha realizado y la rellena de rojo para las citas no realizadas se pone rojo si ya paso la fecha y no tiene paciente registrado.

### Información de las citas

Al darle click a los cuadrados nos aparece el componente con la información donde esta la información que se tomo al momento de la citas.

### Pagina seguimiento de citas

Tiene los mismo componentes de la reserva de cita pero al darle click a la cita se abre el componente de seguimiento de citas donde se agrega el nombre del paciente e información adicional, donde se puede editar estos campos.

### Backend

Para la gestión de las citas y las reservas se crean un modelo de datos para cada uno y una signal para asignar la fecha y hora de las citas y guardarlas en el modelo de citas

#### Modelo de datos de la reserva de cita

```python
# models.py
from django.db import models

class ReservaCita(models.Model):
    razon_social = models.ForeignKey("Empresa", on_delete = models.CASCADE)
    fecha_inicio_agenda = models.DateField(verbose_name ="inicio de citas")
    numero_citas = models.IntegerField()
    fecha_cita = models.DateField(verbose_name ="final del contrato")
    codigo = models.CharField()


```

### Modelo de datos de las citas

```python
# models.py
from django.db import models

class Cita(models.Model):
    razon_social = models.ForeignKey("Empresa", on_delete = models.CASCADE)
    codigo = models.ForeignKey("ReservaCita", on_delete = models.CASCADE)
    numero_cita = models.CharField()#una fracción para saber que cita es respecto al total
    fecha_cita = models.DateTimeField()
    paciente= models.CharField(max_length=50)
    realizada = models.models.BooleanField()

```

### Administrador de citas

Mira la ultima cita que hay en la base de datos para empezar a crear citas cada 15 minutos a partir y usamos esta clase para crear las nuevas citas

```python
# citaManager.py
INTERVALO_CITAS = 15
class CitaManager:

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

```

### API de Crear citas

Recibe la razón social, la fecha de inicio de las citas, la fecha final de las citas y el numero de citas donde el administrado de citas guarda las citas

```python
class CrearCita(generics.ListCreateAPIView):
    serializer_class = CrearCitaSerializer
    queryset = ReservaCita.objects.all()

```

### API de citas

Devuelve las citas de la semana del año que se le pida, recibe como parámetro el numero de la semana de año y devuelve las citas de esa semana

```python
from rest_framework import generics
from django.db.models import F
from django.db.models.functions import ExtractWeek
from datetime import datetime
from .models import Cita
from .serializers import CitaSerializer

class CitasSemanalesView(generics.ListAPIView):
    serializer_class = CitaSerializer

    def get_queryset(self):
        week_param = self.request.query_params.get('week')

        if week_param:
            try:
                week = int(week_param)
            except ValueError:
                return Cita.objects.none()
            # Filtra las citas por el número de semana proporcionado
            citas_semana = Cita.objects.annotate(week=ExtractWeek('fecha_cita')).filter(week=week)
        else:
            today = datetime.now()

            # Obtén la semana actual del año
            current_week = today.isocalendar()[1]
            # Filtra las citas por la semana actual
            citas_semana = Cita.objects.annotate(week=ExtractWeek('fecha_cita')).filter(week=current_week)

        return citas_semana


```
