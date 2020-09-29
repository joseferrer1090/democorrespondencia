import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { USERS_BY_DEPENDENCE } from "../../../../../../../../../../services/EndPoints";
import { agregarUsuarioDisponible } from "../../../../../../../../../../actions/editCorrespondenceExternalReceiver";

const UserList = (props) => {
  let id = props.id;
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

UserList.propTypes = {
  id: PropTypes.string.isRequired,
  authorization: PropTypes.string.isRequired,
};
export default UserList;
