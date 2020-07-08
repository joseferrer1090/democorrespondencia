import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERS_BY_DEPENDENCE } from "../../../../../../../../services/EndPoints";
import { Button } from "reactstrap";
import { agregarUsuarioDisponible } from "../../../../../../../../actions/step1ActionsReceiver";

const UserList = (props) => {
  // const t = props.t;
  let id = props.id;
  const users = props.data;
  const [data, setdata] = useState([]);
  const firstUpdate = useRef(true);

  const dispatch = useDispatch();
  const AgregarUsuario = (user) => dispatch(agregarUsuarioDisponible(user));

  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${USERS_BY_DEPENDENCE}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      })
      .catch((err) => {
        console.log("Error", err);
        if (users === []) {
          setdata([]);
        } else {
          setdata(users);
        }
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
    console.log(users);
    // console.log(users.length !== 0);
    if (users.length !== 0) {
      setdata(users);
    } else if (users.length === 0) {
      setdata([]);
    }
  }, [id, props.data]);

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
        {/* data !== null*/}
        {Object.keys(data).length !== 0 ? (
          data.map((aux, id) => {
            console.log({ id: aux.id, name: aux.name });
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
