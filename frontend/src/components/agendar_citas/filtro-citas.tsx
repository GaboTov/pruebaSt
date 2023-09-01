import DateManager from "@/services/date-manager";
import FormManager from "@/services/form-manager";
import { FiltroAgendarDataType, PropsFilterNewCita } from "@/types";
import { useState } from "react";
import NuevasCitas from "./nuevas-citas";

export default function FiltroCitas(props: PropsFilterNewCita) {
  const formManager = new FormManager();
  const [formData, setFormData] = useState<FiltroAgendarDataType>();
  const [showReserva, setShowReserva] = useState(false);
  const buscar = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const dateManager = new DateManager();
    if (formData?.fecha) {
      const newDate = new Date(formData.fecha);
      const newWeek = dateManager.getWeekNumber(newDate);
      props.setWeek(newWeek);
    }
  };
  return (
    <>
      <section className="p-8 flex flex-row flex-wrap gap-4">
        <form className="flex flex-row gap-8 flex-wrap justify-center">
          <label className="flex flex-col">
            Fecha
            <input
              name="fecha"
              className=" border-solid border-2 border-sky-500 rounded-lg"
              type="date"
              onChange={(e) => {
                formManager.handleInputChange(e, formData, setFormData);
              }}
            />
          </label>

          <button
            className="BtnStl"
            type="submit"
            onClick={(e) => {
              buscar(e);
            }}
          >
            Buscar
          </button>
        </form>
        <button
          className="BtnStl"
          onClick={() => setShowReserva(true)}
        >
          Agendar citas
        </button>
      </section>
      {showReserva && (
        <NuevasCitas
          show={showReserva}
          setShow={setShowReserva}
          setData={props.setData}
          data={props.data}
        />
      )}
    </>
  );
}
