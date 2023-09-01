"use client";
import FiltroCitas from "@/components/agendar_citas/filtro-citas";
import { TablaSemana } from "@/components/agendar_citas/tabla-semanac";

import useGetCitas from "@/hooks/use-get-citas";

import TbodyAgendar from "./tbody-agendar";

export default function TablaAgendar() {
  const { data, week, setWeek, dateMondayWeek, setData } = useGetCitas();
  return (
    <>
      <FiltroCitas
        week={week}
        setWeek={setWeek}
        setData={setData}
        data={data}
      />

      <TablaSemana
        week={week}
        setWeek={setWeek}
        dateMondayWeek={dateMondayWeek}
      >
        <TbodyAgendar data={data} />
      </TablaSemana>
    </>
  );
}
