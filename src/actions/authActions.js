import {
  OBTENER_DATA_USER,
  OBTENER_DATA_USER_EXITO,
  OBTENER_DATA_USER_ERROR,
} from "./../types/index";
import {
  USER_SEARCH_BY_USERNAME,
  USER_SHOW_INFORMATION,
} from "../services/EndPoints";
import { decode } from "jsonwebtoken";

const getUserid = (name) => {
  return async (dispatch) => {
    const auth = localStorage.getItem("auth_token");
    await fetch(`${USER_SEARCH_BY_USERNAME}?username=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(userId(data.id));
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    const username = decode(localStorage.getItem("auth_token"));
    const token = localStorage.getItem("auth_token");
    await dispatch(getUserid(username.user_name));
    const { id } = getState().authReducer;
    await fetch(
      `${USER_SHOW_INFORMATION}${id}?username=${username.user_name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDataUser(data));
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  };
};

const userId = (id) => ({
  type: OBTENER_DATA_USER,
  payload: id,
});

const setDataUser = (data) => ({
  type: OBTENER_DATA_USER_EXITO,
  payload: data,
});
