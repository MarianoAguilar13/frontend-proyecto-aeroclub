import "./AdminEditarUsuarios.css";
import { FormEditarUsuarios } from "../../components/form-editar-usuarios/FormEditarUsuarios";
import { useAdminAdministrarUsuarios } from "../../hooks/useAdminAdministrarUsuarios";

function AdminEditarUsuarios() {
  const { usuario } = useAdminAdministrarUsuarios();

  return (
    <div className="panelAdminContainer">
      <h1 className="panelAdminTitle">Administrar Usuarios</h1>
      <FormEditarUsuarios usuario={usuario}></FormEditarUsuarios>
    </div>
  );
}

export default AdminEditarUsuarios;
