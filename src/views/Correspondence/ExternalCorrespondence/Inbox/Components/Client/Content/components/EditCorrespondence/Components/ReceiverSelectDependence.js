import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { DEPENDENCIES_BY_HEADQUARTER } from "../../../../../../../../../../services/EndPoints";


const ReceiverFieldDependence = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataDependence, setDataDependece] = useState([]);
  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${DEPENDENCIES_BY_HEADQUARTER}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataDependece(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setDataDependece([]);
      });
  };

  const validateValues = () => {
    if (
      PREValueConglomerate !== props.conglomerateId ||
      PREValueCompany !== props.companyId
    ) {
      setDataDependece([]);
    }
    if (PREValue !== props.sedeId) {
      setDataDependece([]);
      values.correspondence_dependence_receiver = "";
      fetchNewValues(props.sedeId);
    }
  };

  useEffect(() => {
    validateValues();
  }, [props.sedeId, props.companyId, props.conglomerateId]);

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

  const PREValue = usePrevious(props.sedeId);
  const PREValueConglomerate = usePrevious(props.conglomerateId);
  const PREValueCompany = usePrevious(props.companyId);
  return (
    <div>
      {" "}
      <select
        onChange={(e) =>
          setFieldValue("correspondence_dependence_receiver", e.target.value)
        }
        onBlur={(e) =>
          setFieldTouched("correspondence_dependence_receiver", true)
        }
        className={`form-control form-control-sm ${
          errors.correspondence_dependence_receiver &&
          touched.correspondence_dependence_receiver &&
          "is-invalid"
        }`}
      >
        <option value={""}>-- Seleccione --</option>
        {dataDependence === []
          ? null
          : dataDependence.map((aux, id) => {
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
ReceiverFieldDependence.propTypes = {
  authorization: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired,
  conglomerateId: PropTypes.string.isRequired,
  sedeId: PropTypes.string.isRequired,
};
export default ReceiverFieldDependence;
