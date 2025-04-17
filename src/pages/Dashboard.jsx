// src/pages/Dashboard.jsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="h6">Welcome, {currentUser.email}</Typography>
      <Stack mt={4}>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Stack>
    </Container>
  );
}
