import React, { Component } from "react";
import PropTypes from "prop-types";

class PlantillaEditCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.idPlantilla
    };
  }
  render() {
    return (
      <div>
        <p>Apenas probando</p>
      </div>
    );
  }
}

PlantillaEditCorrespondence.propTypes = {
  idPlantilla: PropTypes.number.isRequired
};

export default PlantillaEditCorrespondence;
