import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  STICKER_PUT_DETAIL,
  STICKER_FIND_BY_STICKER_ID,
} from "./../../../../services/EndPoints";
import { Card, CardBody, CardFooter, CardHeader, Alert } from "reactstrap";
import { datasticker } from "../../../../utils/valuestickers/datasticker";
import { decode } from "jsonwebtoken";

const stylelist = {
  maxHeight: "400px",
  marginBottom: "10px",
  overflow: "scroll",
  webkitOverflowScrolling: "touch",
};

class ValueSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasticker: [],
      datavalues: [],
      alert200: false,
      alertError: false,
    };
  }

  componentDidMount() {
    this.getDataStickerBeforeEdit(this.props.id);
    this.setState({
      datasticker: datasticker,
    });
  }

  getDataStickerBeforeEdit = (id) => {
    const token = localStorage.getItem("auth_token");
    const username = decode(token);
    fetch(
      `${STICKER_FIND_BY_STICKER_ID}/${id}?username=${username.user_name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) =>
        response.json().then((data) => {
          if (response.status === 200) {
            console.log("Datos para editar");
            console.log(data.details);
            return this.setState({
              ...this.state,
              datavalues: data.details.map((aux) => ({
                inputId: aux.inputId,
                labelText: aux.labelText,
                position: aux.numPosition,
              })),
            });
          } else if (response.status !== 200) {
            console.log(response.status);
            return { ...this.state };
          }
        })
      )
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };

  onDragStart = (ev, aux) => {
    console.log("dragstart:", aux);
    ev.dataTransfer.setData("object", JSON.stringify(aux));
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev) => {
    const aux = this.state.datavalues;
    const obj = JSON.parse(ev.dataTransfer.getData("object"));
    aux.push({
      labelText: obj.labelText,
      inputId: obj.inputId,
      position: `${aux.length}`,
    });
    this.setState({
      datavalues: aux,
    });
  };

  removeItem = (position) => {
    const dataux = this.state.datavalues;
    this.setState({
      datavalues: dataux.filter((aux) => aux.position !== position),
    });
  };

  editStcikerValue = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth_token");
    const username = decode(token);
    const id = this.props.id;
    fetch(`${STICKER_PUT_DETAIL}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        id: id,
        userName: username.user_name,
        details: this.state.datavalues,
      }),
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            alert200: true,
          });
          setTimeout(() => {
            this.setState({
              alert200: false,
            });
          }, 1200);
        } else if (response.status === 400) {
          this.setState({
            alertError: true,
          });
          setTimeout(() => {
            this.setState({
              alertError: false,
            });
          }, 1200);
        }
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };

  render() {
    const datasticker = this.state.datasticker;
    const datavalues = this.state.datavalues;

    datasticker.map((aux) => (
      <div
        key={aux.name}
        onDragStart={(e) => this.onDragStart(e, aux.name)}
        draggable
        className="draggable"
      >
        {aux.name}
      </div>
    ));

    console.log(datavalues);
    console.log(this.props.id);
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            {" "}
            <i className="fa fa-list" />
            Valores del sticker
          </CardHeader>
          <CardBody>
            <div className="row">
              <div className="col-md-12">
                <p className="text-justify">
                  <b>IMPORTANTE: </b> Arrastrar y solter los valores del
                  sticker. A lado izquierdo de encuentran los valores del stick,
                  se debe soltar a lado derecho, tener en cuenta el orden.
                </p>
                <Alert color={"success"} isOpen={this.state.alert200}>
                  <i className="fa fa-check-circle" /> Se actualizaron los
                  valores del sticker
                </Alert>
                <Alert color={"danger"} isOpen={this.state.alertError}>
                  <i className=" fa fa-times" /> Error al actualizar los valores
                  del sticker.
                </Alert>
              </div>
              <div className="col-md-6">
                <div className="">
                  <div className="">
                    <ul className="list-group" style={stylelist}>
                      {datasticker.map((aux, id) => (
                        <li
                          key={id}
                          onDragOver={(e) => this.onDragOver(e)}
                          onDragStart={(e) => this.onDragStart(e, aux)}
                          draggable
                          className="list-group-item"
                        >
                          {aux.labelText}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className=""
                  onDragOver={(e) => this.onDragOver(e)}
                  onDrop={(e) => this.onDrop(e)}
                  style={{ height: "auto" }}
                >
                  <div className="card">
                    <div className="card-body">
                      {this.state.datavalues.length ? (
                        this.state.datavalues.map((aux, id) => {
                          return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              {aux.labelText}
                              <span className="">
                                <i
                                  className="fa fa-times"
                                  style={{ color: "red", cursor: "pointer" }}
                                  onClick={() => this.removeItem(aux.position)}
                                />
                              </span>
                            </li>
                          );
                        })
                      ) : (
                        <p
                          style={{
                            textAlign: "center",
                            padding: "2em",
                            fontSize: "12pt",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            color: "#aaa",
                            backgroundColor: "#eee",
                          }}
                        >
                          {" "}
                          selecciones un valor para el sticker{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className="text-right">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => this.editStcikerValue(e)}
              >
                <i className="fa fa-pencil" /> Asignar valores
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

ValueSticker.propsTypes = {};

export default ValueSticker;
