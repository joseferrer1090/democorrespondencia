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
    if (this.state.id !== prevProps.selectedItem) {
      this.GetDataById(this.state.id.value);
    }
  }

  render() {
    //console.log(this.state.data);
    // console.log(this.state.id);
    const aux = this.state.data;
    return (
      <div>
        <Card>
          <CardHeader>Datos del remitente</CardHeader>
          <CardBody>
            <div className="row">
              <form>
                <div className="">
                  <div className="form-group">
                    <dd>Nombre</dd>
                    <dt>{aux.name}</dt>
                  </div>
                </div>
                <div className="form-group">
                  <dd>username</dd>
                  <dt>{aux.username}</dt>
                </div>
                <div className="from-group">
                  <dd>email</dd>
                  <dt> {aux.email} </dt>
                </div>
                <div className="form-group">
                  <dd>Telefono</dd>
                  <dt> {aux.phone} </dt>
                </div>
                <div className="form-group">
                  <dd>Pagina </dd>
                  <dt> {aux.website} </dt>
                </div>
              </form>
            </div>
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
