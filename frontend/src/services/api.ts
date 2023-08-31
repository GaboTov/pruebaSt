import { apiGetType, rowsTablaClientesType } from "@/types";

class ApiManager {
  apiClientes: string;
  constructor() {
    this.apiClientes = "http://127.0.0.1:8000/api/clientes/";
  }

  getData = async (parte: string) => {
    let response = await fetch(`${this.apiClientes}${parte}`, {
      method: "GET",
    });
    let data: apiGetType = await response.json();
    if (response.status == 200) {
      return {
        results: data.results,
        next: data.next,
        previous: data.previous,
      };
    }
  };

  postDataCliente = async (body: rowsTablaClientesType) => {
    const data = JSON.stringify(body);
    let response = await fetch(this.apiClientes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  };
  updateData = async (id: number, data: rowsTablaClientesType) => {
    const body = JSON.stringify(data);
    let response = await fetch(`${this.apiClientes}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  };
}

export default ApiManager;
