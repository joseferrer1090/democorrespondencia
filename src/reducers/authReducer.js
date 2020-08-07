/*
    user:{ // => validar USER_SHOW
        identification: "", 
        name: "", 
        birthDate: "", 
        phone: "", 
        address: "", 
        email: "", 
        username: ""
     },
     userlogged: { // => Validar con el endPoint de USER_SHOW
        sede: "", 
        dependencia: "", 
        cargo: "", 
        rol: "", 
        permisos: ""
     }
     userpassword: {  // utilizar el endPoint =>  UPDATE_PROFILE_PASSWORD
        password_current: "", 
        new_password: "", 
        confirm_password: ""
     }
*/

import {
  OBTENER_DATA_USER,
  OBTENER_DATA_USER_EXITO,
  OBTENER_DATA_USER_ERROR,
  CAMBIAR_PASSWORD_USER,
  CAMBIAR_PASSWORD_USER_EXITO,
  CAMBIAR_PASSWORD_USER_ERROR,
} from "./../types";

const initialState = {
  id: "",
  user: {},
  userpassword: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_DATA_USER:
      return {
        ...state,
        id: action.payload,
      };
    case OBTENER_DATA_USER_EXITO:
      return {
        ...state,
        user: { ...action.payload },
      };
    case CAMBIAR_PASSWORD_USER:
      return {
        ...state,
        userpassword: {
          error: null,
          response: null,
        },
      };
    case CAMBIAR_PASSWORD_USER_EXITO:
      return {
        ...state,
        userpassword: {
          error: null,
          response: action.payload,
        },
      };
    case CAMBIAR_PASSWORD_USER_ERROR:
      return {
        ...state,
        userpassword: {
          error: true,
          response: false,
        },
      };
    default:
      return state;
  }
};
