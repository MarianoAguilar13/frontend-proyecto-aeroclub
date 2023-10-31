import { Usuarios } from "../../types.d";
import "./FormEditarUsuarios.css";
import Swal from "sweetalert2";

interface Props {
  usuario: Usuarios;
}

function esSoloNumeros(str: string) {
  // Utilizamos una expresión regular para comprobar si el string contiene solo números
  // ^ representa el inicio del string, \d+ representa uno o más dígitos, $ representa el final del string
  const regex = /^\d+$/;
  return regex.test(str);
}

export function FormEditarUsuarios({ usuario }: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      const nombre = e.target.nombre.value;
      const apellido = e.target.apellido.value;
      const email = e.target.email.value;

      let telefono = e.target.telefono.value;

      let dni = e.target.dni.value;

      const direccion = e.target.direccion.value;

      if (esSoloNumeros(dni)) {
        if (esSoloNumeros(telefono)) {
          dni = parseInt(dni, 10);
          telefono = parseInt(telefono, 10);
          Swal.fire(
            "OK",
            `El usuario se edito correctamente con los nuevos datos: Nombre: ${nombre}.\nApellido: ${apellido}.\nMail: ${email}.\nTelefono: ${telefono}.\nDNI: ${dni}.\nDirección: ${direccion}.\n`,
            "success"
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Teléfono no es un números.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Dni no es un números.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo malio sal",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contenedorForm">
      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="nombre-input">
          Nombre:
        </label>
        <input
          className="contenedorFormInput"
          id="nombre-input"
          name="nombre"
          type="text"
          defaultValue={usuario.hasOwnProperty("nombre") ? usuario.nombre : ""}
        />
      </div>
      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="apellido-input">
          Apellido:
        </label>
        <input
          className="contenedorFormInput"
          id="apellido-input"
          name="apellido"
          type="text"
          defaultValue={
            usuario.hasOwnProperty("apellido") ? usuario.apellido : ""
          }
        />
      </div>

      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="email-input">
          Mail:
        </label>
        <input
          className="contenedorFormInput"
          id="email-input"
          name="email"
          type="email"
          defaultValue={usuario.hasOwnProperty("email") ? usuario.email : ""}
        />
      </div>

      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="telefono-input">
          Teléfono:
        </label>
        <input
          className="contenedorFormInput"
          id="telefono-input"
          name="telefono"
          type="text"
          defaultValue={
            usuario.hasOwnProperty("telefono") ? usuario.telefono : ""
          }
        />
      </div>

      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="dni-input">
          DNI:
        </label>
        <input
          className="contenedorFormInput"
          id="dni-input"
          name="dni"
          type="text"
          defaultValue={usuario.hasOwnProperty("dni") ? usuario.dni : ""}
        />
      </div>

      <div className="contenedorFormFieldset">
        <label className="contenedorFormLabel" htmlFor="direccion-input">
          Dirección:
        </label>
        <input
          className="contenedorFormInput"
          id="direccion-input"
          name="direccion"
          type="text"
          defaultValue={
            usuario.hasOwnProperty("direccion") ? usuario.direccion : ""
          }
        />
      </div>
      <button className="contenedorFormButton">Enviar</button>
    </form>
  );
}
