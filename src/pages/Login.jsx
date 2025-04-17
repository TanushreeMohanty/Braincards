import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
          <Button variant="contained" type="submit">Login</Button>
          <Button onClick={handleGoogleLogin} variant="outlined" color="secondary">
  Sign in with Google
</Button>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </Stack>
      </form>
    </Container>
  );
}
