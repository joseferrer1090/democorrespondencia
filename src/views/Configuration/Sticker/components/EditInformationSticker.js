import React, { Component } from "react";
import { obtenerSticker } from "../../../../actions/stickerActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
class EditInformactionSticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticker: {
        code: "",
        name: "",
        description: "",
      },
    };
  }

  componentDidMount() {
    if (Object.entries(this.props.sticker).length === 0) {
      this.getSticker(this.props.match.params.id);
    } else if (Object.entries(this.props.sticker).length !== null) {
      return;
    }
  }
  getSticker = (id) => {
    this.props.getData(id);
  };

  render() {
    const send = () => {
      const schema = Yup.object().shape({
        name: Yup.string().trim().required("nombre necesario el sticker"),
        code: Yup.string().trim().required("codigo necesario"),
        description: Yup.string(),
      });
      schema
        .validate({
          name: this.state.sticker.name,
          code: this.state.sticker.code,
          description: this.state.sticker.description,
        })
        .then(() => {
          alert(JSON.stringify(this.state.sticker, null, 2));
        })
        .catch((err) => {
          console.log(err.errors);
        });
    };
    return (
      <div className="card">
        <div className="card-header">
          <i className="fa fa-sticky-note" />
          Informacion del sticker
        </div>
        <div className="card-body">
          <form className="form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Codigo</label>
                  <input
                    name="code"
                    type="text"
                    className="form-control form-control-sm"
                    value={this.state.sticker.code}
                    onChange={(e) => {
                      this.setState({
                        sticker: {
                          ...this.state.sticker,
                          code: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control form-control-sm"
                    value={this.state.sticker.name}
                    onChange={(e) => {
                      this.setState({
                        sticker: {
                          ...this.state.sticker,
                          name: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descripcion</label>
                  <textarea
                    name="description"
                    className="form-control form-control-sm"
                    value={this.state.sticker.description}
                    onChange={(e) => {
                      this.setState({
                        sticker: {
                          ...this.state.sticker,
                          description: e.target.value,
                        },
                      });
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="text-right">
            <button
              type="submit"
              className="btn btn-secondary btn-sm"
              onClick={() => send()}
            >
              <i className="fa fa-pencil" /> Editar informacion
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sticker: state.stickerReducer.sticker,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (id) => {
      dispatch(obtenerSticker(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditInformactionSticker));
