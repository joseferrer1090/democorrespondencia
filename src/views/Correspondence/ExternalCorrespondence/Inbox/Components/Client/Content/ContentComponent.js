import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import Data2 from "./../../../../../../../services/data_inbox_extern.json";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2,
      dropdownOpen: false,
      id:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXNjcmlwdGlvbiI6InByb2JhbmRvIHVybCIsImp0aSI6IjQ3ZmIzZmJkLWIzZjAtNDcyNi05OGZmLTVkYWIwM2VkMjZlYyIsImlhdCI6MTU1NDc2MTU1MSwiZXhwIjoxNTU0NzY1MTUxfQ.TVEKV6i4eYQvkNwwkczLAmR3AV-DHkKwnxK6bWNMDS0 ",
      term: ""
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  componentDidMount() {
    console.log("Probando el component did mount");
  }

  tipoDocumento = data => {
    let tipo = null;
    if (data === "documento") {
      return (tipo = <i className="fa fa-file-text-o" title={`documento`} />);
    } else if (data === "tramite") {
      return (tipo = <i className="fa fa-folder-open-o" title={`tramite`} />);
    }
    return null;
  };

  stateDocumento = data => {
    let estado = null;

    if (data === "new") {
      return (estado = "table-success");
    } else if (data === "out of time") {
      return (estado = "table-danger");
    } else if (data === "read") {
      return (estado = "table-default");
    }
    return null;
  };

  handleSearchInput = event => {
    this.setState({ term: event.target.value });
  };

  searchingFor = term => {
    return function(x) {
      return x.asunto.includes(term);
    };
  };

  render() {
    const id = this.state.id;
    const term = this.state.term;
    const datainbox = this.state.data
      .filter(this.searchingFor(term))
      .map((aux, i) => {
        return (
          <tr className={this.stateDocumento(aux.estado)}>
            {/* <td className="inbox-small-cells">
            <input type="checkbox" className="mail-checkbox" />
          </td> */}
            <td className="inbox-small-cells">
              {this.tipoDocumento(aux.tipo)}
            </td>
            <td className="view-message dont-show">{aux.sede} </td>
            <td className="view-message">{aux.consecutivo}</td>
            <td>
              <Link to={`/correspondence/external/view/${aux.id}`}>
                {aux.asunto}
                <i className="fa fa-paperclip" />
              </Link>
            </td>
            <td className="view-message inbox-small-cells">
              {aux.fecha_documento}
            </td>
            <td className="view-message text-center">
              {aux.destinatarios[0].name_destinatario}
            </td>
          </tr>
        );
      });
    return (
      <div className="animated fadeIn">
        <div className="inbox-body">
          <h5 className="text-center">
            Bandeja de correspondencia recibida vigencia 2019{" "}
          </h5>
          <div className="mail-option">
            <div className="chk-all" style={{ marginLeft: "-9px" }}>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret size="sm">
                  Acciones
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Seleccionar todo</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            {/* <div className="btn-group">
              <button className="btn btn-secondary btn-sm">
                <i className="fa fa-refresh" />
              </button>
            </div> */}

            <div className="btn-group hidden-phone">
              <input
                type="text"
                className="form-control"
                style={{ width: "750px" }}
                placeholder={`Bsucar correspondencia`}
                onChange={e => this.handleSearchInput(e)}
              />
            </div>
            <div className="float-right">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fa fa-angle-double-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="table-responsive">
          <table id="tablefixed" className="table table-sm table-hover">
            <thead>
              <tr className="text-center">
                {/* <th>
                  <input type="checkbox" />
                </th> */}
                <th>Tipo</th>
                <th>Sede</th>
                <th>Consecutivo</th>
                <th>Asunto</th>
                <th>Fecha del documento</th>
                <th>Destinatarios</th>
              </tr>
            </thead>
            <tbody
              className="text-center"
              style={{ height: "200px", overflowY: "auto", width: "100%" }}
            >
              {datainbox}

              {/* <tr className="table-danger">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-folder" title="tramite" />
                </td>
                <td className="view-message dont-show">SEDE I </td>
                <td className="view-message">012345678910</td>
                <td>
                  <Link to={`/correspondence/external/view/${id}`}>
                    Added a new class: Login Class Fast Site asdasda asdasd
                    asdasd asasd <i className="fa fa-paperclip" />
                  </Link>
                </td>
                <td className="view-message inbox-small-cells">04/10/2018</td>
                <td className="view-message text-center">Pedro</td>
              </tr> */}

              {/* <tr className="table-success">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>

                <td className="inbox-small-cells">
                  <i className="fa fa-file-o" title="documento" />
                </td>

                <td className="view-message dont-show">SEDE I </td>

                <td className="view-message">1</td>

                <td>Improve the search presence of WebSite</td>

                <td className="view-message inbox-small-cells">04/10/2018</td>

                <td className="view-message text-center">Pedro</td>
              </tr>
              <tr className="table-default">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>

                <td className="inbox-small-cells">
                  <i className="fa fa-folder" title="documento" />
                </td>

                <td className="view-message dont-show">SEDE I </td>

                <td className="view-message">1</td>

                <td>Improve the search presence of WebSite</td>

                <td className="view-message inbox-small-cells">04/10/2018</td>

                <td className="view-message text-center">Pedro</td>
              </tr>
              <tr className="table-primary">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>

                <td className="inbox-small-cells">
                  <i className="fa fa-file-o" title="documento" />
                </td>

                <td className="view-message dont-show">SEDE I </td>

                <td className="view-message">1</td>

                <td>Improve the search presence of WebSite</td>

                <td className="view-message inbox-small-cells">04/10/2018</td>

                <td className="view-message text-center">Pedro</td>
              </tr> */}
              {/* ---------------------------------------------------------------------------------------------- */}
              {/*
              <tr className="table-success">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-light">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i className="fa fa-star" />
                </td>
                <td className="view-message dont-show">Google Webmaster </td>
                <td className="view-message">
                  Improve the search presence of WebSite
                </td>
                <td className="view-message inbox-small-cells" />
                <td className="view-message text-right">March 15</td>
              </tr>
              <tr className="table-default">
                <td className="inbox-small-cells">
                  <input type="checkbox" className="mail-checkbox" />
                </td>
                <td className="inbox-small-cells">
                  <i class="fa fa-star" />
                </td>
                <td className="view-message  dont-show">PHPClass</td>
                <td className="view-message ">
                  Added a new class: Login Class Fast Site
                </td>
                <td className="view-message  inbox-small-cells">
                  <i className="fa fa-paperclip" />
                </td>
                <td className="view-message  text-right">9:27 AM</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
