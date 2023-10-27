import "./PanelAdministradores.css";
import { TablaAsociadosPanelAdmin } from "../../components/tablaAsociadosPaneAdmin/TablaAsociadosPaneAdmin";
import { useTablaAsociadosPanelAdmin } from "../../hooks/useTablaAsociadosPanelAdmin";
import { AeronaversAlertaPanelAdmin } from "../../components/aeronavers-alerta-panel-admin/aeronaversAlertaPanelAdmin";
import { aeronaves } from "../../mock/aeronaves";

function PanelAdministradores() {
  const {
    toggleColors,
    asociados,
    showColors,
    handleChangeSort,
    sortedAsociados,
  } = useTablaAsociadosPanelAdmin();

  return (
    <div className="panelAdminContainer">
      <h1>Asociados</h1>
      <button onClick={toggleColors}>Colorear files</button>

      {asociados.length > 0 && (
        <TablaAsociadosPanelAdmin
          changeSorting={handleChangeSort}
          showColors={showColors}
          asociados={sortedAsociados}
        />
      )}

      <AeronaversAlertaPanelAdmin
        aeronaves={aeronaves}
      ></AeronaversAlertaPanelAdmin>
    </div>
  );
}

export default PanelAdministradores;
