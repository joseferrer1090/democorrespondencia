import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter, Collapse } from "reactstrap";

class CardUserRemitente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.selectedItem
    };
  }

  GetDataById = id => {
    console.log("apenas probando");
  };

  render() {
    return (
      <div>
        <p>Probando apenas</p>
      </div>
    );
  }
}

CardUserRemitente.propTypes = {
  selectedItem: PropTypes.number.isRequired
};

export default CardUserRemitente;
