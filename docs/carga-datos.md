# Carga de datos

ultima actualización:

## Contenido

- Objetivo
- Background
- Detalles de diseño
  - Solución

## Objetivo

- Crear un script para la generación de 1000 registros de clientes y 30000 citas

## Background

Necesidad de datos en la base de datos para ver como funciona la aplicación de gestión de citas

## Detalles de diseño

se crea una lista con datos aleatorios con los campos correspondientes a cada modelo de datos y usar el método 'bulk_create' para meter la información a la base de datos, tomaremos como año de partida el 2021 y año final el 2024

### Solución

```python

from .models import Empresa
from .models import Cita
class LoadData():
    def random_day (self):
        random_date = date(2021 + random.randInt(1,3), random.randInt(1,12), random.randInt(1,30))
        return random_date

    def load_clients(self, clients):
        empresas = []
        for _ in range (1, clients):
            inicio_contrato = self.random_day()
            empresa = Empresa(
                razon_social=f"Empresa {i}",
                municipio=f"Municipio {i}",
                cif=f"CIF{i}",
                direccion=f"Dirección {i}",
                provincia=f"Provincia {i}",
                inicio_contrato=inicio_contrato,
                fin_contrato=inicio_contrato + timedelta(days=random.randInt(300, 400)),
                reconocimientos= random.randInt(10, 200)
            )
            empresas.append(empresa)
        return empresas

    def random_date(self):

        dia_semana = random.randint(0, 5)
        hora_inicio = random.choice([9, 10, 11, 12, 13, 16, 17, 18, 19])
        minuto_inicio = random.randint(0, 59)
        fecha_actual = datetime.now()
        fecha_inicio = fecha_actual.replace(hour=hora_inicio, minute=minuto_inicio) + timedelta(days=dia_semana - fecha_actual.weekday())
        return fecha_inicio

    def random_paciente(self):
        probabilidad = random.randInd(0,4)
        if probabilidad > 0:
            return ("paciente x")
        return("")

    def load_citas(self, citas):
        citas = []
        for _ in range (1, citas):
            check_cita = random.randInt(0,2) < 1
            cita = Cita(
                razon_social = f"Empresa {random.randInt(1, 1000)}"
                numero_cita = ""
                fecha_cita = self.random_date()
                parciente = self.random_paciente()
            )
            citas.append(cita)
        return citas
```

Para incluir los datos el script sería

```python
from .load_data import LoadData
from .model import Empresa, Cita


load_data = LoadData()
empresas = load_data.load_clientes(1000)
citas = load_data.load_citas(30000)
Empresa.objects.bulk_create(empresas)
Cita.objects.bulk_create(citas)

```
