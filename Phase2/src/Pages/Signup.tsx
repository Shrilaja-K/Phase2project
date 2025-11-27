import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authAction";
import type { RootState } from "../redux/rootReducer";

const Signup: React.FC = () => {
  const dispatch = useDispatch();
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
    </div>
  );
};

export default Signup;