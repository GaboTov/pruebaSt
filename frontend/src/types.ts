// Suelo dividir mas los tipos pero para este prueba solo los pongo en un solo archivo para no tener muchos archivos con un par de tipos solamente

import React, { ReactNode } from "react";

//NavBar types
export type propsTypeNavLink = {
  to: string;
  children: ReactNode;
};
//API
export type apiGetType = {
  results: rowsTablaClientesType[];
  next: string;
  previous: string;
};

//Tabla clientes types
export type thTableClientesType = {
  children?: ReactNode;
};

export type rowsTablaClientesType = {
  id: number;
  razon_social: string;
  cif: string;
  direccion: string;
  municipio: string;
  provincia: string;
  inicio_contrato: string;
  fin_contrato: string;
  reconocimientos: number;
  [key: string]: string | number;
};
export type paginaPropsType = {
  page: number;
  setPage: any;
  next: string | null | undefined;
  prev: string | null | undefined;
};
// filtro de la tabla
export type filtroClientePropsType = {
  data: rowsTablaClientesType[] | undefined;
  setData: any;
  formFilter: filtroFormData;
  setFormFilter: React.Dispatch<React.SetStateAction<filtroFormData>>;
};
export type filtroFormData = {
  razon_social: string;
  municipio: string;
};

export type propsNuevoClienteType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: rowsTablaClientesType[] | undefined;
  setData: any;
};
