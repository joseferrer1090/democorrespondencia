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
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI0Nzg5NDEsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6IjE5Mjg3MTBiLTFhNjYtNDY4OC05NTlhLWY0ZWI5MzYxZDk4MiIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.ZnVTgEi3ou9_TXkRVUZEjMBfarDvWYlAi52N5aV8nZTUxVwEkH5rWzqF7QFLxfRn2H1VxQxAwcrRqd5R2w9RFPhsx8hNqJUqPZOSnCY6Ut3CTzmdKYcZT29Y-Q8uPXDsPOA9r4UL5fT43OUI08_NYx624r-98JvmVQmMrneFF2vq_AyLGSuiuUn-8tnEzBOouDtGEKC86B3rCLEn6p9ulMZ6Q4qiPBpLien3eO3xQgNQ7l9XrRJ0Bnvg76XV_6ql3SrVDytGZWGqM03KBo8LPA8Nr4cO7oaOJ1x-azbG0vN752OABsTDVIObFslDPX1QsCrPYf87gpFnUfZQye1dlw",
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
