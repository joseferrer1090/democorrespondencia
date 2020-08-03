/*
    user:{ //B USER_SHOW
        identification: "", 
        name: "", 
        birthDate: "", 
        phone: "", 
        address: "", 
        email: "", 
        username: ""
     },
     userlogged: { // Validar con el endPoint de USER_SHOW
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

const initialState = {
  user: {},
  userlogged: {},
  userpassword: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
