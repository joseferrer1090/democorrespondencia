import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardFooter, Collapse } from "reactstrap";

class CardUserRemitente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.selectedItem,
      data: "",
      collapse: this.props.collapseState
    };
  }

  handleToggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapseState
    });
  };

  GetDataById = () => {
    // metodo handle para cambiar el state del collapse
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log("Error", err);
      });
    // Fin
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedItem !== state.id) {
      return {
        id: props.selectedItem
      };
    }
    return null;
  }

  componentDidMount() {
    this.GetDataById(this.props.selectedItem.value);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.warn(prevProps, this.props, this.state, prevState);
    if (this.state.id !== prevProps.selectedItem) {
      this.GetDataById(this.state.id.value);
    }
  }

  render() {
    //console.log(this.state.data);
    // console.log(this.state.id);
    return (
      <div>
        <Card>
          <CardHeader>Datos del remitente</CardHeader>
          <CardBody>
            <p>Probando apenas</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

CardUserRemitente.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  collapse: PropTypes.bool.isRequired
};

export default CardUserRemitente;
