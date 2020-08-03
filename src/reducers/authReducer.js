/*
    user:{
        identification: "", 
        name: "", 
        birthDate: "", 
        phone: "", 
        address: "", 
        email: "", 
        username: ""
     },
     userlogged: {
        sede: "", 
        dependencia: "", 
        cargo: "", 
        rol: "", 
        permisos: ""
     }
     userpassword: {
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
