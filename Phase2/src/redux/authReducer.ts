import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
} from "./authType";
 
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};
 
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: null
      };
 
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: null
      };
 
    case AUTH_ERROR:
      return { ...state, error: action.payload };
 
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null
      };
 
    default:
      return state;
  }
};
 
export default authReducer;