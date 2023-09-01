import { Cita, PropsTbodyAgendarType } from "@/types";

export default function Cita(props: { cita: Cita }) {
  return (
    <div
      className={`h-[25px] w-[25px] rounded-lg ${
        cita.realizada ? "bg-[green]" : "bg-[red]"
      }`}
    ></div>
  );
}
