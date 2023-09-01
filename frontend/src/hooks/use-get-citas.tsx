import { defaultFiltroAgendarValues } from "@/app/defaults/defaults";
import ApiManager from "@/services/api";
import DateManager from "@/services/date-manager";
import { Cita } from "@/types";
import { useEffect, useState } from "react";

export default function useGetCitas() {
  const dateManager = new DateManager();
  const [data, setData] = useState<Cita[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const today = new Date();
  const [week, setWeek] = useState<number>(dateManager.getWeekNumber(today));
  const [year, setYear] = useState(today.getFullYear());
  const weekDates = dateManager.getDatesForWeek(week, year);
  const [dateMondayWeek, setDateMondayWeek] = useState<Date>(
    weekDates["Monday"]
  );
  //obtener citas
  useEffect(() => {
    if (week <= 0) {
      setYear(year - 1);
      setWeek(52);
    }
    if (week >= 53) {
      setYear(year + 1);
      setWeek(1);
    }
    const fetchData = async () => {
      const api = new ApiManager();
      try {
        const dataApi = await api.getData(`citas/?week=${week}&year=${year}`);
        setLoading(false);

        setData(dataApi);
        const weekDates = dateManager.getDatesForWeek(week, year);
        setDateMondayWeek(weekDates["Monday"]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [week]);
  return { data, setData, week, setWeek, dateMondayWeek, year };
}
