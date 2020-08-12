import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardTitle, Row, Col } from "reactstrap";
import TabInformation from "./components/TabInformationUser";

const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgProfile: "/assets/img/avatars/user2.jpg",
    };
    this.inputOpenFileRef = React.createRef();
  }
  onChange = (e) => {
    let files = e.target.files;
    let dataImg = e.target.files[0];
    console.warn("Data file:", files);
    console.log(e.target.files[0].name);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ imgProfile: e.target.result });
      setTimeout((e) => {
        alert(`Se modifico con éxito la imagen:                  
                  name: ${dataImg.name},
                  size: ${dataImg.size},
                  type: ${dataImg.type}`);
      }, 1000);
    };
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="3">
            <div className="card">
              {" "}
              <a
                className="text-center"
                onClick={() => {
                  this.inputOpenFileRef.current.click();
                }}
              >
                <img
                  className="img-thumbnail"
                  src={this.state.imgProfile}
                  style={{ margin: "10px", width: "150px", height: "150px" }}
                />
                <input
                  multiple={false}
                  accept={acceptedFileTypes}
                  type="file"
                  name="file"
                  style={{ display: "none" }}
                  ref={this.inputOpenFileRef}
                  onChange={(e) => this.onChange(e)}
                />
              </a>
              <CardTitle>
                <p className="text-center">
                  {" "}
                  {this.props.userinfo.name}
                  <small className="form-text">
                    {" "}
                    {this.props.userinfo.username}{" "}
                  </small>{" "}
                </p>
                <address>
                  <div style={{ margin: "10px ", fontSize: "13px" }}>
                    {" "}
                    <p className="text-center">
                      <i className="fa fa-phone-square" />{" "}
                      {this.props.userinfo.phone}
                    </p>
                    <p className="text-center">
                      <i className="fa fa-envelope" />{" "}
                      {this.props.userinfo.email}
                    </p>
                  </div>
                </address>
              </CardTitle>
            </div>
            {/* <div>
              <Card>
                <CardHeader>
                  <i className="fa fa-lock" /> Permisos asignados
                </CardHeader>
                <CardBody>
                  <p>Probando</p>
                </CardBody>
              </Card>
            </div> */}
          </Col>
          <Col sm="9">
            <div className="" style={{ height: "auto" }}>
              <TabInformation />
            </div>
            {/* <div>
              <Card body style={{ height: "auto" }}>
                <ChangePassword />
              </Card>
            </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}

Profile.propTypes = {};

const mapStateToProp = (state) => {
  return {
    userinfo: state.authReducer.user,
  };
};

export default connect(mapStateToProp, null)(Profile);
