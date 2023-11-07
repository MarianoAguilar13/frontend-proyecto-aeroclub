import "./AdminDetallesAsociados.css";
import { CardMostrarAsociados } from "../../components/card-mostrar-asociados/CardMostrarAsociados";
import { Usuarios } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function AdminDetallesAsociados() {
  const asociado: Usuarios = {
    nombre: "Juan",
    apellido: "García",
    nombreCompleto: "García Juan",
    email: "juan.perez@example.com",
    telefono: 5551234567,
    dni: 123456789,
    fechaAlta: "2023-10-30",
    fechaBaja: "N/A",
    direccion: "Calle Principal 123",
    fotoPerfil: "perfil1.jpg",
  };

  const navigate = useNavigate();

  return (
    <div className="detallesAsociadosContainer">
      <CardMostrarAsociados asociado={asociado}></CardMostrarAsociados>
      <div className="detallesAsociadosContainerButtons">
      <Button onClick={() => {
              navigate("/admin-editar-usuarios", { replace: true });
              console.log("Ir a ver mas");
            }} size="small">Editar asociado</Button>
      <Button sx={{color: "red"}} size="small">Borrar asociado</Button>
      </div>
    </div>
  );
}

export default AdminDetallesAsociados;
