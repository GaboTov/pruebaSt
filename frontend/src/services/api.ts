import {
  ApiGetCitasType,
  ApiGetClientType,
  Cita,
  RowsTablaClientesType,
} from "@/types";

class ApiManager {
  api: string;
  constructor() {
    this.api = "http://127.0.0.1:8000/api/";
  }

  getData = async (parte: string) => {
    let response = await fetch(`${this.api}${parte}`, {
      method: "GET",
    });
    let data: ApiGetClientType = await response.json();
    if (response.status == 200) {
      return data;
    }
  };
  getDataCitas = async (parte: string) => {
    let response = await fetch(`${this.api}${parte}`, {
      method: "GET",
    });
    let data: Cita[] = await response.json();
    if (response.status == 200) {
      return data;
    }
  };

  postDataCliente = async (body: RowsTablaClientesType) => {
    const data = JSON.stringify(body);
    let response = await fetch(this.api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  };
  updateData = async (id: number, data: RowsTablaClientesType) => {
    const body = JSON.stringify(data);
    let response = await fetch(`${this.api}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  };
}

export default ApiManager;
