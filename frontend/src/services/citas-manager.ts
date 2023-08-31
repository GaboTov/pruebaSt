import { Cita } from "@/types";
type citasByDayType = {
  [key: string]: Cita[];
};
export class CitasGrouper {
  private citas: Cita[];

  constructor(citas: Cita[]) {
    this.citas = citas;
  }
  //agrupa los datos de al API por horas para luego hacer los reglones de la tabla por horas
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

  groupCitasByDay(data: Cita[]) {
    let citasByDay: citasByDayType = {
      lunes: [],
      martes: [],
      miercoles: [],
      jueves: [],
      viernes: [],
    };

    data.forEach((cita) => {
      const fecha = new Date(cita.fecha_cita);

      const diaDeLaSemana = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
      }).format(fecha);
      switch (diaDeLaSemana) {
        case "lunes":
          citasByDay.lunes.push(cita);
          break;
        case "martes":
          citasByDay.martes.push(cita);
          break;
        case "miércoles":
          citasByDay.miercoles.push(cita);
          break;
        case "jueves":
          citasByDay.jueves.push(cita);
          break;
        case "viernes":
          citasByDay.viernes.push(cita);
          break;
        default:
          break;
      }
    });
    return citasByDay;
  }
  sortCitasByDay(citas: Cita[]): Cita[] {
    return citas.slice().sort((a, b) => {
      const fechaA = new Date(a.fecha_cita);
      const fechaB = new Date(b.fecha_cita);
      return fechaA.getTime() - fechaB.getTime();
    });
  }
}
