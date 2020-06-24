import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { THIRDPARTIES_BY_IDENTIFICATION } from "../../../../../../../../services/EndPoints";
import { Button } from "reactstrap";
import { agregarTerceroDisponible } from "../../../../../../../../actions/step1ActionsThirdParty";

const ThirdParty = (props) => {
  // const t = props.t;
  let id = props.id;
  let valueInput = props.valueInput;

  const [IdThirdParty, setIdThirdParty] = useState(null);
  const [NameThirdParty, setNameThirdParty] = useState(null);
  // const firstUpdate = useRef(true);

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
        {NameThirdParty && IdThirdParty && valueInput !== null ? (
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
                  onClick={() =>
                    AgregarTercero({ id: IdThirdParty, name: NameThirdParty })
                  }
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
