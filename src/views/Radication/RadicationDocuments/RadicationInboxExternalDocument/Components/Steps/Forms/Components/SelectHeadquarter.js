import React, { useEffect, useState, useRef } from "react";
import { HEADQUARTER_BY_COMPANY } from "../../../../../../../../services/EndPoints";

const FieldHeadquarter = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataHeadquarter, setDataHeadquarter] = useState([]);
  const fetchNewValues = (id) => {
    fetch(`${HEADQUARTER_BY_COMPANY}${id}`, {
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
  const t = props.t;
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
export default FieldHeadquarter;