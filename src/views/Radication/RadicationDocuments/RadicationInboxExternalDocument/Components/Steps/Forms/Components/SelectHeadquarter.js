import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { HEADQUARTER_BY_COMPANY } from "../../../../../../../../services/EndPoints";

const FieldHeadquarter = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataHeadquarter, setDataHeadquarter] = useState([]);
  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${HEADQUARTER_BY_COMPANY}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataHeadquarter(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setDataHeadquarter([]);
      });
  };

  const validateValues = () => {
    if (PREValueConglomerate !== props.conglomerateId) {
      setDataHeadquarter([]);
    }
    if (PREValue !== props.companyId) {
      setDataHeadquarter([]);
      values.correspondence_headquarter = "";
      fetchNewValues(props.companyId);
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.companyId, props.conglomerateId]);

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

  const PREValue = usePrevious(props.companyId);
  const PREValueConglomerate = usePrevious(props.conglomerateId);
  return (
    <div>
      {" "}
      <select
        onChange={(e) =>
          setFieldValue("correspondence_headquarter", e.target.value)
        }
        onBlur={(e) => setFieldTouched("correspondence_headquarter", true)}
        className={`form-control form-control-sm ${
          errors.correspondence_headquarter &&
          touched.correspondence_headquarter &&
          "is-invalid"
        }`}
      >
        <option value={""}>-- Seleccione --</option>
        {dataHeadquarter === []
          ? null
          : dataHeadquarter.map((aux, id) => {
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

FieldHeadquarter.propTypes = {
  authorization: PropTypes.string.isRequired,
  conglomerateId: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired,
};
export default FieldHeadquarter;
