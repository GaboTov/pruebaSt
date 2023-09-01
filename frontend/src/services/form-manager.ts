import { RowsTablaClientesType } from "@/types";
import ApiManager from "./api";

export default class FormManager {
  handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };
  handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, checked } = event.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: checked }));
  };
  handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };
  handleSubmitCliente = (
    event: React.FormEvent<HTMLButtonElement>,
    id: number,
    data: any,
    submitted: boolean,
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    path: string
  ) => {
    event.preventDefault();
    if (submitted) {
      setSubmitted(!submitted);
    } else {
      const apiManager = new ApiManager();
      apiManager.updateData(id, data, path);
      setSubmitted(true);
    }
  };
}
