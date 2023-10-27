import { useState } from "react";
import { useHeader } from "../../hooks/useHeader";
import "./Header.css";

function Header() {
  //aca desestructuro el objeto que retorna del useHeader guardandolo en variables para
  //utilizarlos la page
  const {
    openMenu,
    openWindow,
    openMenuResponsive,
    cerrarVentana,
    desplegarVentana,
    actionMenu,
    actionMenuResponsive,
    navigate,
  } = useHeader();

  return (
    <div className="header">
      <div className="headerVisible">
        <div className="headerVisibleLogoContainer">
          <img
            onClick={() => {
              navigate("/", { replace: true });
            }}
            className="headerVisibleLogoContainerLogo"
            src="https://drive.google.com/uc?export=view&id=19U8BFR2N0VfapOWtSvoiRSsXvOc6iVdH"
            alt="Icono mascotas"
          />
        </div>
        <div className="headerLinks">
          <a className="headerLinksLink">Inicio</a>
          <a className="headerLinksLink">Panel de Control</a>
          <a className="headerLinksLink">Contacto</a>
        </div>
        <div className="infoRoles">
          <p className="infoRolesName">Nombre y apellido</p>
          {/*    <img
            className="infoRolesImg"
            src="https://drive.google.com/uc?export=view&id=1nfFc-DkDYPLd15_24hY8nlikMQ4OxMav"
            alt=""
          />*/}
          <select
            className="infoRolesSelectRol"
            name="rol"
            id="seleccionar-rol"
          >
            <option value="Asociado">Asociado</option>
            <option value="Administrador">Administrador</option>
            <option value="Instructor">Instructor</option>
            <option value="Mecanico">Mecánico</option>
            <option value="Gestor">Gestor</option>
          </select>
          <a className="infoRolesCerrarSesion">Cerrar Sesión</a>
        </div>
        <div className="headerVisibleBotonDesplegarContainer">
          <button
            onClick={desplegarVentana}
            className="headerVisibleBotonDesplegar"
          >
            <div className="headerVisibleBotonDesplegarBarras"></div>
            <div className="headerVisibleBotonDesplegarBarras"></div>
            <div className="headerVisibleBotonDesplegarBarras"></div>
          </button>
        </div>
      </div>
      <div className="miniHeader">
        <a className="headerLinksLinkMiniHeader" onClick={actionMenu}>
          Mi Info
        </a>
        <a className="headerLinksLinkMiniHeader">Asociados</a>
        <a className="headerLinksLinkMiniHeader">Instructores</a>
        <a className="headerLinksLinkMiniHeader">Aeronaves</a>
        <a className="headerLinksLinkMiniHeader">Turnos</a>
      </div>
      <div
        className="menuDesplegable"
        style={{ display: openMenu ? "flex" : "none" }}
      >
        <a className="headerLinksLinkMiniHeader">Ver certificado CMA</a>
        <a className="headerLinksLinkMiniHeader">Ver licencias</a>
        <a className="headerLinksLinkMiniHeader">
          Registro historicos de vuelos
        </a>
        <a className="headerLinksLinkMiniHeader">Cargar Certificado CMA</a>
        <a className="headerLinksLinkMiniHeader">Cargar Licencias</a>
        <a className="headerLinksLinkMiniHeader">Editar mis datos</a>
      </div>
      <div
        className="ventanaLinks"
        style={{ display: openWindow ? "flex" : "none" }}
      >
        <button onClick={cerrarVentana} className="ventanaLinksBotonCerrar">
          x
        </button>
        <a className="ventanaLinksLink" onClick={actionMenuResponsive}>
          Mi info
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Inicio
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Panel de Control
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Contactanos
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Asociados
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Instructores
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Aeronaves
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: !openMenuResponsive ? "flex" : "none" }}
        >
          Turnos
        </a>
        {/* Aca estan los links cuando seleccionas mi info */}
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Ver certificado CMA
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Ver licencias
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Registro historicos de vuelos
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Cargar Certificado CMA
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Cargar Licencias
        </a>
        <a
          className="ventanaLinksLink"
          style={{ display: openMenuResponsive ? "flex" : "none" }}
        >
          Editar mis datos
        </a>
      </div>
    </div>
  );
}

export { Header };
