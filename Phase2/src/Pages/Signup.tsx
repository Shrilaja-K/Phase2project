import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authAction";
import type { RootState } from "../redux/rootReducer";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "../redux/authAction";
import { GoogleLogin } from "@react-oauth/google";
import type {User} from '../redux/Auth'
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  const authError = useSelector((state: RootState) => state.auth.error);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      signupUser({
        name: form.name,
        email: form.email,
        password: form.password,
      }) as any
    );
  };
   const handleGoogle = (res: any) => {
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
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />

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
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>

      {authError && <p style={{ color: "red" }}>{authError}</p>}

       <Box >
                <GoogleLogin
                  onSuccess={handleGoogle}
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

export default Signup;