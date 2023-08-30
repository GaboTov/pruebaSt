"use client";
import { useState } from "react";
import FiltroCliente from "./filtro-cliente";
import NuevoCliente from "./nuevo-cliente";
import Pagina from "./paginas";
import RowTablaClientes from "./row-tabla-clientes";
import ThTablaClientes from "./th-tabla-cliente";
import useGetData from "@/hooks/use-get-data";

export function TablaClientes() {
  const {
    data,
    setData,
    loading,
    page,
    setPage,
    formFilter,
    setFormFilter,
    results,
    setResults,
  } = useGetData();
  const [showNewClient, setShowNewClient] = useState(false);
  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <>
      <section className="flex flex-row flex-wrap gap-1 align-middle md:justify-between sm:justify-center   p-3 ">
        <div className="flex flex-row flex-wrap gap-1 items-center justify-center">
          <FiltroCliente
            data={data?.results}
            setData={setData}
            formFilter={formFilter}
            setFormFilter={setFormFilter}
          />
          <button
            className="BtnStl"
            onClick={() => setShowNewClient(true)}
          >
            Nuevo Cliente
          </button>
        </div>
        <Pagina
          page={page}
          setPage={setPage}
          next={data?.next}
          prev={data?.previous}
        />
      </section>
      <div className="overflow-auto md:overflow-scroll mb-10">
        <table className=" divide-y divide-gray-200 p-1">
          <thead className="bg-gray-50">
            <tr>
              <ThTablaClientes>Razón Social</ThTablaClientes>
              <ThTablaClientes>CIF</ThTablaClientes>
              <ThTablaClientes>Dirección</ThTablaClientes>
              <ThTablaClientes>Municipio</ThTablaClientes>
              <ThTablaClientes>Provincia</ThTablaClientes>
              <ThTablaClientes>Inicio del Contrato</ThTablaClientes>
              <ThTablaClientes>Fin del contrato</ThTablaClientes>
              <ThTablaClientes>Reconocimientos</ThTablaClientes>
              <ThTablaClientes></ThTablaClientes>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.results.map((cliente) => (
              <RowTablaClientes
                key={cliente.id}
                id={cliente.id}
                razon_social={cliente.razon_social}
                cif={cliente.cif}
                direccion={cliente.direccion}
                municipio={cliente.municipio}
                provincia={cliente.provincia}
                inicio_contrato={cliente.inicio_contrato}
                fin_contrato={cliente.fin_contrato}
                reconocimientos={cliente.reconocimientos}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showNewClient && (
        <NuevoCliente
          show={showNewClient}
          setShow={setShowNewClient}
          data={results}
          setData={setResults}
        />
      )}
    </>
  );
}
