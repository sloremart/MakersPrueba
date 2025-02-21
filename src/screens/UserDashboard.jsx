import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LoanForm from "../components/LoanForm";
import LoanList from "../components/LoanList";
import { Container, Typography } from "@mui/material";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4">Bienvenido, {user?.email}</Typography>

      {user?.role === "user" && (
        <>
 
          <LoanForm />
        </>
      )}

      <LoanList />
    </Container>
  );
};

export default UserDashboard;
