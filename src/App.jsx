import { Button, Container, Typography } from "@mui/material";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = () => auth.signOut();

  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h3" gutterBottom>
        Flashcard Quiz
      </Typography>
      {user ? (
        <>
          <Typography variant="h6">Welcome, {user.displayName}</Typography>
          <Button variant="contained" color="error" onClick={handleLogout} sx={{ mt: 2 }}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login with Google
        </Button>
      )}
    </Container>
  );
}

export default App;
