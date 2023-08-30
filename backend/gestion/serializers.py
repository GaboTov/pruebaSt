from . models import Empresa, Cita, ReservaCita
from rest_framework import serializers

class EmpresaSerializer( serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

class CitaSerializer ( serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = '__all__'

class CrearCitaSerializer( serializers.ModelSerializer):
    class Meta:
        model = ReservaCita
        fields = '__all__'