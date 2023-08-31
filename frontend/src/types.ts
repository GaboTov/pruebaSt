// Suelo dividir mas los tipos pero para esta prueba solo los pongo en un solo archivo para no tener muchos archivos con un par de tipos solamente

import React, { ReactNode } from "react";
export type PropsChildren = {
  children: ReactNode;
  week: number;
  setWeek: React.Dispatch<React.SetStateAction<number>>;
  dateMondayWeek: Date;
};
//NavBar types
export type PropsTypeNavLink = {
  to: string;
  children: ReactNode;
};
//API
export type ApiGetClientType = {
  results: RowsTablaClientesType[];
  next: string;
  previous: string;
};
export type ApiGetCitasType = {
  id: number;
  razon_social: string;
  numero_cita: string;
  fecha_cita: string;
  paciente: string;
  realizada: false;
};

//Tabla clientes types
export type ThTableClientesType = {
  children?: ReactNode;
};

export type RowsTablaClientesType = {
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
export type PaginaPropsType = {
  page: number;
  setPage: any;
  next: string | null | undefined;
  prev: string | null | undefined;
};
// filtro de la tabla
export type FiltroClientePropsType = {
  data: RowsTablaClientesType[] | undefined;
  setData: any;
  formFilter: FiltroFormData;
  setFormFilter: React.Dispatch<React.SetStateAction<FiltroFormData>>;
};
export type FiltroFormData = {
  razon_social: string;
  municipio: string;
};

export type PropsNuevoClienteType = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: RowsTablaClientesType[] | undefined;
  setData: any;
};

//agendar

export type Cita = {
  id: number;
  razon_social: string;
  numero_cita: string;
  fecha_cita: string;
  paciente: string;
  realizada: boolean;
  [key: string]: any;
};
export type PropsTbodyAgendarType = {
  data: Cita[];
};
