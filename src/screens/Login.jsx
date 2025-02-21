import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, } from "@mui/material";
import { toast } from "react-toastify"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = signIn(email, password);
    if (user) {
      toast.success(`Bienvenido, ${user.email}!`); 
      navigate(user.role === "admin" ? "/admin" : "/user");
    } else {
      toast.error("Credenciales incorrectas"); 
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8 }}>
        <Typography variant="h5">Iniciar Sesión</Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 3, width: "100%" }}>
          <TextField fullWidth margin="normal" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth margin="normal" label="Contraseña" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
