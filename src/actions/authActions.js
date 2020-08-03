import {
  OBTENER_DATA_USER,
  OBTENER_DATA_USER_EXITO,
  OBTENER_DATA_USER_ERROR,
} from "./../types/index";
import { USER_SEARCH_BY_USERNAME } from "../services/EndPoints";

export const getUserid = (name) => {
  return (dispathch) => {
    const auth = localStorage.getItem("auth_token");
    fetch(`${USER_SEARCH_BY_USERNAME}?username=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispathch(userId(data.id));
        console.log(data.id);
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };
};

export const getUser = () => {
  return (dispatch, getState) => {
    const { id } = getState().authReducer;
    // Fetch para mostrar la informacion del usuario
  };
};

const setUser = () => ({
  type: OBTENER_DATA_USER_EXITO,
});

const userId = (id) => ({
  type: OBTENER_DATA_USER,
  payload: id,
});
