import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { datasticker } from "../../../../utils/valuestickers/datasticker";
import { push } from "core-js/fn/array";

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
    };
  }

  componentDidMount() {
    this.setState({
      datasticker: datasticker,
    });
  }

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
      position: aux.length,
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
    // console.log(`Posicion seleccionada ${position}`);
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
              <button type="button" className="btn btn-secondary btn-sm">
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
