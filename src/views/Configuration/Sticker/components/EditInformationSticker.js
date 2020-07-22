import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerSticker } from "./../../../../actions/stickerActions";
import { STICKER_PUT } from "./../../../../services/EndPoints";
import { decode } from "jsonwebtoken";

export const EditInformationSticker = ({ id }) => {
  const code = useRef("");
  const name = useRef("");
  const description = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerSticker(id));
  }, [dispatch, id]);

  const sticker = useSelector((state) => state.stickerReducer.sticker);
  console.log(sticker);
  const updateSticker = (e) => {
    e.preventDefault();
    const auth = localStorage.getItem("auth_token");
    const username = decode(auth);
    fetch(`${STICKER_PUT}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
      body: JSON.stringify({
        id,
        code: code.current.value,
        name: name.current.value,
        description: description.current.value,
        username: username.user_name,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(obtenerSticker(id));
        } else if (response.status === 500) {
          console.log("Error al modificar", response.status);
        } else if (response.status === 400) {
          console.log("Error al enviar los datos", response.status);
        }
      })
      .catch((err) => {
        console.log(`Error, ${err}`);
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <i className="fa fa-sticky-note" />
        Informacion del sticker
      </div>
      <div className="card-body">
        <form className="form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Codigo</label>
                <input
                  name="code"
                  type="text"
                  className="form-control form-control-sm"
                  defaultValue={sticker.code}
                  ref={code}
                />

                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  name="name"
                  type="text"
                  className="form-control form-control-sm"
                  defaultValue={sticker.name}
                  ref={name}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>Descripcion</label>
                <textarea
                  name="description"
                  className="form-control form-control-sm"
                  defaultValue={sticker.description}
                  ref={description}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="text-right">
          <button
            type="submit"
            className="btn btn-secondary btn-sm"
            onClick={(e) => updateSticker(e)}
          >
            <i className="fa fa-pencil" /> Editar informacion
          </button>
        </div>
      </div>
    </div>
  );
};
