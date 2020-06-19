import React, { useEffect, useState, useRef } from "react";
import { CITIES_BY_DEPARTMENT } from "../../../../../../../../services/EndPoints";

const FieldCity = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataCity, setDataCity] = useState([]);
  const fetchNewValues = (id) => {
    fetch(`${CITIES_BY_DEPARTMENT}${id}`, {
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
        setDataCity(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setDataCity([]);
      });
  };

  const validateValues = () => {
    if (props.oldValueCountryId !== props.newValueCountryId) {
      setDataCity([]);
    }
    if (PREValue !== props.departmentId) {
      setDataCity([]);
      values.correspondence_city = "";
      fetchNewValues(props.departmentId);
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.departmentId, props.oldValueCountryId, props.newValueCountryId]);

  const usePrevious = (value) => {
    let valueRef;
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    if (ref.current !== undefined) {
      valueRef = ref.current;
    } else {
      valueRef = "";
    }
    return valueRef;
  };

  const PREValue = usePrevious(props.departmentId);
  const t = props.t;
  return (
    <div>
      {" "}
      <select
        onChange={(e) => setFieldValue("correspondence_city", e.target.value)}
        onBlur={(e) => setFieldTouched("correspondence_city", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_city &&
          touched.correspondence_city &&
          "is-invalid"
        }`}
      >
        <option value={""}>-- Seleccione --</option>
        {dataCity === []
          ? null
          : dataCity.map((aux, id) => {
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
export default FieldCity;
