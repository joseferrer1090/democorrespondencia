import React, { Component } from "react";
import PropTypes from "prop-types";

class CopyCorrespondence extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="animated fadeIn">
        <p>Componente para el copiado de la correspondencia</p>
      </div>
    );
  }
}

CopyCorrespondence.propTypes = {};

export default CopyCorrespondence;
