import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4">Bienvenido a Loan Management</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Sistema para gestionar solicitudes de préstamos.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
