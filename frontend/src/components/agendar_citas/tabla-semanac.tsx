import ThTablaClientes from "../clientes/th-tabla-cliente";
import { PropsChildren } from "@/types";

export function TablaSemana({
  week,
  setWeek,
  dateMondayWeek,
  children,
}: PropsChildren) {
  function formatDateToDdMmYyyy(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses comienzan desde 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row gap-11 text-center p-10 items-center">
        <button
          onClick={() => setWeek(week - 1)}
          className="BtnStl"
        >
          anterior
        </button>
        <h1>Semana {week}</h1>
        <button
          onClick={() => setWeek(week + 1)}
          className="BtnStl"
        >
          siguiente
        </button>
      </div>
      <table className="overflow-auto md:overflow-scroll mb-10 min-w-[1300px]">
        <thead className="bg-gray-50">
          <tr>
            <ThTablaClientes></ThTablaClientes>
            {days.map((day, index) => {
              let fechaActual = new Date(dateMondayWeek);
              fechaActual.setDate(dateMondayWeek.getDate() + index);
              return (
                <ThTablaClientes>
                  {day} {formatDateToDdMmYyyy(fechaActual)}
                </ThTablaClientes>
              );
            })}
          </tr>
        </thead>
        {children}
      </table>
    </section>
  );
}
