import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import FormStep1 from "./Form/FormStep1";

const dataStep1 = {};
const FormCreateStep1 = (props) => {
  return (
    <div className="animated fadeIn">
      <div className="container">
        <Row>
          <div className="col-md-8 offset-md-2">
            <FormStep1 firstStep={dataStep1} />
          </div>
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
