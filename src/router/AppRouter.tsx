import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import { Layout } from "../components/layout/Layout";
import PanelAdministradores from "../pages/panel-administradores/PanelAdministradores";
import AdminAdministrarUsuarios from "../pages/admin-administrar-usuarios/AdminAdministrarUsuarios";
import AdminEditarUsuarios from "../pages/admin-editar-usuarios/AdminEditarUsuarios";
import AdminDetallesAsociados from "../pages/admin-detalles-asociados/AdminDetallesAsociados";
import PanelAsociados from "../pages/panel-asociados/PanelAsociados";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Inicio />}></Route> */}
          <Route
            path="panel-administrador"
            element={<PanelAdministradores />}
          />
          <Route
            path="admin-administrar-usuarios"
            element={<AdminAdministrarUsuarios />}
          />
          <Route
            path="admin-editar-usuarios"
            element={<AdminEditarUsuarios />}
          />
          <Route
            path="admin-detalles-asociados"
            element={<AdminDetallesAsociados />}
          />
          <Route
            path="panel-asociado"
            element={<PanelAsociados/>}
          />
          {/* <Route
          path=""
          element={</>}></Route> */}
        </Route>
        <Route path="/inicio" element={<Inicio />}/>
      </Routes>
    </>
  );
};

//<Route path="sign-in" element={<SignIn />} />
