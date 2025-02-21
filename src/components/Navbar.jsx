import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(45deg, #8E0E76 0%, #381A73 25%, #1E2E71 50%, #0F4374 75%, #08717A 100%)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
     
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Préstamos
        </Typography>
        </Box>

        {user ? (
          <Box>

            <Button color="inherit" onClick={() => { signOut(); navigate("/login"); }}>
              Cerrar Sesión
            </Button>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
