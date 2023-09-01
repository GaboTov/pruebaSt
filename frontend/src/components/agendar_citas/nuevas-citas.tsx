import { defaulFormNuevaCita } from "@/app/defaults/defaults";
import ApiManager from "@/services/api";
import FormManager from "@/services/form-manager";
import { PropsNuevasCitas, ShowHideElementType } from "@/types";
import React, { useState } from "react";

export default function NuevasCitas(props: PropsNuevasCitas) {
  const [formData, setFormData] = useState(defaulFormNuevaCita);
  const formManager = new FormManager();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.razon_social != "" &&
      formData.fecha_inicio_agenda != defaulFormNuevaCita.fecha_inicio_agenda &&
      formData.numero_citas != 0
    ) {
      const newData = { codigo: "test", ...formData };
      const apiManager = new ApiManager();
      await apiManager.postData(newData, "reservar_citas/");
      window.location.reload(); // no esta bien pero cuando cambio el estado del componente no se actualiza como debería
      /* props.setData([]); --> lo hice como en use-getdata pero aca solo me deja sin información el data pero no se vuelve a montar el componente*/
      setFormData(defaulFormNuevaCita);
      props.setShow(false);
    } else {
      alert("Datos incompletos");
    }
  };
  return (
    <div className="absolute top-[220px] left-8 p-8 rounded shadow-lg bg-white">
      <button onClick={() => props.setShow(false)}>X</button>
      <h1 className="text-center text-2xl font-bold text-blue-600 mb-5">
        Reservar citas
      </h1>
      <form
        className="flex flex-col flex-wrap gap-8 p-4 justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="flex flex-col min-w-[250px]">
          Razón social
          <input
            name="razon_social"
            className="InputNuevo"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formManager.handleInputChange(e, formData, setFormData)
            }
          />
        </label>
        <label>
          Fecha de la cita
          <input
            name="fecha_inicio_agenda"
            className="InputNuevo"
            type="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formManager.handleInputChange(e, formData, setFormData)
            }
          />
        </label>
        <label>
          Numero de citas
          <input
            name="numero_citas"
            className="InputNuevo"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formManager.handleInputChange(e, formData, setFormData)
            }
          />
        </label>
        <button
          className="BtnStl"
          type="submit"
        >
          Reserver
        </button>
      </form>
    </div>
  );
}
