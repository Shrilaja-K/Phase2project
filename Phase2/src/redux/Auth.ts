export interface User {
  id:string;
  name: string;
  email: string;
  password?: string;
  picture?:string;
  provider?:'local'|'google'
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  token:string | null;
}

export interface SignupPayload {
  user: User;
}

export interface LoginPayload {
  user: User;
  token : string;
}