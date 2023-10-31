import { Usuarios } from "../../types";
import "./CardMostrarAsociados.css";

interface Props {
  asociado: Usuarios;
}

function CardMostrarAsociados({ asociado }: Props) {
  return (
    <div className="ContainerCard">
      <img className="cardFotoPerfil" src="" alt="" />
      <p className="cardDataUsuario">{asociado.apellido}</p>
      <p className="cardDataUsuario">{asociado.nombre}</p>
      <p className="cardDataUsuario">{asociado.email}</p>
      <p className="cardDataUsuario">{asociado.dni}</p>
      <p className="cardDataUsuario">{asociado.direccion}</p>
      <p className="cardDataUsuario">{asociado.telefono}</p>
      <p className="cardDataUsuario">{asociado.fechaAlta}</p>
      <p className="cardDataUsuario">{asociado.fechaBaja}</p>
    </div>
  );
}

export { CardMostrarAsociados };
