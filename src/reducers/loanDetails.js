const initialState = {
    loanAmount: 10000,
    loanTerm: 24
};

const loanDetails = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LOAN_DETAILS':
            const { loanAmount, loanTerm } = action.payload;
            return {loanAmount, loanTerm};
        case 'UPDATE_LOAN_AMOUNT':
            return {...state, loanAmount: action.payload};
        case 'UPDATE_LOAN_TERM':
            return {...state, loanTerm: action.payload};
        default:
            return state;
    }
};

export default loanDetails;
