import React, { Component } from "react";
import EditCorrespondence from "./EditCorrespondence";
import { obtenerDataCorrespondenciaExterna } from "../../../../../../../../../actions/editCorrespondenceExternal";
import { connect } from "react-redux";

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
  constructor(props) {
    super();
    this.state = {
      authToken: "",
    };
  }

  componentDidMount() {
    this.getDataLocal();
    this.props.dataCorrespondence(this.props.match.params.id);
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
    const { data } = this.props;
    let dataResult = {
      correspondence_dateFiling: "",
      correspondence_timeFiling: "",
      correspondence_guide: "",
      correspondence_issue: "",
      correspondence_userFiling: "",
      correspondence_folios: "",
      correspondence_consecutive: "",
      correspondence_documentDate: "",
      correspondence_documentNum: "",
      correspondence_headquarter: "" /* S */,
      correspondence_validity: "" /* S */,
      correspondence_conglomerate: "" /* S */,
      correspondence_company: "" /* S */,
      correspondence_dependence: "" /* S */,
      correspondence_country: "" /* S */,
      correspondence_department: "" /* S */,
      correspondence_criterion: "" /* S */,
      correspondence_thirdParty: "" /* S */,
      correspondence_group: "" /* S */,
      correspondence_typeDocumentary: "" /* S */,
      correspondence_city: "" /* S */,
      correspondence_typeArrival: "" /* S */,
      correspondence_messenger: "" /* S */,
      correspondence_template: "" /* S */,
      correspondence_conglomerate_receiver: "" /* S */,
      correspondence_company_receiver: "" /* S */,
      correspondence_headquarter_receiver: "" /* S */,
      correspondence_dependence_receiver: "" /* S */,
    };
    if (Object.entries(data).length !== 0) {
      dataResult = {
        correspondence_dateFiling: data.date_filing,
        correspondence_timeFiling: "",
        correspondence_guide: "",
        correspondence_issue: "",
        correspondence_userFiling: "",
        correspondence_folios: "",
        correspondence_consecutive: "",
        correspondence_documentDate: "",
        correspondence_documentNum: "",
        correspondence_headquarter: data.headquarter.id /* S */,
        correspondence_validity: "",
        correspondence_conglomerate: data.conglomerate.id /* S */,
        correspondence_company: data.company.id /* S */,
        correspondence_dependence: "" /* S */,
        correspondence_country: data.country.id /* S */,
        correspondence_department: data.department.id /* S */,
        correspondence_criterion: "" /* S */,
        correspondence_thirdParty: data.thirdPartyr.id /* S */,
        correspondence_group: "" /* S */,
        correspondence_typeDocumentary: data.typeDocumentary.id /* S */,
        correspondence_city: data.city.id /* S */,
        correspondence_typeArrival: data.typeShipmentArrival.id /* S */,
        correspondence_messenger: data.messenger.id /* S */,
        correspondence_template: "" /* S */,
        correspondence_conglomerate_receiver: "" /* S */,
        correspondence_company_receiver: "" /* S */,
        correspondence_headquarter_receiver: "" /* S */,
        correspondence_dependence_receiver: "" /* S */,
      };
    }
    return (
      <EditCorrespondence
        authorization={authToken}
        dataInitialValues={data}
        object={dataResult}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.editCorrespondenceExternal.dataCorrespondece,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dataCorrespondence(id) {
      dispatch(obtenerDataCorrespondenciaExterna(id));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCorrespondenceExternalCorrespondence);
