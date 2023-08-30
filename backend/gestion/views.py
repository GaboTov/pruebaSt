from django.shortcuts import render
from rest_framework import generics
from .models import Empresa, ReservaCita
from .serializers import EmpresaSerializer, CrearCitaSerializer, CitaSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import F
from django.db.models.functions import ExtractWeek
from .models import Cita
from .serializers import CitaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .cita_manager import CitaManager
from rest_framework import serializers


class CustomPagination(PageNumberPagination):
    page_size = 15
    page_size_query_param = 'page_size'
    max_page_size = 100


class EmpresaList(generics.ListCreateAPIView):

    serializer_class = EmpresaSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        queryset = Empresa.objects.order_by('-id')
        razon_social = self.request.query_params.get('razon_social')
        municipio = self.request.query_params.get('municipio')
        if razon_social and municipio:
            queryset = queryset.filter(
                razon_social__icontains=razon_social,
                municipio__icontains=municipio
            )
        elif razon_social:
            queryset = queryset.filter(razon_social__icontains=razon_social)
        elif municipio:
            queryset = queryset.filter(municipio__icontains=municipio)

        return queryset


class EmpresaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer


class CrearCita(generics.ListCreateAPIView):
    serializer_class = CrearCitaSerializer
    queryset = ReservaCita.objects.all()


class CitasSemanalesView(generics.ListCreateAPIView):
    serializer_class = CitaSerializer
    queryset = Cita.objects.order_by('-id')

    def get_queryset(self):
        week_param = self.request.query_params.get('week')
        year = self.request.query_params.get('year')

        if week_param:
            try:
                week = int(week_param)
            except ValueError:
                return Cita.objects.none()
            # Filtra las citas por el número de semana proporcionado
            if year:
                citas_semana = Cita.objects.annotate(week=ExtractWeek(
                    'fecha_cita')).filter(week=week, fecha_cita__contains=year)
            else:
                citas_semana = Cita.objects.annotate(week=ExtractWeek(
                    'fecha_cita')).filter(week=week)
        else:
            today = datetime.now()

            # Obtén la semana actual del año
            current_week = today.isocalendar()[1]
            print(current_week)
            # Filtra las citas por la semana actual
            citas_semana = Cita.objects.annotate(
                week=ExtractWeek('fecha_cita')).filter(week=current_week, fecha_cita__contains=year)
        print(len(citas_semana))
        return citas_semana
