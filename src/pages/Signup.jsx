// src/pages/Signup.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Container, TextField, Button, Typography, Stack } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
          <Button variant="contained" type="submit">Create Account</Button>
          <Link to="/login">Already have an account? Login</Link>
        </Stack>
      </form>
    </Container>
  );
}
