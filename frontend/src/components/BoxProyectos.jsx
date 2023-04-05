import React from 'react'


export default function BoxProyectos() {
    
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Title</h3>
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
              <th style={{ width: '10%' }}>ID</th>
              <th style={{ width: '75%' }}>Nombre</th>
              <th style={{ width: '15%' }}>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
      <div className="card-footer">Footer</div>
      {/* /.card-footer*/}
    </div>
  );
}
