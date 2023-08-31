"use client";
import { TablaSemana } from "@/components/agendar_citas/tabla-semanac";
import TbodyAgendar from "@/components/agendar_citas/tbody-agendar";
import useGetCitas from "@/hooks/use-get-citas";

export default function Page() {
  const { data, week, setWeek, dateMondayWeek } = useGetCitas();
  return (
    <TablaSemana
      week={week}
      setWeek={setWeek}
      dateMondayWeek={dateMondayWeek}
    >
      <TbodyAgendar data={data} />
    </TablaSemana>
  );
}
