import React, { useState, useEffect } from "react";
import Navbar from "./../../components/Navbar";
import SidebarContainer from "./../../components/SidebarContainer";
import ContentHeader from "./../../components/ContentHeader";
import Footer from "./../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";
import { Link } from 'react-router-dom';

export default function ProyectosAdmin() {
  const [proyectos, setProyectos] = useState([]);
  const cargarProyectos = async () => {
    const response = await APIInvoke.invokeGET(`/api/proyectos`);
    setProyectos(response.proyectos);
  };
  useEffect(() => {
    cargarProyectos();
  }, []);

  const eliminarProyecto = async (e, id) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/proyectos/${id}`);
    if (response.msg === "Proyecto eliminado") {
      const msg = "Proyecto eliminado correctamente";
      swal.fire({
        title: "Información",
        text: msg,
        icon: "success",
        confirmButtonColor: "#007bff",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
      cargarProyectos();
    } else {
      const msg = "No se pudo eliminar el proyecto";
      swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de proyectos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Proyectos"}
          ruta={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <div className="row pb-0">
              <Link to={"/crear-proyecto"} className="btn btn-primary">Agregar</Link>
                </div>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>ID</th>
                    <th style={{ width: "75%" }}>Nombre</th>
                    <th style={{ width: "15%" }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {proyectos.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.nombre}</td>
                      <td>
                        <Link to={`/editar-proyecto/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">
                          <i className="fa fa-edit" />
                          &nbsp;Editar
                        </Link>
                        &nbsp;&nbsp;
                        <button
                          onClick={(e) => eliminarProyecto(e, item._id)}
                          className="btn btn-sm btn-danger"
                        >
                          <i className="fas fa-calendar-times" />
                          &nbsp;Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
            <div className="card-footer">Footer</div>
            {/* /.card-footer*/}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
