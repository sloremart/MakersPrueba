export const getLoans = () => {
    return JSON.parse(localStorage.getItem("loans")) || [];
  };
  
  export const requestLoan = (email, amount, term) => {
    const loans = getLoans();
    const newLoan = {
      id: Date.now(),
      email,
      amount,
      term,
      status: "Pendiente",
    };
    localStorage.setItem("loans", JSON.stringify([...loans, newLoan]));
    return newLoan;
  };
  
  export const updateLoanStatus = (id, status) => {
    const loans = getLoans().map(loan =>
      loan.id === id ? { ...loan, status } : loan
    );
    localStorage.setItem("loans", JSON.stringify(loans));
  };
  