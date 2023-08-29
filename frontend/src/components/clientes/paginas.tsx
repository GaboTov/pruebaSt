import { paginaPropsType } from "../../../types";

export default function Pagina(props: paginaPropsType) {
  return (
    <div className="flex flex-row p-8 gap-5">
      {props.prev && (
        <button
          className="BtnStl"
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          Anterior
        </button>
      )}
      {props.next && (
        <button
          className="BtnStl"
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Siguiente
        </button>
      )}
    </div>
  );
}
