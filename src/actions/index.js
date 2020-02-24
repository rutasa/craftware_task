export const updateLoanDetails = (loanAmount, loanTerm) => ({
    type: 'UPDATE_LOAN_DETAILS',
    payload: {loanAmount, loanTerm}
});

export const updateLoanAmount = loanAmount => ({
    type: 'UPDATE_LOAN_AMOUNT',
    payload: loanAmount
});

export const updateLoanTerm = loanTerm => ({
    type: 'UPDATE_LOAN_TERM',
    payload: loanTerm
});

export const updateVideoPlayStatus = status => ({
    type: 'UPDATE_VIDEO_PLAY_STATUS',
    payload: status
});
