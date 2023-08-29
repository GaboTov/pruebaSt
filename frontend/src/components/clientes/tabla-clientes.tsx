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
      <section className="flex flex-row gap-1 align-middle items-center justify-between p-3">
        <div className="flex flex-row gap-1 align-middle items-center justify-between">
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
      <table className="min-w-full divide-y divide-gray-200 p-1 overflow-x-scroll mb-[5rem]">
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
