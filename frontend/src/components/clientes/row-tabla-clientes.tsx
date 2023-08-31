"use client";
import { useState } from "react";
import { RowsTablaClientesType } from "../../types";
import FormManager from "@/services/form-manager";
import { nanoid } from "nanoid";

export default function RowTablaClientes(props: RowsTablaClientesType) {
  const [formData, setFormData] = useState<RowsTablaClientesType>(props);
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
            <td key={nanoid()}>
              <input
                className="min-h-[50px] p-3 min-w-full disabled: bg-white enabled:bg-slate-100"
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
            <td key={nanoid()}>
              <input
                className="min-h-[50px] p-3 disabled: bg-white enabled:bg-slate-100"
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
