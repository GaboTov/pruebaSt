from django.db import models

# Create your models here.
class Empresa(models.Model):
    razon_social = models.CharField("razón social",max_length=100)
    municipio = models.CharField("municipio",max_length=50)
    cif = models.CharField("CIF", max_length=50)
    direccion = models.CharField("dirección",max_length=50)
    provincia = models.CharField("provincia",max_length=50)
    inicio_contrato = models.DateField(verbose_name = "inicio del contrato")
    fin_contrato = models.DateField(verbose_name ="final del contrato")
    reconocimientos = models.IntegerField(verbose_name ="reconocimientos contratados")
    def __str__(self):
        return self.razon_social
    


    
    