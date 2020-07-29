import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { datasticker } from "../../../../utils/valuestickers/datasticker";

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
    };
  }

  componentDidMount() {
    this.setState({
      datasticker: datasticker,
    });
  }

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log(ev);

    // let tasks = this.state.tasks.filter((task) => {
    //   if (task.name == id) {
    //     task.category = cat;
    //   }
    //   return task;
    // });

    // this.setState({
    //   ...this.state,
    //   tasks,
    // });
  };

  render() {
    const details = {
      inputId: [],
    };
    this.state.datasticker.forEach((t) => (
      <div
        key={t.name}
        onDragStart={(e) => this.onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {t.name}
      </div>
    ));

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
                <div className="card">
                  <div className="card-header">
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Buscar"
                    />
                  </div>
                  <div className="card-body">
                    <ul className="list-group" style={stylelist}>
                      {this.state.datasticker.map((aux) => (
                        <li
                          style={{ border: "1px dashed" }}
                          draggable
                          className="list-group-item draggable"
                          onDragStart={(e) =>
                            this.onDragStart(e, aux.labelText)
                          }
                        >
                          {aux.labelText}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-body">
                  <div
                    className="droppable"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "complete")}
                  >
                    <p className="text-center" style={{ textAlign: "middle" }}>
                      Soltar item de la lista
                    </p>
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
