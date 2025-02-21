export const loanReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOANS":
      return action.payload;
    case "UPDATE_STATUS":
      return state.map(loan =>
        loan.id === action.payload.id ? { ...loan, status: action.payload.status } : loan
      );
    default:
      return state;
  }
};
