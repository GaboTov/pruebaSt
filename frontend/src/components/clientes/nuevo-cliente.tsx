import { defaultFormDataCliente } from "@/app/defaults/defaults";
import FormManager from "@/app/services/form-manager";
import { useState } from "react";
import { propsNuevoClienteType, rowsTablaClientesType } from "../../../types";
import ApiManager from "@/app/services/api";

export default function NuevoCliente(props: propsNuevoClienteType) {
  const [formData, setFormData] = useState<any>(defaultFormDataCliente);
  const formManager = new FormManager();
  const titulos = [
    "Razón social",
    "CIF",
    "Dirección",
    "Municipio",
    "Provincia",
    "Inicio del contrato",
    "Fin del contrato",
    "Reconocimientos",
  ];
  const guardarNuevoCliente = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData != defaultFormDataCliente) {
      const apiManager = new ApiManager();
      await apiManager.postDataCliente(formData);
      props.setData([]);
      setFormData(defaultFormDataCliente);
      props.setShow(false);
    } else {
      alert("No puedes dejar campos vacíos");
    }
  };
  return (
    <section className=" absolute mt-[-70%] ml-[35vw] min-w-[100vw]justify-center items-center h-screen border-1">
      <div className="w-[500px]  z-50 bg-white p-8 rounded shadow-lg ">
        <button
          className="absolute top-0 right-0 p-3"
          onClick={() => props.setShow(false)}
        >
          X
        </button>

        <h1 className="text-center text-2xl font-bold text-blue-600 mb-5">
          Nuevo cliente
        </h1>
        <form
          className="flex flex-col gap-8 p-4"
          onSubmit={(e) => guardarNuevoCliente(e)}
        >
          {Object.keys(defaultFormDataCliente).map((inputName, index) => {
            if (inputName == "id") {
              return;
            }
            if (inputName == "inicio_contrato" || inputName == "fin_contrato") {
              return (
                <label
                  key={index}
                  className="flex flex-col"
                >
                  {titulos[index]}
                  <input
                    className="min-h-[50px] p-3 min-w-full disabled:opacity-50 bg-slate-500 enabled:bg-slate-100"
                    name={inputName}
                    value={formData?.[inputName]}
                    type="date"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      formManager.handleInputChange(e, formData, setFormData)
                    }
                  />
                </label>
              );
            } else {
              return (
                <label
                  key={index}
                  className="flex flex-col"
                >
                  {titulos[index]}
                  <input
                    className="min-h-[50px] p-3 disabled:opacity-50 bg-slate-500 enabled:bg-slate-100"
                    name={inputName}
                    value={formData?.[inputName]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      formManager.handleInputChange(e, formData, setFormData)
                    }
                  />
                </label>
              );
            }
          })}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </section>
  );
}
