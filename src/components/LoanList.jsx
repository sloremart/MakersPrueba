import { useEffect, useState, useContext } from "react";
import { getLoans, updateLoanStatus } from "../api/loanApi";
import { AuthContext } from "../context/AuthContext";
import { Container, Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const LoanList = () => {
  const { user } = useContext(AuthContext);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    setLoans(getLoans());
  }, []);

  const handleStatusChange = (id, status) => {
    updateLoanStatus(id, status);
    setLoans(getLoans());
    toast.info(`Préstamo ${status.toUpperCase()}`);
  };

  const columns = [
    { field: "email", headerName: "Email", flex: 1 },
    { field: "amount", headerName: "Monto", flex: 1 },
    { field: "term", headerName: "Plazo (meses)", flex: 1 },
    { field: "status", headerName: "Estado", flex: 1 },
  ];

  if (user?.role === "admin") {
    columns.push({
      field: "actions",
      headerName: "Acciones",
      flex: 1.5,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: "10px", whiteSpace: "nowrap" }}>
          <Button
            onClick={() => handleStatusChange(params.row.id, "aprobado")}
            color="success"
            variant="contained"
            sx={{ minWidth: "100px", fontSize: "12px" }}
          >
            APROBAR
          </Button>
          <Button
            onClick={() => handleStatusChange(params.row.id, "rechazado")}
            color="error"
            variant="contained"
            sx={{ minWidth: "100px", fontSize: "12px" }}
          >
            RECHAZAR
          </Button>
        </Box>
      ),
    });
  }

  return (
    <Container maxWidth={false} sx={{ mt: 5, width: "100%" }}> 
      <Box sx={{ width: "100%" }}> 
        <DataGrid
          rows={loans.map((loan, index) => ({ ...loan, id: loan.id || index }))}
          columns={columns}
          pageSize={5}
          autoHeight
          disableSelectionOnClick
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
            maxHeight: "1000px",
            width: "100%", 
            minWidth: "1000px", 
            overflowX: "auto", 
          }}
        />
      </Box>
    </Container>
  );
};

export default LoanList;
