import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
} from "./authType";

import type { AuthState } from "./Auth";
import type { AuthAction } from "./authAction";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export default function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}