type Cita = {
  id: number;
  razon_social: string;
  numero_cita: string;
  fecha_cita: string;
  paciente: string;
  realizada: boolean;
  [key: string]: any;
};

export class CitasGrouper {
  private citas: Cita[];

  constructor(citas: Cita[]) {
    this.citas = citas;
  }

  groupCitasByHour(): Record<number, Cita[]> {
    const citasPorHora: Record<number, Cita[]> = {};

    this.citas.forEach((cita) => {
      const hora = new Date(cita.fecha_cita).getUTCHours();

      if (citasPorHora[hora]) {
        citasPorHora[hora].push(cita);
      } else {
        citasPorHora[hora] = [cita];
      }
    });

    return citasPorHora;
  }
  sortCitasByDay(citas: Cita[]): Cita[] {
    return citas.slice().sort((a, b) => {
      const fechaA = new Date(a.fecha_cita);
      const fechaB = new Date(b.fecha_cita);
      return fechaA.getTime() - fechaB.getTime();
    });
  }

  groupAndSortCitas(): Record<number, Cita[]> {
    const citasAgrupadas = this.groupCitasByHour();

    for (const hora in citasAgrupadas) {
      citasAgrupadas[hora] = this.sortCitasByDay(citasAgrupadas[hora]);
    }

    return citasAgrupadas;
  }
}
