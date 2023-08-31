import { PropsTbodyAgendarType } from "@/types";

export default function RowTablaAgendar(props: PropsTbodyAgendarType) {
  return (
    <div className="flex flex-row flex-wrap gap-2 max-w-[180px] m-0">
      {props.data.map((cita) => (
        <div
          className={`h-[25px] w-[25px] rounded-lg ${
            cita.realizada ? "bg-[green]" : "bg-[red]"
          }`}
        ></div>
      ))}
    </div>
  );
}
