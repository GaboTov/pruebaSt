from django.db import models


class Empresa(models.Model):
    razon_social = models.CharField("razón social", max_length=100)
    municipio = models.CharField("municipio", max_length=50)
    cif = models.CharField("CIF", max_length=50)
    direccion = models.CharField("dirección", max_length=50)
    provincia = models.CharField("provincia", max_length=50)
    inicio_contrato = models.DateField(verbose_name="inicio del contrato")
    fin_contrato = models.DateField(verbose_name="final del contrato")
    reconocimientos = models.IntegerField(
        verbose_name="reconocimientos contratados")

    def __str__(self):
        return self.razon_social


class ReservaCita(models.Model):
    razon_social = models.CharField("razón social", max_length=100)
    fecha_inicio_agenda = models.DateField(verbose_name="fecha de la cita")
    numero_citas = models.IntegerField()
    codigo = models.CharField(max_length=20)


class Cita(models.Model):
    razon_social = models.CharField("razón social", max_length=100)
    # una fracción para saber que cita es respecto al total
    numero_cita = models.CharField(max_length=20, blank=True)
    fecha_cita = models.DateTimeField()
    paciente = models.CharField(max_length=50)
    realizada = models.BooleanField()
