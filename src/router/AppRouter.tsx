import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import { Layout } from "../components/layout/Layout";
import PanelAdministradores from "../pages/panel-administradores/PanelAdministradores";

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
