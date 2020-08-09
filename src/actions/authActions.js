import {
  OBTENER_DATA_USER,
  OBTENER_DATA_USER_EXITO,
  OBTENER_DATA_USER_ERROR,
  CAMBIAR_PASSWORD_USER,
  CAMBIAR_PASSWORD_USER_EXITO,
  CAMBIAR_PASSWORD_USER_ERROR,
} from "./../types/index";
import {
  USER_SEARCH_BY_USERNAME,
  USER_SHOW_INFORMATION,
  USER_UPDATE_PROFILE_PASSWORD,
} from "../services/EndPoints";
import { decode } from "jsonwebtoken";
import Cookie from "js-cookie";

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

export function ChangePasswordAction({ oldpassword, newpassword }) {
  return (dispatch) => {
    const token = localStorage.getItem("auth_token");
    const username = decode(token);
    dispatch(changepass());
    fetch(`${USER_UPDATE_PROFILE_PASSWORD}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        userNameAuthenticate: `${username.user_name}`,
        passwordOld: oldpassword,
        passwordNew: newpassword,
        passwordConfirm: newpassword,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(changepassSuccess(response.ok));
          setTimeout(() => {
            Cookie.remove("auth");
            localStorage.removeItem("auth_token");
            window.location.replace("/");
          }, 4000);
          console.log(response);
        } else if (response.status === 400) {
          console.log(response);
        } else if (response.status === 500) {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
    // console.log(
    //   `Valores => oldpassword: ${oldpassword}, newpassword: ${newpassword}`
    // );
  };
}

const changepass = () => ({
  type: CAMBIAR_PASSWORD_USER,
});

const changepassSuccess = (resp) => ({
  type: CAMBIAR_PASSWORD_USER_EXITO,
  payload: resp,
});

const changepassError = (resp) => ({
  type: CAMBIAR_PASSWORD_USER_ERROR,
  payload: resp,
});
