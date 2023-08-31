import { useEffect, useState } from "react";
import { ApiGetClientType, RowsTablaClientesType } from "../types";
import ApiManager from "@/services/api";
import { defaultFormDataFiltro } from "@/app/defaults/defaults";
//hago una llamada a la api con los parámetros por defecto así obtengo los últimos 20 resultados (pagina 0) pero si cambia la pagina o el formulario o los valores del formulario del filtro hace una nueve llamada con los datos de la pagina o el filtro
export default function useGetData() {
  const [data, setData] = useState<ApiGetClientType>();
  const [results, setResults] = useState<RowsTablaClientesType[]>(
    [] || data?.results
  );
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [formFilter, setFormFilter] = useState(defaultFormDataFiltro);
  useEffect(() => {
    const fetchData = async () => {
      const api = new ApiManager();
      try {
        const data = await api.getData(
          `clientes/?municipio=${formFilter.municipio}&razon_social=${formFilter.razon_social}&page=${page}`
        );
        setLoading(false);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, formFilter, results]);
  return {
    data,
    setData,
    loading,
    page,
    setPage,
    formFilter,
    setFormFilter,
    results,
    setResults,
  };
}
