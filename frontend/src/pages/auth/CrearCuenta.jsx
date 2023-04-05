import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";

const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, email, password, confirmar } = usuario;
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const crearCuenta = async () => {
    if (password !== confirmar) {
      const msg = "Las contraseñas no son iguales!";
      swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
    } else if (password.length < 6) {
      const msg = "La contraseña deber ser al menos de 6 caracteres.";
      swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok!",
        timer: 3600,
      });
    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
      };
      const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
      const mensage = response.msg;

      if (mensage === "El usuario ya existe") {
        const msg = "El usuario ya existe";
        swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Ok!",
          timer: 3600,
        });
      } else {
        const msg = "El usuario se ha creado correctamente";
        swal.fire({
          title: "Información",
          text: msg,
          icon: "success",
          confirmButtonColor: "#007bff",
          confirmButtonText: "Ok!",
          timer: 3600,
        });
        setUsuario({
          nombre: "",
          email: "",
          password: "",
          confirmar: "",
        });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link to={"#"} className="h1">
              <b>Registrar</b> Usuario
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">
              Bienvenido. Ingrese sus datos para registro
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links text-center mt-2 mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Crear cuenta
                </button>
                <Link to={"/"} className="btn btn-block btn-danger">
                  Regresar al login
                </Link>
              </div>
            </form>
            {/* /.social-auth-links */}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default CrearCuenta;
