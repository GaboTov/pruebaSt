import { PaginaPropsType } from "../../types";

export default function Pagina(props: PaginaPropsType) {
  return (
    <div className="flex flex-row p-8 gap-5 justify-center">
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
