from django.urls import path 
from . import views




urlpatterns = [
    path('clientes/', views.EmpresaList.as_view(), name="listado-clientes"),
    path('clientes/<int:pk>', views.EmpresaDetail.as_view(), name="detalles-clientes"),
    path('reservar_citas/',  views.CrearCita.as_view(), name="reservar-citas"),
    path('citas/',views.CitasSemanalesView.as_view(), name="citas-semanales"), 
]
