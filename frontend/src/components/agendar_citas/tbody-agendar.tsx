"use client";
import { CitasGrouper } from "@/services/citas-manager";
import { nanoid } from "nanoid";
import { PropsTbodyAgendarType } from "@/types";
import RowTablaAgendar from "./row-tabla-agendar";

export default function TbodyAgendar(props: PropsTbodyAgendarType) {
  const days = ["lunes", "martes", "miercoles", "jueves", "viernes"];
  const citasGrouper = new CitasGrouper(props.data);
  const groupCitasByHour = citasGrouper.groupCitasByHour();
  const hours = Object.keys(groupCitasByHour);

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {
        //hacemos una fila por cada hora que tengamos cita
        hours.map((hora: any) => {
          const byHour = groupCitasByHour[hora];
          const byDays = citasGrouper.groupCitasByDay(byHour);

          return (
            <tr
              key={nanoid()}
              className="h-[80px]"
            >
              <td>{hora}</td>

              {
                // hacemos una columna por cada de la semana y la llenamos con las citas que tengamos
                days.map((day) => (
                  <td
                    key={nanoid()}
                    className="min-w-[200px]"
                  >
                    <RowTablaAgendar data={byDays[day]} />
                  </td>
                ))
              }
            </tr>
          );
        })
      }
    </tbody>
  );
}
