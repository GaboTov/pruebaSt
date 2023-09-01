import { PropsTbodyAgendarType } from "@/types";
import { nanoid } from "nanoid";
import Cita from "@/components/agendar_citas/cita";
export default function RowTablaAgendar(props: PropsTbodyAgendarType) {
  return (
    <div className="flex flex-row flex-wrap gap-2 max-w-[180px] m-0">
      {props.data.map((cita) => (
        <Cita
          key={nanoid()}
          cita={cita}
        />
      ))}
    </div>
  );
}
