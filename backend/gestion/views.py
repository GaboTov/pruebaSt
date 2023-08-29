from django.shortcuts import render
from rest_framework import generics
from .models import Empresa
from .serializers import EmpresaSerializer
from rest_framework.pagination import PageNumberPagination

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