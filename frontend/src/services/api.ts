import { RowsTablaClientesType } from "@/types";

class ApiManager {
  api: string;
  constructor() {
    this.api = "http://127.0.0.1:8000/api/";
  }

  getData = async (parte: string) => {
    let response = await fetch(`${this.api}${parte}`, {
      method: "GET",
    });
    let data: any = await response.json();
    if (response.status == 200) {
      return data;
    }
  };

  postData = async (body: any, parte: string) => {
    const data = JSON.stringify(body);
    let response = await fetch(`${this.api}${parte}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    return response.status == 201;
  };
  updateData = async (id: number, data: RowsTablaClientesType) => {
    const body = JSON.stringify(data);
    let response = await fetch(`${this.api}clientes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  };
}

export default ApiManager;
