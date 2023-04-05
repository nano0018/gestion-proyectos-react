import React from 'react'
import { Link } from "react-router-dom";
export default function ContentHeader({titulo, breadCrumb1, breadCrumb2, ruta}) {
  return (
<section className="content-header">
  <div className="container-fluid">
    <div className="row mb-2">
      <div className="col-sm-6">
        <h1>{titulo}</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><Link to={ruta}>{breadCrumb1}</Link></li>
          <li className="breadcrumb-item active">{breadCrumb2}</li>
        </ol>
      </div>
    </div>
  </div>
</section>

  )
}
