import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import {
  agregarUsuarioOriginal,
  borrarUsuarioDiponible,
} from "../../../../../../../../actions/step1ActionsReceiver";
const UserListEnabled = (props) => {
  const aux = useSelector((state) => state.step1ReducerReceiver.assigned);
  const dispatch = useDispatch();
  const users = props.data;
  const t = props.t;
  const [state, setstate] = useState(aux);

  useEffect(() => {
    if (users.users.length === 0) {
      setstate(null);
    } else if (props.aux === null) {
      setstate(null);
    }
  }, [state, users, props.aux]);

  return (
    <div className="col-md-12">
      {state === true ? (
        <Alert color="success" fade={true}>
          Usuario asignado para recibir original.
        </Alert>
      ) : state === false ? (
        <Alert color="danger" fade={true}>
          Se deshabilito el usuario para recibir original.
        </Alert>
      ) : null}
      <div className="card">
        <div className="p-2 mb-1 bg-light text-dark">
          Destinatarios asignados
        </div>
        <div className="card-body">
          <div>
            <div className="row">
              <div className="col-md-12">
                {Object.keys(users.users).length === 0 ? (
                  <span className="text-center">
                    <i className="fa fa-info-circle" />{" "}
                    <b>
                      No hay usuarios asignados a este tipo documental de
                      radicación.
                    </b>{" "}
                  </span>
                ) : (
                  <table className="table table-bordered table-sm">
                    <thead className="thead-light">
                      <tr className="text-center">
                        <th scope="col">Usuario</th>
                        <th scope="col">Original</th>
                        <th scope="col">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {users.users.map((aux, id) => {
                        return (
                          <tr>
                            <td scope="row">{aux.name}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => {
                                  dispatch(agregarUsuarioOriginal(aux.id));
                                  setstate(true);
                                  if (state === true || state === false) {
                                    setstate(null);
                                    setTimeout(() => {
                                      setstate(true);
                                    }, 300);
                                  }
                                }}
                              >
                                Asignar original
                              </button>
                            </td>
                            <td>
                              {" "}
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => {
                                  dispatch(borrarUsuarioDiponible(aux.id));
                                  setstate(false);
                                  if (state === true || state === false) {
                                    setstate(null);
                                    setTimeout(() => {
                                      setstate(false);
                                    }, 300);
                                  }
                                }}
                              >
                                <i className="fa fa-trash" />
                              </button>{" "}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserListEnabled;
