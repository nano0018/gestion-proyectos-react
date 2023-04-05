import React from "react";
import { Link } from "react-router-dom";

export default function MenuSidebar() {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
          <i className="nav-icon fas fa-home"/>
            <p>
              Inicio
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/proyectos-admin"} className="nav-link">
            <i className="nav-icon fas fa-edit" />
            <p>
              Proyectos
              <span className="right badge badge-danger">New</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
