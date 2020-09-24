import React, { Component } from "react";
import EditCorrespondence from "./EditCorrespondence";

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

class EditCorrespondenceExternalCorrespondence extends Component {
    constructor(props){
        super();
        this.state = {
            authToken:"",
            idCorrespondence:""
        }
    }

    componentDidMount() {
        this.getDataLocal();
        this.setState({
            idCorrespondence: this.props.match.params.id,
          });
    }
    getDataLocal = () => {
        asyncLocalStorage.getItem("auth_token").then((resp) => {
          this.setState({
            authToken: resp,
          });
        });
      };
    render()
    
    {
        const {authToken, idCorrespondence} = this.state;

        return (<EditCorrespondence authorization={authToken} idCorrespondence={idCorrespondence}/>);
    }
}
export default EditCorrespondenceExternalCorrespondence;