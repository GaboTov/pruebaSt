from .models import Empresa, Cita
import random
from datetime import datetime
from datetime import timedelta


class LoadData:
    def random_day(self):
        year = random.randint(2020, 2024)
        month = random.randint(1, 12)
        day = random.randint(1, 28)
        hour = random.randint(9, 20)
        minute = random.randint(0, 59)
        random_date = datetime(year, month, day, hour, minute)
        if random_date.weekday() > 4:
            return self.random_day()
        else:
            return random_date

    def load_clients(self, clients):
        empresas = []
        municipios = ["Almería",
                      "Roquetas de Mar",
                      "El Ejido",
                      "Níjar",
                      "Huércal-Overa",
                      "Vícar",
                      "Adra",
                      "Vera",
                      "Mojácar",
                      "Berja",
                      "Granada",
                      "Almuñécar",
                      "Motril",
                      "Armilla",
                      "Baza",]

        for num_client in range(1, clients + 1):
            inicio_contrato = self.random_day().date()
            empresa = Empresa()
            empresa.razon_social = f"Empresa {num_client}"
            empresa.municipio = random.choice(municipios)
            empresa.cif = f"CIF{num_client}"
            empresa.direccion = f"Dirección {num_client}"
            empresa.provincia = f"Provincia {num_client}"
            empresa.inicio_contrato = inicio_contrato
            empresa.fin_contrato = inicio_contrato + \
                timedelta(days=random.randint(200, 400))
            empresa.reconocimientos = random.randint(10, 200)
            empresas.append(empresa)
            print(f"empresa {num_client}")
        return empresas

    def random_realizada(self):
        probabilidad = random.randint(0, 4)
        return probabilidad > 0

    def load_citas(self, num_citas):
        citas_generadas = []
        for _ in range(1, num_citas + 1):
            cita = Cita()
            cita.razon_social = f"Empresa {random.randint(1, 1000)}"
            cita.numero_cita = ""
            cita.fecha_cita = self.random_day()
            cita.paciente = ""
            cita.realizada = self.random_realizada()
            citas_generadas.append(cita)
            print(f"cita {_}")
        return citas_generadas
