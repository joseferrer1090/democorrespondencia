import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_BY_DEPENDENCE } from "../../../../../../../../services/EndPoints";
import { Button } from "reactstrap";
import { agregarUsuarioDisponible } from "./../../../../../../../../actions/step1Actions";

const UserList = (props) => {
  // const t = props.t;
  let id = props.id;
  const [data, setdata] = useState([]);
  const firstUpdate = useRef(true);

  const dispatch = useDispatch();
  const AgregarUsuario = (user) => dispatch(agregarUsuarioDisponible(user));

  const fetchNewValues = (id) => {
    fetch(`${USERS_BY_DEPENDENCE}${id}`, {
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
        setdata(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setdata([]);
      });
  };

  const validateValues = () => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchNewValues(id);
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
        {data.length > 0 ? (
          data.map((aux, id) => {
            return (
              <ul className="list-unstyled">
                <li className="media">
                  <img
                    className="mr-2"
                    src="https://via.placeholder.com/40"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <p className="mt-0 mb-1">{aux.name}</p>
                    <Button
                      style={{ marginTop: "-13px", marginLeft: "-12px" }}
                      color={"link"}
                      onClick={() =>
                        AgregarUsuario({ id: aux.id, name: aux.name })
                      }
                    >
                      <h6 className="badge badge-secondary">Agregar</h6>
                    </Button>
                  </div>
                </li>
              </ul>
            );
          })
        ) : (
          <span>
            <i className="fa fa-info-circle" /> Usuarios disponibles de la
            consulta
          </span>
        )}
      </div>
    </div>
  );
};
export default UserList;
