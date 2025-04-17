// src/pages/Home.jsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        📚 Flashcard Quiz
      </Typography>
      <Typography variant="h6" gutterBottom>
        Welcome to your personal flashcard quiz app!
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
        <Button component={Link} to="/login" variant="contained">
          Login
        </Button>
        <Button component={Link} to="/signup" variant="outlined">
          Sign Up
        </Button>
      </Stack>
    </Container>
  );
}
