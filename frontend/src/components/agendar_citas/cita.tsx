import FormManager from "@/services/form-manager";
import { Cita } from "@/types";
import { usePathname } from "next/navigation";

import { useState } from "react";

export default function Cita(props: { cita: Cita }) {
  const [showInfo, setShowInfo] = useState(false);
  const [edit, setEdit] = useState(true);
  const [formData, setFormData] = useState(props.cita);
  const pathname = usePathname();
  const formManager = new FormManager();
  console.log(formData);
  //uso las ruta para simular si es doctor a quien agenda las citas, si es doctor esta en la ruta citas y puede editar la cita para llevar el seguimiento, ya que las pantallas entre los dos son iguales solo que el medico debe decir si hizo o no esa cita
  return (
    <>
      {showInfo && (
        <section className="absolute  h-auto w-[300px] bg-white shadow-lg flex flex-col p-4 rounded-lg items-start gap-3">
          <button
            className="items-end"
            onClick={() => setShowInfo(false)}
          >
            X
          </button>
          <form className="flex flex-col gap-4">
            <label>
              Razón social
              <input
                name="razon_social"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formManager.handleInputChange(e, formData, setFormData)
                }
                className="p-2"
                value={formData.razon_social}
                disabled={edit}
              />
            </label>
            <label>
              Fecha de cita
              <input
                name="fecha_cita"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formManager.handleInputChange(e, formData, setFormData)
                }
                className="p-2"
                value={formData.fecha_cita}
                disabled={true}
              />
            </label>
            <label className="flex flex-row gap-3">
              Realizada
              <input
                name="realizada"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formManager.handleCheckboxChange(e, formData, setFormData)
                }
                type="checkbox"
                className="p-2"
                checked={formData.realizada}
                disabled={edit}
              />
            </label>
            {pathname === "/citas" && (
              <>
                <label>
                  Paciente
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      formManager.handleInputChange(e, formData, setFormData)
                    }
                    name="paciente"
                    type="text"
                    className="p-2"
                    value={formData.paciente}
                    disabled={edit}
                  />
                </label>
                <button
                  onClick={(e) => {
                    formManager.handleSubmitCliente(
                      e,
                      formData.id,
                      formData,
                      edit,
                      setEdit,
                      "citas"
                    );
                  }}
                  className="BtnStl"
                >
                  Edita
                </button>
              </>
            )}
          </form>
          {pathname === "/agendar_citas" && (
            <button
              onClick={() => {
                setShowInfo(false);
              }}
              className="BtnStl"
            >
              Aceptar
            </button>
          )}
        </section>
      )}
      <div
        onClick={() => setShowInfo(!showInfo)}
        className={`h-[25px] w-[25px] rounded-lg ${
          formData.realizada ? "bg-[green]" : "bg-[red] "
        } hover:scale-110 cursor-pointer`}
      ></div>
    </>
  );
}
