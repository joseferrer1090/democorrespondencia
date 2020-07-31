import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import FormStep1 from "./Forms/FormStep1";

const FormCreateStep1 = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="container">
        <Row>
          <FormStep1
            authorization={props.authorization}
            nameUserFiling={props.nameUserFiling}
            headquarterFiling={props.headquarterFiling}
            nextStep={() => props.nextStep()}
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
