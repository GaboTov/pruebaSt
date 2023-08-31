import { defaultFormDataCliente } from "@/app/defaults/defaults";
import FormManager from "@/services/form-manager";
import { useState } from "react";
import { PropsNuevoClienteType, RowsTablaClientesType } from "../../types";
import ApiManager from "@/services/api";
import { nanoid } from "nanoid";

export default function NuevoCliente(props: PropsNuevoClienteType) {
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
    <section className=" absolute top-[220px] left-3">
      <div className="max-w-[700px]  z-50 bg-white p-8 rounded shadow-lg items-end">
        <button onClick={() => props.setShow(false)}>X</button>

        <h1 className="text-center text-2xl font-bold text-blue-600 mb-5">
          Nuevo cliente
        </h1>
        <form
          className="flex flex-row flex-wrap gap-8 p-4 justify-center"
          onSubmit={(e) => guardarNuevoCliente(e)}
        >
          {Object.keys(defaultFormDataCliente).map((inputName, index) => {
            if (inputName == "id") {
              return;
            }
            if (inputName == "inicio_contrato" || inputName == "fin_contrato") {
              return (
                <label
                  key={nanoid()}
                  className="flex flex-col min-w-[250px]"
                >
                  {titulos[index]}
                  <input
                    className="min-h-[50px] p-3 min-w-full disabled:bg-white  enabled:bg-slate-100"
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
                  key={nanoid()}
                  className="flex flex-col"
                >
                  {titulos[index]}
                  <input
                    className="min-h-[50px] p-3  enabled:bg-slate-100"
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
          <button
            type="submit"
            className="BtnStl"
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}
