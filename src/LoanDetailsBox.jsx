import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateLoanAmount, updateLoanTerm } from "./actions";
import * as arrowIcon from './assets/arrow.png';

function LoanDetailsBox({
  loanAmount,
  loanTerm,
  updateLoanAmount,
  updateLoanTerm
}) {

  function handleChangeLoanAmount(event) {
      updateLoanAmount(Number(event.target.value));
  }

  function handleChangeLoanTerm(event) {
    updateLoanTerm(Number(event.target.value));
  }

  return (
    <Container>
      <LoanDetailsHeader>Loan details</LoanDetailsHeader>
      <Divider />
      <DropdownContainer>
        <Dropdown>
          <Label htmlFor="loanAmount">Loan Amount</Label>
          <CustomSelect id="loanAmount" onChange={handleChangeLoanAmount}>
            <option
              value="10000"
              selected={loanAmount === 10000}
            >{`$${10000}`}</option>
            <option
              value="20000"
              selected={loanAmount === 20000}
            >{`$${20000}`}</option>
            <option
              value="30000"
              selected={loanAmount === 30000}
            >{`$${30000}`}</option>
            <option
              value="40000"
              selected={loanAmount === 40000}
            >{`$${40000}`}</option>
            <option
              value="50000"
              selected={loanAmount === 50000}
            >{`$${50000}`}</option>
            <option
              value="60000"
              selected={loanAmount === 60000}
            >{`$${60000}`}</option>
            <option
              value="70000"
              selected={loanAmount === 70000}
            >{`$${70000}`}</option>
            <option
              value="80000"
              selected={loanAmount === 80000}
            >{`$${80000}`}</option>
            <option
              value="90000"
              selected={loanAmount === 90000}
            >{`$${90000}`}</option>
            <option
              value="100000"
              selected={loanAmount === 100000}
            >{`$${100000}`}</option>
          </CustomSelect>
        </Dropdown>
        <Spacer/>
        <Dropdown>
          <Label htmlFor="loanTerm">Loan Term</Label>
          <CustomSelect id="loanTerm" onChange={handleChangeLoanTerm}>
            {loanAmount < 60000 && (
              <option value="12" selected={loanTerm === 12}>
                12 months
              </option>
            )}
            {loanAmount < 60000 && (
              <option value="18" selected={loanTerm === 18}>
                18 months
              </option>
            )}
            <option value="24" selected={loanTerm === 24}>
              24 months
            </option>
            <option value="36" selected={loanTerm === 36}>
              36 months
            </option>
          </CustomSelect>
        </Dropdown>
      </DropdownContainer>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Container>
  );
}

const mapStateToProps = state => ({
  loanAmount: state.loanDetails.loanAmount,
  loanTerm: state.loanDetails.loanTerm
});

const mapDispatchToProps = dispatch => ({
  updateLoanAmount: loanAmount => dispatch(updateLoanAmount(loanAmount)),
  updateLoanTerm: loanTerm => dispatch(updateLoanTerm(loanTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoanDetailsBox);

const Container = styled.div`
  background-color: #111f3b;
  padding: 20px 10px;
  color: #ffffff;
  width: 400px;
  border-radius: 1rem;
`;

const LoanDetailsHeader = styled.h5`
  font-weight: 600;
  font-size: 1rem;
`;

const Divider = styled.hr`
  background-color: #676f7e;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Spacer = styled.div`
  width: 20px;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomSelect = styled.select`
  appearance: none; 
  background-image: url(${arrowIcon}); 
  background-repeat: no-repeat;
  background-position: right;
  width: 180px;
  padding: 5px;
  font-weight: 600;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const Text = styled.p`
  font-size: 0.7rem;
  margin-top: 10px;
`;
