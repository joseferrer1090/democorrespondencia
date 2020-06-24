import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Data2 from "./../../../../../../../services/data_inbox_extern.json";
import "./components/css/table_inbox.css";
import "./components/css/TableInboxFixed.css";
import "./../../../../../../../css/ContentComponentExternalCorrespondence.css";
import moment from "moment";
import { EXTERNAL_CORRESPONDENCE_RECEIVED } from "../../../../../../../services/EndPoints";

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data2,
      dropdownOpen: false,
      id:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXNjcmlwdGlvbiI6InByb2JhbmRvIHVybCIsImp0aSI6IjQ3ZmIzZmJkLWIzZjAtNDcyNi05OGZmLTVkYWIwM2VkMjZlYyIsImlhdCI6MTU1NDc2MTU1MSwiZXhwIjoxNTU0NzY1MTUxfQ.TVEKV6i4eYQvkNwwkczLAmR3AV-DHkKwnxK6bWNMDS0 ",
      term: "",
      tblData: "",
      chkrow: false,
      checkall: false,
      idCorrespondenceSelected: null,
      dataInbox: [],
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  componentDidMount() {
    const data = document.querySelector("#tablefixed");
    this.setState({
      tblData: data,
      idCorrespondenceSelected: [],
    });
    this.getDataInbox();
  }
  /* */
  getDataInbox = () => {
    fetch(`${EXTERNAL_CORRESPONDENCE_RECEIVED}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI5NzQ1NTMsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6ImI0MTQ2ZmVkLTc2OTEtNGE3NC1iZDIxLTgyY2M1YzExYWI4MyIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.gsfQL0ZYxKh0xfOqvkoFBXOfP88AWfPxz97pNqV2XGG0z4tIGOpszkqxSTT0HSDTMa72UykhodcSN7VyODPUw3Losa08MNIRlhIpYQoPoVNGVx5ZeGrykpXPG6MesEbFs-IIq4DgxqDXXSVapRPycf_N-3LIy2GTe4YWr_gwJalmmdvxewSh-bYpx2G_kIKVHzLBdzpwsqCCypnOvmjNr6hLeoLxxrH9dXRoW7jkP7f7u2uwEn5AvFbPmHRyKqrzyGaO7RK1-kYrTrY-oaOUxiq9OdZdB4Vo0BAbJFkRngQ7E6Gr-bG5tnF_i7HBEaz84yL8WY-DKrE2bvBJeG7OCg",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataInbox: data,
        });
      })
      .catch((Error) => console.log(" ", Error));
  };

  tipoDocumento = (data) => {
    let tipo = null;
    if (data === "documento") {
      return (tipo = <i className="fa fa-file-text-o" title={`documento`} />);
    } else if (data === "tramite") {
      return (tipo = <i className="fa fa-folder-open-o" title={`tramite`} />);
    }
    return null;
  };

  stateDocumento = (data) => {
    let estado = null;

    if (data === "new") {
      return (estado = "table-dataNew");
    } else if (data === "out of time") {
      return (estado = "table-dataOutoftime");
    } else if (data === "read") {
      return (estado = "table-dataRead");
    }
    return null;
  };

  handleSearchInput = (event) => {
    this.setState({ term: event.target.value });
  };

  searchingFor = (term) => {
    return function (x) {
      return x.asunto.includes(term);
    };
  };

  getSelect = () => {
    const message = "";
    const gird = this.state.tblData;

    const checkbox = gird.getElementsByTagName("INPUT");
    // console.log(checkbox);

    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        // const row = checkbox[i].parentNode.parentNode.firstChild.innerHTML;
        // console.log(row);
        this.setState({
          idCorrespondenceSelected: this.state.idCorrespondenceSelected.push(
            checkbox[i].parentNode.parentNode.firstChild.innerHTML
          ),
        });
        // console.log(this.state.idCorrespondenceSelected);
      }
    }
    console.log("", message);
  };

  // dataTableInbox = () => {
  //   // const {data} = this.state;
  //   const { term } = this.state;
  //   const datainbox = this.state.data
  //     .filter(this.searchingFor(term))
  //     .map((aux, i) => {
  //       // console.log(aux);
  //       return (
  //         <tr
  //           className={`${this.stateDocumento(
  //             aux.estado
  //           )} table-externalCorrespondence`}
  //         >
  //           <td className="hidden" style={{ display: "none" }}>
  //             {aux.estado === "new" ? <b>{aux.id}</b> : aux.id}
  //           </td>

  //           <td className="inbox-small-cells">
  //             <input
  //               name="foo"
  //               type="checkbox"
  //               className="mail-checkbox"
  //               defaultChecked={this.state.chkrow}
  //               onChange={(e) => {
  //                 this.setState({ chkrow: e.target.value });
  //                 // this.setState({ chkrow: !this.state.chkrow });
  //               }}
  //             />
  //           </td>

  //           <td className="inbox-small-cells">
  //             {this.tipoDocumento(aux.tipo)}
  //           </td>

  //           <td className="view-message dont-show">
  //             {aux.estado === "new" || aux.estado === "out of time" ? (
  //               <b> {aux.sede}</b>
  //             ) : (
  //               aux.sede
  //             )}
  //           </td>

  //           <td className="view-message">
  //             {aux.estado === "new" || aux.estado === "out of time" ? (
  //               <b> {aux.consecutivo}</b>
  //             ) : (
  //               aux.consecutivo
  //             )}
  //           </td>

  //           <td>
  //             {aux.estado === "new" || aux.estado === "out of time" ? (
  //               <Link
  //                 // style={{ color: "black" }}
  //                 to={`/correspondence/external/view/${aux.id}`}
  //               >
  //                 <i className="fa fa-paperclip" />
  //                 {aux.estado === "new" || aux.estado === "out of time" ? (
  //                   <b> {aux.asunto}</b>
  //                 ) : (
  //                   aux.asunto
  //                 )}
  //               </Link>
  //             ) : (
  //               <Link
  //                 style={{ color: "black" }}
  //                 to={`/correspondence/external/view/${aux.id}`}
  //               >
  //                 <i className="fa fa-paperclip" />
  //                 {aux.estado === "new" || aux.estado === "out of time" ? (
  //                   <b> {aux.asunto}</b>
  //                 ) : (
  //                   aux.asunto
  //                 )}
  //               </Link>
  //             )}
  //           </td>

  //           <td className="view-message inbox-small-cells">
  //             {aux.estado === "new" || aux.estado === "out of time" ? (
  //               <b> {aux.fecha_documento}</b>
  //             ) : (
  //               aux.fecha_documento
  //             )}
  //           </td>

  //           <td className="view-message text-center">
  //             {aux.estado === "new" || aux.estado === "out of time" ? (
  //               <b>{aux.destinatarios[0].name_destinatario}</b>
  //             ) : (
  //               aux.destinatarios[0].name_destinatario
  //             )}
  //           </td>
  //         </tr>
  //       );
  //     });
  //   return datainbox;
  // };
  DocumentDate(date) {
    let documentDate;
    documentDate = new Date(date);
    return moment(documentDate).format("DD-MM-YYYY");
  }

  /* datos server */

  dataTableInbox = () => {
    // const {data} = this.state;
    const { term } = this.state;
    const datainbox = this.state.dataInbox.map((aux, i) => {
      // console.log(aux);
      return (
        <tr
          className={`${this.stateDocumento(
            "new"
          )} table-externalCorrespondence`}
        >
          <td className="hidden" style={{ display: "none" }}>
            {aux.id}
          </td>

          <td className="inbox-small-cells">
            <input
              name="foo"
              type="checkbox"
              className="mail-checkbox"
              defaultChecked={this.state.chkrow}
              onChange={(e) => {
                this.setState({ chkrow: e.target.value });
                // this.setState({ chkrow: !this.state.chkrow });
              }}
            />
          </td>

          <td className="inbox-small-cells">
            {this.tipoDocumento("documento")}
          </td>

          <td className="view-message dont-show">{aux.headquarter.name}</td>

          <td className="view-message">{aux.numFiling}</td>

          <td>
            <Link
              // style={{ color: "black" }}
              to={`/correspondence/external/view/${aux.id}`}
            >
              <i className="fa fa-paperclip" />
              {aux.issue}
            </Link>
          </td>

          <td className="view-message inbox-small-cells">
            {this.DocumentDate(aux.documentDate)}
          </td>

          <td className="view-message text-center"></td>
        </tr>
      );
    });
    return datainbox;
  };

  /* hasta acá */
  toggleCheckboxes = (source, cbName) => {
    // background: rgb(194,219,255);
    for (var i = 0, n = document.getElementsByName(cbName).length; i < n; i++) {
      document.getElementsByName(cbName)[i].checked = source;
    }
  };

  render() {
    const { dataInbox } = this.state;
    console.log(dataInbox);
    return (
      // <div className="animated fadeIn">
      // <br />
      <div className="d-none d-sm-block" style={{ marginTop: "1px" }}>
        <Container style={{ marginLeft: "0px", padding: "0" }}>
          <Card>
            <CardHeader
              className="text-center"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              <i className="icon-drawer" /> &nbsp; Bandeja de correspondencia
              recibida vigencia 2020
            </CardHeader>
            <CardBody>
              <Row style={{ borderColor: "#C38282", borderWidth: "1px" }}>
                {/* <Col md="3">
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret size="sm">
                      Acciones
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => this.getSelect()}>
                        Seleccionar todo
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </Col> */}
                <Col md="9">
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        {/* <i className="icon-search" /> */}
                        <i class="fa fa-search"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      className="form-control"
                      style={{ width: "auto" }}
                      placeholder={`Buscar correspondencia`}
                      onChange={(e) => this.handleSearchInput(e)}
                    />
                  </InputGroup>
                </Col>
                <Col md="3">
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
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col md="12" style={{ padding: "0" }}>
                    <div className="table-responsive">
                      <table
                        id="tablefixed"
                        className="table table-sm"
                        // style={{ backgroundColor: "#F0F3F5" }}
                      >
                        <thead>
                          <tr
                            className="text-center"
                            style={{ background: "#45B254 !important" }}
                          >
                            <th style={{ width: "10px" }}>
                              <input
                                type="checkbox"
                                onClick={() =>
                                  this.setState(
                                    {
                                      checkall: !this.state.checkall,
                                    },
                                    () =>
                                      this.toggleCheckboxes(
                                        this.state.checkall,
                                        "foo"
                                      )
                                  )
                                }
                              />
                            </th>
                            <th style={{ width: "10px" }}>Tipo</th>
                            <th style={{ width: "100px" }}>Sede</th>
                            <th style={{ width: "10px" }}>Consecutivo</th>
                            <th style={{ width: "50px" }}>Asunto</th>
                            <th style={{ width: "50px" }}>Fecha</th>
                            <th style={{ width: "50px" }}>Destinatarios</th>
                          </tr>
                        </thead>
                        <tbody
                          className="text-center"
                          style={{
                            height: "200px",
                            overflowY: "auto",
                            width: "100%",
                          }}
                        >
                          {/* {datainbox} */}
                          {this.dataTableInbox()}
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Container>
      </div>

      /* <div className="inbox-body">
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
                  <DropdownItem onClick={() => this.getSelect()}>
                    Seleccionar todo
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div> */

      /* <div className="btn-group">
              <button className="btn btn-secondary btn-sm">
                <i className="fa fa-refresh" />
              </button>
            </div> */

      /* <div className="btn-group hidden-phone">
              <input
                type="text"
                className="form-control"
                style={{ width: "750px" }}
                placeholder={`Buscar correspondencia`}
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
        </div> */
      /* --------------------------------------------------------------------------------------------------- */

      /* <div className="table-responsive">
          <table id="tablefixed" className="table table-sm table-hover">
            <thead>
              <tr className="text-center">
                <th>
                  <input type="checkbox" />
                </th>
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
              {datainbox} */

      /* <tr className="table-danger">
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
              </tr> */

      /* <tr className="table-success">
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
              </tr> */
      /* ---------------------------------------------------------------------------------------------- */
      /*
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
              </tr> */

      /* </tbody>
          </table>
        </div> */
      // </div>
    );
  }
}

ContentComponent.propTypes = {};

export default ContentComponent;
