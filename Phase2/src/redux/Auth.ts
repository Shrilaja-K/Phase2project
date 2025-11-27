export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface SignupPayload {
  user: User;
}

export interface LoginPayload {
  user: User;
}