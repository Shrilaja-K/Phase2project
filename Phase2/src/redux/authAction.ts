
import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
} from "./authType";

import type { SignupPayload, LoginPayload, User } from "./Auth";

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: SignupPayload;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginPayload;
}

export interface AuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthAction =
  | SignupSuccessAction
  | LoginSuccessAction
  | LogoutAction
  | AuthErrorAction;


export const signupSuccess = (user: User): SignupSuccessAction => ({
  type: SIGNUP_SUCCESS,
  payload: { user },
});

export const loginSuccess = (user: User, token: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const authError = (error: string): AuthErrorAction => ({
  type: AUTH_ERROR,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});


export const signupUser = (userData: User) => {
  return (dispatch) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.some((u: User) => u.email === userData.email);

    if (exists) {
      return dispatch(authError("User already exists"));
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    dispatch(signupSuccess(userData));
  };
};

export const loginUser = (email: string, password: string) => {
  return (dispatch) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (!found) {
      return dispatch(authError("Invalid email or password"));
    }

    dispatch(loginSuccess(found,'local'));
  };
};