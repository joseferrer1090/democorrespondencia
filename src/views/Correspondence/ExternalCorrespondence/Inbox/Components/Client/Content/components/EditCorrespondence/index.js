import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import EditCorrespondence from "./EditCorrespondence";
import { obtenerDataCorrespondenciaExterna } from "../../../../../../../../../actions/editCorrespondenceExternal";
import {
  agregarUsuarioDisponible,
  agregarUsuarioOriginal,
} from "../../../../../../../../../actions/editCorrespondenceExternalReceiver";
import {
  obtenerDataMetadatos,
  obtenerInfoTemplate,
} from "../../../../../../../../../actions/editCorrespondenceExternalPreviewTemplate";

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

  assignedUsers = () => {
    const { data } = this.props;
    let setStateAssignedUsers = [];
    data.usersAddresses.map((aux, idx) => {
      setStateAssignedUsers.push({
        name: aux.name,
        id: aux.id,
        original: aux.original,
      });
    });
    this.changeStateCorrespondenceExternalReceiver(setStateAssignedUsers);
  };

  changeStateCorrespondenceExternalReceiver = (data) => {
    data.map((aux, idx) => {
      this.props.AgregarUsuario({ id: aux.id, name: aux.name });
      if (aux.original === true) {
        this.props.AgregarUsuarioOriginal(aux.id);
      }
    });
  };

  assignedMetadata = () => {
    const { data } = this.props;
    let setStateMetadata = [];
    data.metadata.map((aux, id) => {
      setStateMetadata.push({
        id: aux.idMetadata,
        value: aux.defaultValue !== null ? aux.defaultValue : "",
      });
    });
    this.changeStateCorrespondenceExternalPreviewTemplate(setStateMetadata);
  };
  changeStateCorrespondenceExternalPreviewTemplate = (idMetadata) => {
    const { data } = this.props;
    this.props.AgregarPlantilla(data.metadata);
    this.props.AgregarMetadatos(idMetadata);
  };

  render() {
    const { authToken } = this.state;
    const { data } = this.props;
    const birthDate = (data) => {
      let birthDate;
      birthDate = new Date(data);
      return moment(birthDate).format("YYYY-MM-DD");
    };
    let dataResult = {
      correspondence_dateFiling: "",
      correspondence_timeFiling: "",
      correspondence_headquarter_name: "",
      correspondence_guide: "",
      correspondence_issue: "",
      correspondence_userFiling: "",
      correspondence_folios: "",
      correspondence_consecutive: "",
      correspondence_documentDate: "",
      correspondence_documentNum: "",
      correspondence_userFiling_name: "",
      correspondence_thirdParty: "",
      correspondence_headquarter: "" /* S */,
      correspondence_validity: "" /* S */,
      correspondence_conglomerate: "" /* S */,
      correspondence_company: "" /* S */,
      correspondence_country: "" /* S */,
      correspondence_department: "" /* S */,
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
      this.assignedUsers();
      this.assignedMetadata();
      dataResult = {
        correspondence_dateFiling: data.date_filing,
        correspondence_timeFiling: data.time_filing,
        correspondence_headquarter_name: data.headquarter.name,
        correspondence_validity: data.validity,
        correspondence_userFiling_name: data.userFiling.name,
        correspondence_guide: data.guide,
        correspondence_issue: data.issue,
        correspondence_userFiling: data.userFiling.id,
        correspondence_folios: data.numFolios,
        correspondence_consecutive: data.consecutive,
        correspondence_documentDate: birthDate(data.documentDate),
        correspondence_documentNum: data.documentNumber,
        correspondence_thirdParty: data.thirdPartyr.identification,
        correspondence_headquarter: data.headquarter.id /* S */,
        correspondence_conglomerate: data.conglomerate.id /* S */,
        correspondence_company: data.company.id /* S */,
        correspondence_country: data.country.id /* S */,
        correspondence_department: data.department.id /* S */,
        correspondence_typeDocumentary: data.typeDocumentary.id /* S */,
        correspondence_city: data.city.id /* S */,
        correspondence_typeArrival: data.typeShipmentArrival.id /* S */,
        correspondence_messenger: data.messenger.id /* S */,
        correspondence_template:
          data.template !== null ? data.template.id : "" /* S */,
        correspondence_conglomerate_receiver: "" /* S */,
        correspondence_company_receiver: "" /* S */,
        correspondence_headquarter_receiver: "" /* S */,
        correspondence_dependence_receiver: "" /* S */,
      };
    }
    return (
      <EditCorrespondence
        authorization={authToken}
        object={dataResult}
        idCorrespondence={this.props.match.params.id}
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
    AgregarUsuario(user) {
      dispatch(agregarUsuarioDisponible(user));
    },
    AgregarUsuarioOriginal(id) {
      dispatch(agregarUsuarioOriginal(id));
    },
    AgregarMetadatos(data) {
      dispatch(obtenerDataMetadatos(data));
    },
    AgregarPlantilla(data) {
      dispatch(obtenerInfoTemplate(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCorrespondenceExternalCorrespondence);
