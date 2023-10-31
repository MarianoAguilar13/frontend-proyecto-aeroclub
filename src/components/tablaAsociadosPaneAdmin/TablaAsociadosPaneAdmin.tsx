import { SortBy, Asociado } from "../../types.d";
import "./TablaAsociadosPaneAdmin.css";

interface Props {
  changeSorting: (sort: SortBy) => void;
  showColors: boolean;
  asociados: Asociado[];
  setInvertir: any;
  invertir: boolean;
}

export function TablaAsociadosPanelAdmin({
  changeSorting,
  showColors,
  asociados,
  setInvertir,
  invertir,
}: Props) {
  return (
    <table className="tablaAscociadosAdmin">
      <thead className="tablaAsociadosAdminEncabezado">
        <tr>
          <th
            className="tablaAsociadosAdminCabecera"
            onClick={() => {
              setInvertir(!invertir);
              changeSorting(SortBy.ASOCIADO);
            }}
          >
            Asociado
          </th>
          <th
            className="tablaAsociadosAdminCabecera"
            onClick={() => {
              setInvertir(!invertir);
              changeSorting(SortBy.CMA);
            }}
          >
            CMA
          </th>
          <th
            className="tablaAsociadosAdminCabecera"
            onClick={() => {
              setInvertir(!invertir);
              changeSorting(SortBy.CUOTA);
            }}
          >
            Cuota
          </th>
          <th
            className="tablaAsociadosAdminCabecera"
            onClick={() => {
              setInvertir(!invertir);
              changeSorting(SortBy.SALDO);
            }}
          >
            Saldo
          </th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody className={showColors ? "table--showColors" : ""}>
        {asociados.map((asociado) => {
          return (
            <tr key={asociado.email}>
              <td>{asociado.nombreCompleto}</td>
              <td
                style={
                  asociado.cma == "Vencido"
                    ? { color: "var(--bordo)" }
                    : { color: "whitesmoke" }
                }
              >
                {asociado.cma}
              </td>
              <td
                style={
                  asociado.cuota == "Impaga"
                    ? { color: "var(--bordo)" }
                    : { color: "whitesmoke" }
                }
              >
                {asociado.cuota}
              </td>
              <td
                style={
                  asociado.saldo < 0
                    ? { color: "var(--bordo)" }
                    : { color: "whitesmoke" }
                }
              >
                {asociado.saldo}
              </td>
              <td>
                <button
                  className="tablaAsociadosButtonVerMas"
                  onClick={() => {
                    console.log("Ir a ver mas");
                  }}
                >
                  Ver más
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
