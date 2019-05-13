import React, { Component } from "react";
import PropTypes from "prop-types";

class Cardinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: this.props.selectedItem,
      dataList: null
    };
  }

  getUserById = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data
        })
      );
  };

  static getDerivedStateFromProps(props, state) {
    if (props.selectedItem !== state.id) {
      return {
        id: props.selectedItem
      };
    }
    return null;
  }

  //   componentDidMount() {
  //     this.getUserById(this.state.id);
  //   }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevProps.selectedItem) {
      this.getUserById(this.state.id);
    }
  }

  componentDidMount() {
    this.setState({
      dataList: []
    });
  }

  addUser = () => {
    let tempArr = [...this.state.dataList];
    tempArr.push(this.state.data);
    this.setState({
      dataList: tempArr
    });
    console.log(this.state.dataList);
  };

  render() {
    const data = this.state.data;
    return (
      <div>
        <div className="card">
          <div className="card-header">Datos del destinatario externo</div>
          <div className="card-body">
            <p>Probando apenas {this.state.id}</p>
            <p>Nombre {data.name}</p>
            <div className="float-right">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  this.addUser();
                }}
              >
                {" "}
                <i className="fa fa-plus" /> Agregar{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cardinformation.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Cardinformation;
