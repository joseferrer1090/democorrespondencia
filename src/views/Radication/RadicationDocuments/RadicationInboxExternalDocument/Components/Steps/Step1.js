import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import FormStep1 from "./Forms/FormStep1";
/*
S => Selects 15
 */
const dataStep1 = {
  correspondence_dateFiling: "",
  correspondence_timeFiling: "",
  correspondence_headquarter: "" /* S */,
  correspondence_validity: "" /* S */,
  correspondence_userFiling: "",
  correspondence_conglomerate: "" /* S */,
  correspondence_company: "" /* S */,
  correspondence_dependence: "" /* S */,
  correspondence_country: "" /* S */,
  correspondence_department: "" /* S */,
  correspondence_folios: "",
  correspondence_consecutive: "",
  correspondence_criterion: "" /* S */,
  correspondence_thirdParty: "" /* S */,
  correspondence_group: "" /* S */,
  correspondence_typeDocumentary: "" /* S */,
  correspondence_documentDate: "",
  correspondence_documentNum: "",
  correspondence_city: "" /* S */,
  correspondence_typeArrival: "" /* S */,
  correspondence_guide: "",
  correspondence_issue: "",
  correspondence_messenger: "" /* S */,
  correspondence_template: "" /* S */,
  correspondence_conglomerate_receiver: "" /* S */,
  correspondence_company_receiver: "" /* S */,
  correspondence_headquarter_receiver: "" /* S */,
  correspondence_dependence_receiver: "" /* S */,
};
const FormCreateStep1 = (props) => {
  console.log(props);
  return (
    <div className="animated fadeIn">
      <div className="container">
        <Row>
          <FormStep1
            firstStep={dataStep1}
            authorization={props.authorization}
            nameUserFiling={props.nameUserFiling}
          />
        </Row>
      </div>
    </div>
  );
};

FormCreateStep1.propTypes = {
  dataStep1: PropTypes.object.isRequired,
  // authorization: PropTypes.string.isRequired
};

export default FormCreateStep1;
