import { defaultFormDataCliente } from "@/app/defaults/defaults";
import FormManager from "@/services/form-manager";
import { useState } from "react";
import { PropsNuevoClienteType } from "../../types";
import ApiManager from "@/services/api";

export default function NuevoCliente(props: PropsNuevoClienteType) {
  const [formData, setFormData] = useState<any>();
  const formManager = new FormManager();
  const guardarNuevoCliente = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData != defaultFormDataCliente) {
      const apiManager = new ApiManager();
      await apiManager.postData(formData, "clientes/");
      props.setData([]);
      setFormData(defaultFormDataCliente);
      props.setShow(false);
    } else {
      alert("No puedes dejar campos vacíos");
    }
  };
  return (
    <section className=" absolute top-[220px] left-3">
      <div className="max-w-[700px]  z-50 bg-white p-8 rounded shadow-lg">
        <button onClick={() => props.setShow(false)}>X</button>

        <h1 className="text-center text-2xl font-bold text-blue-600 mb-5">
          Nuevo cliente
        </h1>
        <form
          className="flex flex-row flex-wrap gap-8 p-4 justify-center"
          onSubmit={(e) => guardarNuevoCliente(e)}
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
          <label className="flex flex-col min-w-[250px]">
            CIF
            <input
              name="cif"
              className="InputNuevo"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Dirección
            <input
              name="direccion"
              className="InputNuevo"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Municipio
            <input
              name="municipio"
              className="InputNuevo"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Provincia
            <input
              name="provincia"
              className="InputNuevo"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Inicio del contrato
            <input
              name="inicio_contrato"
              className="InputNuevo"
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Final del contrato
            <input
              name="fin_contrato"
              className="InputNuevo"
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
          <label className="flex flex-col min-w-[250px]">
            Reconocimientos
            <input
              name="reconocimientos"
              className="InputNuevo"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formManager.handleInputChange(e, formData, setFormData)
              }
            />
          </label>
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
