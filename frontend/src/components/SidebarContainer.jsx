import React from "react";
import MenuSidebar from './MenuSidebar';
import { Link } from "react-router-dom";
import Logo from "../../node_modules/admin-lte/dist/img/AdminLTELogo.png";

export default function SidebarContainer() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to={"/home"} className="brand-link">
        <img
          src={Logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Admin proyectos</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <Link to={"/home"} className="d-block">
              Menú principal
            </Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <MenuSidebar/>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
