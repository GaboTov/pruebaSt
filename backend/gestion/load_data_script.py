from .models import Empresa, Cita
from .load_data_manager import LoadData

load_data = LoadData()
empresas = load_data.load_clients(1000)
citas = load_data.load_citas(30000)
Empresa.objects.bulk_create(empresas)
Cita.objects.bulk_create(citas)
