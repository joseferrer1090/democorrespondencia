import React, { Component } from 'react'
import PropTypes from 'prop-types'

class newContentComponent extends Component {
    constructor(props) {
        super(props);
       
     }
    render() {
        return (
            <div className="animated fadeIn">
                <div className="col-md-8" style={{ padding: 0 }}>
              <div className="form-group">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  style={{
                    borderRadius: "10px",
                    textDecoration: "inherit",
                    fontFamily: "FontAwesome, Helvetica Neue",
                    fontStyle: "normal",
                    fontWeight: "normal",
                  }}
                  placeholder="&#xF002; Buscar correspondencia"
                />
              </div>
            </div>
            <div className="col-md-4">Paginacion</div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ padding: 0 }}>
              <div className="table-responsive">
                <table className="table table-hover table-condensed table-sm">
                  <thead>
                    <tr>
                      <th style={{ width: "10px" }}>Tipo</th>
                      <th style={{ width: "100px" }}>Sede</th>
                      <th style={{ width: "10px" }}>Consecutivo</th>
                      <th style={{ width: "50px" }}>Asunto</th>
                      <th style={{ width: "50px" }}>Fecha</th>
                      <th style={{ width: "50px" }}>Destinatarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    
                        <tr key={id}>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                        </tr>
                    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}
export default newContentComponent