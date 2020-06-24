import React, { useEffect, useState } from "react";
import { COMPANY_BY_CONGLOMERATE } from "../../../../../../../../services/EndPoints";

const ReceiverFieldCompany = ({
  field,
  form: { errors, touched, setFieldTouched, setFieldValue, values },
  ...props
}) => {
  const [dataCompany, setDataCompany] = useState([]);
  const fetchNewValues = (id) => {
    fetch(`${COMPANY_BY_CONGLOMERATE}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjY3VhcnRhcyIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1OTI5NzQ1NTMsImF1dGhvcml0aWVzIjpbIlJPTEVfY29uZ2xvbWVyYXRlcy5zaG93IiwiUk9MRV9jb21wYW55LmRlbGV0ZSIsIlJPTEVfY29uZ2xvbWVyYXRlcy5pbmRleCIsIlJPTEVfY29tcGFueS5zaG93Il0sImp0aSI6ImI0MTQ2ZmVkLTc2OTEtNGE3NC1iZDIxLTgyY2M1YzExYWI4MyIsImVuYWJsZWQiOnRydWUsImNsaWVudF9pZCI6ImZyb250ZW5kYXBwIn0.gsfQL0ZYxKh0xfOqvkoFBXOfP88AWfPxz97pNqV2XGG0z4tIGOpszkqxSTT0HSDTMa72UykhodcSN7VyODPUw3Losa08MNIRlhIpYQoPoVNGVx5ZeGrykpXPG6MesEbFs-IIq4DgxqDXXSVapRPycf_N-3LIy2GTe4YWr_gwJalmmdvxewSh-bYpx2G_kIKVHzLBdzpwsqCCypnOvmjNr6hLeoLxxrH9dXRoW7jkP7f7u2uwEn5AvFbPmHRyKqrzyGaO7RK1-kYrTrY-oaOUxiq9OdZdB4Vo0BAbJFkRngQ7E6Gr-bG5tnF_i7HBEaz84yL8WY-DKrE2bvBJeG7OCg",
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

  const t = props.t;
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

export default ReceiverFieldCompany;
