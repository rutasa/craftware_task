export const updateLoanDetails = (loanAmount, loanTerm) => ({
    type: 'UPDATE_LOAN_DETAILS',
    payload: {loanAmount, loanTerm}
});
