import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert2";

const Login = () => {
  //Redireccionar componente a otro
  const navigate = useNavigate();

  //Definicion estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async () => {
    if (password.length < 6) {
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
        email: usuario.email,
        password: usuario.password,
      };
      const response = await APIInvoke.invokePOST(`/api/auth`, data);
      const mensage = response.msg;

      if (mensage === 'El usuario no existe' || mensage === 'Contraseña incorrecta') {
        const msg = "La contraseña y/o el usuario no es válido. Verifique los datos.";
        swal.fire({
          title: "Error",
          text: msg,
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "Ok!",
          timer: 3600,
        });
      } else {
        //Se obtiene JWT de acceso

        const jwt = response.token;

        //El token debe guardarse en el localStorage

        localStorage.setItem('token', jwt);

        //Redireccionamos al home
        navigate('/proyectos-admin')
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);
  

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link to={"#"} className="h1">
              <b>Iniciar</b> Sesión
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">
              Bienvenido. Ingrese sus credenciales
            </p>
            <form onSubmit={onSubmit}>
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
              <div className="social-auth-links text-center mt-2 mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                  Crear cuenta
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

export default Login;
