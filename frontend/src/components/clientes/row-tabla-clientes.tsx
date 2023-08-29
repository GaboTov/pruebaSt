"use client";
import { useState } from "react";
import { rowsTablaClientesType } from "../../../types";
import FormManager from "@/app/services/form-manager";

export default function RowTablaClientes(props: rowsTablaClientesType) {
  const [formData, setFormData] = useState<rowsTablaClientesType>(props);
  const [submitted, setSubmitted] = useState<boolean>(true);
  const formManager = new FormManager();
  return (
    <tr className="">
      {Object.keys(props).map((inputName, index) => {
        if (inputName == "id") {
          return;
        }
        if (inputName == "inicio_contrato" || inputName == "fin_contrato") {
          return (
            <td key={index}>
              <input
                className="min-h-[50px] p-3 min-w-full disabled:opacity-50 bg-slate-500 enabled:bg-slate-100"
                name={inputName}
                value={formData?.[inputName]}
                type="date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formManager.handleInputChange(e, formData, setFormData)
                }
                disabled={submitted}
              />
            </td>
          );
        } else {
          return (
            <td key={index}>
              <input
                className="min-h-[50px] p-3 disabled:opacity-50 bg-slate-500 enabled:bg-slate-100"
                name={inputName}
                value={formData?.[inputName]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formManager.handleInputChange(e, formData, setFormData)
                }
                disabled={submitted}
              />
            </td>
          );
        }
      })}
      <td>
        <button
          onClick={(e) =>
            formManager.handleSubmitCliente(
              e,
              formData.id,
              formData,
              submitted,
              setSubmitted
            )
          }
        >
          {submitted ? "Editar" : "Guard"}
        </button>
      </td>
    </tr>
  );
}
