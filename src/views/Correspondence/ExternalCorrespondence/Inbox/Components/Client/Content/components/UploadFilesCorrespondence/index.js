import React, { Component } from "react";
import UploadFilesCorrespondence from "./UploadFilesCorrespondence";

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

class UploadFilesCorrespondenceExternal extends Component {
  constructor(props) {
    super();
    this.state = {
      authToken: "",
    };
  }
  componentDidMount() {
    this.getDataLocal();
  }

  getDataLocal = () => {
    asyncLocalStorage.getItem("auth_token").then((resp) => {
      this.setState({
        authToken: resp,
      });
    });
  };

  render() {
    const { authToken } = this.state;
    return <UploadFilesCorrespondence authorization={authToken} />;
  }
}

export default UploadFilesCorrespondenceExternal;
