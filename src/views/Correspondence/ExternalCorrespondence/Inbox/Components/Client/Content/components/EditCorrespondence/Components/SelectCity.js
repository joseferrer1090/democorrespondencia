import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { CITIES_BY_DEPARTMENT } from "../../../../../../../../../../services/EndPoints";

const FieldCity = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataCity, setDataCity] = useState([]);
  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${CITIES_BY_DEPARTMENT}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
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
      if (PREValue !== "") {
        values.correspondence_city = "";
      }
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
  return (
    <div>
      {" "}
      <select
        value={values.correspondence_city}
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

FieldCity.propTypes = {
  authorization: PropTypes.string.isRequired,
  oldValueCountryId: PropTypes.string.isRequired,
  newValueCountryId: PropTypes.string.isRequired,
  departmentId: PropTypes.string.isRequired,
};
export default FieldCity;
