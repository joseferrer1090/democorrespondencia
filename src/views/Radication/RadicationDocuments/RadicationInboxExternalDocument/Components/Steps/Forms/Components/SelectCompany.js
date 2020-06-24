import React, { useEffect, useState } from "react";
import { COMPANY_BY_CONGLOMERATE } from "../../../../../../../../services/EndPoints";

const FieldCompany = ({
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
      values.correspondence_company = "";
      fetchNewValues(props.newValueConglomerateId);
    } else if (props.conglomerateId === "") {
      setDataCompany([]);
      values.correspondence_company = "";
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.newValueConglomerateId, props.conglomerateId]);

  const t = props.t;
  return (
    <div>
      {" "}
      <select
        onChange={(e) =>
          setFieldValue("correspondence_company", e.target.value)
        }
        onBlur={(e) => setFieldTouched("correspondence_company", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_company &&
          touched.correspondence_company &&
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

export default FieldCompany;
