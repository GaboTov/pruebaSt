"use client";

import ApiManager from "@/services/api";
import { filtroClientePropsType, filtroFormData } from "../../types";
import FormManager from "@/services/form-manager";
import { useState } from "react";
import { defaultFormDataFiltro } from "@/app/defaults/defaults";

export default function FiltroCliente(props: filtroClientePropsType) {
  const formManager = new FormManager();
  const [formData, setFormData] = useState<filtroFormData>(
    props.formFilter || defaultFormDataFiltro
  );

  const buscar = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setFormFilter(formData);
    setFormData(defaultFormDataFiltro);
  };

  return (
    <section className="p-8 flex flex-row flex-wrap">
      <form className="flex flex-row gap-8 flex-wrap justify-center">
        <label className="flex flex-col">
          Razón social
          <input
            name="razon_social"
            value={formData.razon_social}
            onChange={(e) => {
              formManager.handleInputChange(e, formData, setFormData);
            }}
            className=" border-solid border-2 border-sky-500 rounded-lg"
          />
        </label>
        <label className="flex flex-col">
          Municipio
          <input
            name="municipio"
            value={formData.municipio}
            onChange={(e) => {
              formManager.handleInputChange(e, formData, setFormData);
            }}
            className="border-solid border-2 border-sky-500 rounded-lg"
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            buscar(e);
          }}
          className="BtnStl"
        >
          Buscar
        </button>
      </form>
    </section>
  );
}
