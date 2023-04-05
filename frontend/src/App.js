import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import CrearCuenta from './pages/auth/CrearCuenta';
import Home from './pages/Home';
import ProyectosAdmin from './pages/proyectos/ProyectosAdmin';
import CrearProyectos from './pages/proyectos/CrearProyectos';
import EditarProyectos from './pages/proyectos/EditarProyectos';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/crear-proyecto" exact element={<CrearProyectos/>}/>
          <Route path="/editar-proyecto/:paramsProyecto" exact element={<EditarProyectos/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
