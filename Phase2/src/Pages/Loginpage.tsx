import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authAction";
import type { RootState } from "../redux/rootReducer";
import { useNavigate } from "react-router-dom";

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

    </div>
  );
};

export default Login;