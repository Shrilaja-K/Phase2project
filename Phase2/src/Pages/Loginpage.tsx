import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authAction";
import type { RootState } from "../redux/rootReducer";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "../redux/authAction";
import { Box,TextField,Button,Paper,Typography } from "@mui/material";
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
<Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181C14",
        px: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "100%", sm: 400 },
          p: 4,
          borderRadius: 3,
          backgroundColor: "#3C3D37",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          color: "#ECDFCC",
        }}
      >
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: 600 }}>
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            sx={{
              backgroundColor: "#181C14",
              borderRadius: 1,
              input: { color: "#ECDFCC" },
              label: { color: "#ECDFCC" },
            
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            sx={{
              backgroundColor: "#181C14",
              borderRadius: 1,
              input: { color: "#ECDFCC" },
              label: { color: "#ECDFCC" },
              
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#697565",
              color: "#ECDFCC",
              "&:hover": { backgroundColor: "#ECDFCC", color: "#3C3D37" },
              py: 1,
            }}
          >
            Login
          </Button>
        </Box>

        {authError && (
          <Typography color="error" textAlign="center" sx={{ fontWeight: 500 }}>
            {authError}
          </Typography>
        )}

        <Button
          variant="text"
          sx={{ color: "#ECDFCC", mt: 1 }}
          onClick={() => Navigate("/signup")}
        >
          Don't have an account? Sign Up
        </Button>

        <Box sx={{ mt: 2 }}>
          <GoogleLogin
            onSuccess={handleGoogle}
            width="100%"
            theme="outline"
            size="large"
            type="standard"
            shape="rectangular"
          />
        </Box>
      </Paper>
    </Box>

  );
};

export default Login;