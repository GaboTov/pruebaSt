import { CitasGrouper } from "@/services/citas-manager";
import { citas } from "../../../mocks/citas";
import ThTablaClientes from "../clientes/th-tabla-cliente";

export function TablaSemana() {
  const horas = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const citasGrouper = new CitasGrouper(citas);
  const citasAgrupadasYOrdenadas = citasGrouper.groupCitasByHour();

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row gap-11 text-center p-10 items-center">
        <button className="BtnStl">anterior</button>
        <h1>Semana del fecha</h1>
        <button className="BtnStl">siguiente</button>
      </div>
      <table className="overflow-auto md:overflow-scroll mb-10 min-w-[1300px]">
        <thead className="bg-gray-50">
          <tr>
            <ThTablaClientes></ThTablaClientes>
            <ThTablaClientes>Lunes</ThTablaClientes>
            <ThTablaClientes>Martes</ThTablaClientes>
            <ThTablaClientes>Miércoles</ThTablaClientes>
            <ThTablaClientes>Jueves</ThTablaClientes>
            <ThTablaClientes>Viernes</ThTablaClientes>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {horas.map((hora) => (
            <>
              <tr className="h-[80px]">
                <td>{hora}</td>

                <td className="p-2 text-center ">
                  {JSON.stringify(citasAgrupadasYOrdenadas[hora])}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
}
