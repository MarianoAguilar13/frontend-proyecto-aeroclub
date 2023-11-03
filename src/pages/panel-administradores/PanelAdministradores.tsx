import "./PanelAdministradores.css";
import TablaAsociadosPanelAdmin from "../../components/tablaAsociadosPaneAdmin/TablaAsociadosPaneAdmin";
import { useTablaAsociadosPanelAdmin } from "../../hooks/useTablaAsociadosPanelAdmin";
import { AeronaversAlertaPanelAdmin } from "../../components/aeronavers-alerta-panel-admin/aeronaversAlertaPanelAdmin";
import { aeronaves } from "../../mock/aeronaves";
import { CardClima } from "../../components/card-clima/CardClima";

export default function PanelAdministradores() {
  const {
    toggleColors,
    asociados,
    showColors,
    handleChangeSort,
    sortedAsociados,
    setInvertir,
    invertir,
  } = useTablaAsociadosPanelAdmin();

  return (
    <div className="panelAdminContainer">
      <div className="panelAdminContainerCardClima">
        <CardClima></CardClima>
      </div>

      <h1 className="panelAdminTitle">Asociados</h1>
      <button className="panelAdminBotonCambiarColores" onClick={toggleColors}>
        Resaltar filas
      </button>

      <TablaAsociadosPanelAdmin/>

      <AeronaversAlertaPanelAdmin
        aeronaves={aeronaves}
      ></AeronaversAlertaPanelAdmin>
    </div>
  );
}
