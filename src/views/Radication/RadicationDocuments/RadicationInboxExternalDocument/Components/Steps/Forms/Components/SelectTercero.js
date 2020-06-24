import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THIRDPARTIES_BY_IDENTIFICATION } from "../../../../../../../../services/EndPoints";
import { Button } from "reactstrap";
import { agregarUsuarioDisponible } from "./../../../../../../../../actions/step1Actions";

const ThirdParty = (props) => {
  // const t = props.t;
  let id = props.id;
  const [IdThirdParty, setIdThirdParty] = useState(null);
  const [NameThirdParty, setNameThirdParty] = useState(null);
  // const firstUpdate = useRef(true);

  const dispatch = useDispatch();
  const AgregarUsuario = (user) => dispatch(agregarUsuarioDisponible(user));

  const fetchNewValues = (id) => {
    fetch(`${THIRDPARTIES_BY_IDENTIFICATION}${id}`, {
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
        setIdThirdParty(data.id);
        setNameThirdParty(data.name);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setIdThirdParty(null);
        setNameThirdParty(null);
      });
  };

  const validateValues = () => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false;
    //   return;
    // }
    if (id !== null) {
      console.log("lleva data");
      fetchNewValues(id);
    } else {
      console.log("vacio");
    }
  };

  useEffect(() => {
    validateValues();
    console.log(props.id);
  }, [id]);

  return (
    <div>
      <div
        style={{
          height: "140px",
          overflow: "scroll",
          overflowX: "hidden",
          border: "1px solid #e3e3e3",
          background: "#e3e3e3",
          padding: "10px",
        }}
      >
        {NameThirdParty && IdThirdParty !== null ? (
          <ul className="list-unstyled">
            <li className="media">
              <img
                className="mr-2"
                src="https://via.placeholder.com/40"
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <p className="mt-0 mb-1">{NameThirdParty}</p>
                <Button
                  style={{ marginTop: "-13px", marginLeft: "-12px" }}
                  color={"link"}
                  // onClick={() =>
                  //   AgregarUsuario({ id: aux.id, name: aux.name })
                  // }
                >
                  <h6 className="badge badge-secondary">Agregar</h6>
                </Button>
              </div>
            </li>
          </ul>
        ) : (
          <span>
            <i className="fa fa-info-circle" /> Terceros disponibles
          </span>
        )}
      </div>
    </div>
  );
};
export default ThirdParty;
