import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { COMPANY_BY_CONGLOMERATE } from "../../../../../../../../services/EndPoints";

const ReceiverFieldCompany = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataCompany, setDataCompany] = useState([]);
  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${COMPANY_BY_CONGLOMERATE}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataCompany(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setDataCompany([]);
      });
  };

  const validateValues = () => {
    if (props.oldValueConglomerateId !== props.newValueConglomerateId) {
      setDataCompany([]);
      values.correspondence_company_receiver = "";
      fetchNewValues(props.newValueConglomerateId);
    } else if (props.conglomerateId === "") {
      setDataCompany([]);
      values.correspondence_company_receiver = "";
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.newValueConglomerateId, props.conglomerateId]);

  return (
    <div>
      {" "}
      <select
        onChange={(e) =>
          setFieldValue("correspondence_company_receiver", e.target.value)
        }
        onBlur={(e) => setFieldTouched("correspondence_company_receiver", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_company_receiver &&
          touched.correspondence_company_receiver &&
          "is-invalid"
        }`}
      >
        <option value={""}>-- Seleccione --</option>
        {dataCompany.map((aux, id) => {
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

ReceiverFieldCompany.propTypes = {
  authorization: PropTypes.string.isRequired,
  oldValueConglomerateId: PropTypes.string.isRequired,
  newValueConglomerateId: PropTypes.string.isRequired,
  conglomerateId: PropTypes.string.isRequired,
};
export default ReceiverFieldCompany;
