import ApiManager from "@/services/api";
import DateManager from "@/services/date-manager";
import { Cita } from "@/types";
import { useEffect, useState } from "react";

export default function useGetCitas() {
  const dateManager = new DateManager();
  const [data, setData] = useState<Cita[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [week, setWeek] = useState<number>(dateManager.getWeekNumber());
  const year = 2023; // Cambia esto al año correspondiente
  const weekDates = dateManager.getDatesForWeek(week, year);
  console.log(weekDates["Monday"]);
  const [dateMondayWeek, setDateMondayWeek] = useState<Date>(
    weekDates["Monday"]
  );

  //obtener citas
  useEffect(() => {
    const fetchData = async () => {
      const api = new ApiManager();
      try {
        const dataApi = await api.getDataCitas(
          `citas/?week=${week}&year=${2023}`
        );
        setLoading(false);
        if (dataApi) {
          setData(dataApi);
          const weekDates = dateManager.getDatesForWeek(week, year);
          setDateMondayWeek(weekDates["Monday"]);
        }
      } catch {
        return;
      }
    };

    fetchData();
  }, [week]);
  return { data, week, setWeek, dateMondayWeek };
}
