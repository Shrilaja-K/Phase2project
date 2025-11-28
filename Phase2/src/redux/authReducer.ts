import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
} from "./authType";
 import type {AuthAction}  from "./authAction";
 import type { AuthState } from "./Auth";

const initialState = {
  user: null,
  token:null,
  isAuthenticated: false,
  error: null,
};
 
const authReducer = (state = initialState, action:AuthAction) :AuthState => {
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
        token:action.payload.token ?? null,
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