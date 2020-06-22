import React, { useEffect, useState, useRef } from "react";
import { DEPARTMENTS_BY_COUNTRY } from "../../../../../../../../services/EndPoints";

const FieldDepartment = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataDepartment, setDataDepartment] = useState([]);
  const fetchNewValues = (id) => {
    fetch(`${DEPARTMENTS_BY_COUNTRY}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI2MjU5NTgsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6ImExMTZmMzcyLThjMGMtNDA3Ny05MDIyLWQwMTM0NzY0M2FmZSIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.EQy8M5cTIOVavoNuve5R0hNkRCQ1ihAaNP2YhPwgptgC9WMd1pSKAqk54fmvY3cMA2mwxOHi-X9uLahuIoQIS2g-IyrwbfMrQiRYKMxISUORMXKGhYoiU4CNE6murpRw0kb35PRaevJoh27eh4jH-WcHo4kmpdPRFP54LQ2ZopuCTuxZjF0IlKg5OwKxn4KnEXL5DPFDBIhI0ktpppMMcVlsVWwuSizP2uy24Rj4IqoTIq-M6ncleEwR4FAVmvKp0YkmThLwjmAXp5G49uTZPgEjgESmiQcV55Iz6_gxHg1IeK_QX_OCP644qaBlUBQ74Py9S_pCoxn69DzdguQVfA",
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
    } else if (props.countryId === "") {
      setDataDepartment([]);
      values.correspondence_department = "";
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.newValueCountryId, props.countryId]);

  const t = props.t;
  return (
    <div>
      {" "}
      <select
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

export default FieldDepartment;
