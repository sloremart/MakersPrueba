
import LoanList from "../components/LoanList";
import { Container, Typography } from "@mui/material";

const AdminDashboard = () => {
;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4">Panel de Administrador</Typography>

      <LoanList />
    </Container>
  );
};

export default AdminDashboard;
