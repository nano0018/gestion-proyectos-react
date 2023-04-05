import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
            titulo={"Home"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta={"/home"}
        />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Proyectos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit" />
                  </div>
                  <Link to={'/proyectos-admin'} className="small-box-footer">
                    Ver proyectos <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
