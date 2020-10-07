import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DEPARTMENTS_BY_COUNTRY } from "../../../../../../../../../../services/EndPoints";

const FieldDepartment = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataDepartment, setDataDepartment] = useState([]);
  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${DEPARTMENTS_BY_COUNTRY}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataDepartment(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setDataDepartment([]);
      });
  };

  const validateValues = () => {
    if (props.oldValueCountryId !== props.newValueCountryId) {
      setDataDepartment([]);
      values.correspondence_department = "";
      fetchNewValues(props.newValueCountryId);
    } else if (props.countryId !== "") {
      fetchNewValues(props.countryId);
    } else if (props.countryId === "") {
      setDataDepartment([]);
      values.correspondence_department = "";
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.newValueCountryId, props.countryId]);

  return (
    <div>
      {" "}
      <select
        value={values.correspondence_department}
        onChange={(e) =>
          setFieldValue("correspondence_department", e.target.value)
        }
        onBlur={(e) => setFieldTouched("correspondence_department", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_department &&
          touched.correspondence_department &&
          "is-invalid"
        }`}
      >
        <option value={""}>-- Seleccione --</option>
        {dataDepartment.map((aux, id) => {
          return (
            <option key={id} value={aux.id}>
              {aux.name}
            </option>
          );
        })}
      </select>{" "}
    </div>
  );
};

FieldDepartment.propTypes = {
  authorization: PropTypes.string.isRequired,
  newValueCountryId: PropTypes.string.isRequired,
  oldValueCountryId: PropTypes.string.isRequired,
  countryId: PropTypes.string.isRequired,
};

export default FieldDepartment;
