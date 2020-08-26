import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CardTitle, Row, Col } from "reactstrap";
import TabInformation from "./components/TabInformationUser";
import { startUploading } from "./../../../actions/authActions";

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
    this.props.changeImageProfile(e.target.files[0]);
  };

  render() {
    const { imguser } = this.props;
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
                  src={imguser}
                  style={{
                    margin: "10px",
                    width: "200px",
                    height: "200px",
                    cursor: "pointer",
                  }}
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
                      <a href="tel:`${this.props.userinfo.phone}`">
                        {this.props.userinfo.phone}
                      </a>{" "}
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
    imguser: state.authReducer.imguser,
  };
};

const mapDispatch = (dispatch) => {
  return {
    changeImageProfile: (file) => {
      dispatch(startUploading(file));
    },
  };
};

export default connect(mapStateToProp, mapDispatch)(Profile);
