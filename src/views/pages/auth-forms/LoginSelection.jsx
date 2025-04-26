import { useNavigate } from "react-router-dom";
import { FaUserTie, FaUserShield } from "react-icons/fa/index.js";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function LoginSelection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: 3,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="secondary" sx={{ mb: 3 }}>
          Choisissez votre rôle
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button
              onClick={() => navigate("/login-agent")}
              variant="contained"
              color="primary"
              startIcon={<FaUserTie size={30} />}
              sx={{ width: "200px", height: "60px", fontSize: "1rem" }}
            >
              Agent
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => navigate("/login-admin")}
              variant="contained"
              color="error"
              startIcon={<FaUserShield size={30} />}
              sx={{ width: "200px", height: "60px", fontSize: "1rem" }}
            >
              Admin
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
