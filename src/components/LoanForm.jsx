import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { requestLoan } from "../api/loanApi";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { toast } from "react-toastify"; 

const LoanForm = () => {
  const { user } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setAmount(value);
  };

  const handleTermChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || parseInt(amount) <= 0) {
      toast.error("El monto debe ser un número entero positivo."); 
      return;
    }

    if (!term || isNaN(term) || parseInt(term) <= 0) {
      toast.error("El plazo debe ser un número entero positivo."); 
      return;
    }

    requestLoan(user.email, parseInt(amount), parseInt(term));
    toast.success("Solicitud de préstamo enviada correctamente."); 
    setAmount("");
    setTerm("");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Solicitar Préstamo</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Monto"
            value={amount}
            onChange={handleAmountChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} 
          />
          <TextField
            fullWidth
            label="Plazo (meses)"
            value={term}
            onChange={handleTermChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} 
            sx={{ mt: 2 }}
          />
          <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            SOLICITAR
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoanForm;
