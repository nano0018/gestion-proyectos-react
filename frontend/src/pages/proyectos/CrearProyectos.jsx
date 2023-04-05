import React, { useState, useEffect } from "react";
import Navbar from "./../../components/Navbar";
import SidebarContainer from "./../../components/SidebarContainer";
import ContentHeader from "./../../components/ContentHeader";
import Footer from "./../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CrearProyectos() {

  const navigate = useNavigate();

  const [proyecto, setProyecto] = useState({
    nombre: ''
  });
  
  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const {nombre} = proyecto;

  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    })
  }

  const crearProyecto = async () => {
    const data = {
      nombre: proyecto.nombre
    }

    const response =  await APIInvoke.invokePOST(`/api/proyectos`, data);

    const idProyecto = response._id;
    
    if (idProyecto === "") {
      const msg = "No se pudo crear el proyecto";
      swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
    } else {
      const msg = "Proyecto creado correctamente";
      swal.fire({
        title: "Información",
        text: msg,
        icon: "success",
        confirmButtonColor: "#007bff",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
      
      navigate("/proyectos-admin");
    }

  }

  const onSubmit = (e) => {
    e.preventDefault();
    crearProyecto();
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Creación de proyectos"}
          breadCrumb1={"Proyectos"}
          breadCrumb2={"Crear"}
          ruta={"/proyectos-admin"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Crear un proyecto</h3>
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
              <form onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="enombre">Nombre del proyecto</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Ingrese el nombre del proyecto"
                      name="nombre"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </div>
              </form>
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
