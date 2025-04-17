// src/pages/Dashboard.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <Box p={4}>
      {/* Welcome Section */}
      <Box mb={4} display="flex" alignItems="center" gap={2}>
        <Avatar alt={currentUser?.email} src={currentUser?.photoURL || ""} />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Welcome, {currentUser?.displayName || currentUser?.email}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Here’s a quick overview of your activity.
          </Typography>
        </Box>
      </Box>

      {/* Quick Links */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} md={4}>
          <Card onClick={() => navigate("/flashcards")} sx={{ cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">📚 Flashcard Sets</Typography>
              <Typography variant="body2">Review and edit your flashcards</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card onClick={() => navigate("/quizzes")} sx={{ cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">📝 Quizzes</Typography>
              <Typography variant="body2">Test your knowledge</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card onClick={() => navigate("/progress")} sx={{ cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">📈 Progress</Typography>
              <Typography variant="body2">Track your learning journey</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Create & View Flashcards */}
      <Box mb={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Your Flashcard Sets</Typography>
          <Button variant="contained" onClick={() => navigate("/create-set")}>
            ➕ Create New Set
          </Button>
        </Box>
        {/* Placeholder for flashcard list */}
        <Typography variant="body2" mt={2} color="text.secondary">
          (Flashcard sets will be listed here after creation)
        </Typography>
      </Box>

      {/* Recent Activity / Progress Summary */}
      <Box>
        <Typography variant="h6" mb={1}>📊 Recent Activity</Typography>
        {/* Placeholder for activity feed */}
        <Typography variant="body2" color="text.secondary">
          (Your recent quiz scores and study time will appear here.)
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
