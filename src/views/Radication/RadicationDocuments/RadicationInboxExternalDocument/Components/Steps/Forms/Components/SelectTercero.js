import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Alert } from "reactstrap";
import PropTypes from "prop-types";
import { THIRDPARTIES_BY_IDENTIFICATION } from "../../../../../../../../services/EndPoints";
import { agregarTerceroDisponible } from "../../../../../../../../actions/step1ActionsThirdParty";

const ThirdParty = (props) => {
  let id = props.id;
  let valueInput = props.valueInput;

  const [IdThirdParty, setIdThirdParty] = useState(null);
  const [NameThirdParty, setNameThirdParty] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [alertAsignacion, setAlertAsignacion] = useState(false);
  const dispatch = useDispatch();
  const AgregarTercero = (user) => dispatch(agregarTerceroDisponible(user));

  const fetchNewValues = (id) => {
    const auth = props.authorization;
    fetch(`${THIRDPARTIES_BY_IDENTIFICATION}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setIdThirdParty(data.id);
          setNameThirdParty(data.name);
        }, 300);
        setAlertAsignacion(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setIdThirdParty(null);
        setNameThirdParty(null);
        setAlertAsignacion(false);
      });
  };

  const validateValues = () => {
    if (id !== null) {
      fetchNewValues(id);
    } else {
      setAlertAsignacion(false);
      setIdThirdParty(null);
      setNameThirdParty(null);
    }
  };

  useEffect(() => {
    if (valueInput === "") {
      setAlertAsignacion(false);
      setIdThirdParty(null);
      setNameThirdParty(null);
      valueInput = null;
      id = null;
    } else {
      validateValues();
    }
  }, [props.id, valueInput]);

  const spinnerAsignacion = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 500);
  };
  const alertAsignacionTercero = () => {
    if (alertAsignacion === true) {
      setAlertAsignacion(false);
      setTimeout(() => {
        setAlertAsignacion(true);
      }, 300);
    } else {
      setAlertAsignacion(true);
    }
  };
  return (
    <div>
      <Alert className={"text-center"} isOpen={alertAsignacion} color="success">
        {" "}
        Se asigno a {NameThirdParty} como tercero.
      </Alert>
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
                  onClick={() => {
                    AgregarTercero(IdThirdParty);
                    spinnerAsignacion();
                    alertAsignacionTercero();
                  }}
                  disabled={spinner}
                >
                  {spinner ? (
                    <i className=" fa fa-spinner fa-refresh" />
                  ) : (
                    <div>
                      <h6 className="badge badge-secondary">Seleccionar</h6>
                    </div>
                  )}
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

ThirdParty.propTypes = {
  authorization: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
};
export default ThirdParty;
