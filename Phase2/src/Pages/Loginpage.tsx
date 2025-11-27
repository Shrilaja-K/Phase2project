import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authAction";
import type { RootState } from "../redux/rootReducer";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "../redux/authAction";
import { Box } from "@mui/material";
import type {User} from '../redux/Auth'


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  const authError = useSelector((state: RootState) => state.auth.error);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(loginUser(form.email, form.password) as any);
  };

  const handleGoogleSuccess = (res: any) => {
    const token = res.credential;
    const decoded: DecodedToken = jwtDecode(token);

    const user: User = {
      username: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      id: decoded.sub,  
    }

    dispatch(loginSuccess(user,token));
    Navigate("/");
  };

  return (
    <div style={{ width: "300px", margin: "auto", paddingTop: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br/><br />

        <button type="submit">Login</button>
      </form>

      {authError && <p style={{ color: "red" }}>{authError}</p>}
      <button onClick={()=> Navigate('/signup')}>Sign up</button>
       <Box >
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  width="100%"
                  theme="outline"
                  size="large"
                  type="standard"
                  shape="rectangular"
                  
                />
              </Box>

    </div>
  );
};

export default Login;