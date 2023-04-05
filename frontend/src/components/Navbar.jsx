import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navegate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    navegate('/');
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            href="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <strong onClick={cerrarSesion} style={{cursor: 'pointer'}} className="nav-link">
            Salir
          </strong>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            to={"#"}
            className="nav-link"
            data-widget="fullscreen"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
