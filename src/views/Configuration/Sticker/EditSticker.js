import React, { Component } from "react";
import { connect } from "react-redux";
import { EditInformationSticker } from "./components/EditInformationSticker";
import ValueSticker from "./components/ValueSticker";
import PreviewStickerConfiguration from "./components/PreviewStickerConfiguration";

class EditSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-secondary" role="alert">
            <h4 className="alert-heading">Valores del sticker</h4>
            <p className="text-justify">
              Tener en cuenta que la informacion corresponde unicamente a la
              informacion de este y severa reflejada al instante de la edicion.
              Tener en cuenta que los valores del sticker se actualizaran, al
              final de la jornada. El orden en que se seleccionen seran el ordan
              en que saldra en el stciker.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <EditInformationSticker id={this.props.match.params.id} />
        </div>
        <div className="col-md-8">
          <ValueSticker />
        </div>
        {/* <div className="col-md-12">
          <PreviewStickerConfiguration />
        </div> */}
      </div>
    );
  }
}

export default EditSticker;
