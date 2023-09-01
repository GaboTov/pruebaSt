"use client";
import { useState } from "react";
import { RowsTablaClientesType } from "../../types";
import FormManager from "@/services/form-manager";

export default function RowTablaClientes(props: RowsTablaClientesType) {
  const [formData, setFormData] = useState<RowsTablaClientesType>(props);
  const [submitted, setSubmitted] = useState<boolean>(true);
  const formManager = new FormManager();
  return (
    <tr className="">
      <td>
        <label>
          <input
            disabled={submitted}
            value={formData?.razon_social}
            name="razon_social"
            className="InputNuevo"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formManager.handleInputChange(e, formData, setFormData)
            }
          />
        </label>
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.cif}
          name="cif"
          className="InputNuevo"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.direccion}
          name="direccion"
          className="InputNuevo"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.municipio}
          name="municipio"
          className="InputNuevo"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.provincia}
          name="provincia"
          className="InputNuevo"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.inicio_contrato}
          name="inicio_contrato"
          className="InputNuevo"
          type="date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.fin_contrato}
          name="fin_contrato"
          className="InputNuevo"
          type="date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>
      <td>
        <input
          disabled={submitted}
          value={formData?.reconocimientos}
          name="reconocimientos"
          className="InputNuevo"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            formManager.handleInputChange(e, formData, setFormData)
          }
        />
      </td>

      <td>
        <button
          onClick={(e) =>
            formManager.handleSubmitCliente(
              e,
              formData.id,
              formData,
              submitted,
              setSubmitted,
              "clientes"
            )
          }
        >
          {submitted ? "Editar" : "Guard"}
        </button>
      </td>
    </tr>
  );
}
