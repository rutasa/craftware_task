import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateLoanAmount, updateLoanTerm } from "./actions";
import * as arrowIcon from "./assets/arrow.png";

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
      <DropdownContainer>
        <Dropdown>
          <Label htmlFor="loanAmount">Loan Amount</Label>
          <CustomSelect
            id="loanAmount"
            value={loanAmount.toString()}
            onChange={handleChangeLoanAmount}
          >
            {[
              10000,
              20000,
              30000,
              40000,
              50000,
              60000,
              70000,
              80000,
              90000,
              100000
            ].map(amount => (
              <option
                value={amount.toString()}
                key={amount}
              >{`$${amount.toLocaleString()}`}</option>
            ))}
          </CustomSelect>
        </Dropdown>
        <Spacer />
        <Dropdown>
          <Label htmlFor="loanTerm">Loan Term</Label>
          <CustomSelect
            id="loanTerm"
            onChange={handleChangeLoanTerm}
            value={loanTerm.toString()}
          >
            {loanAmount < 60000 && <option value="12">12 months</option>}
            {loanAmount < 60000 && <option value="18">18 months</option>}
            <option value="24">24 months</option>
            <option value="36">36 months</option>
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
  padding: 30px 20px;
  color: #ffffff;
  max-width: 400px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoanDetailsHeader = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  border-bottom: 1px solid #676f7e;
  padding-bottom: 20px;
  margin-bottom: 15px;
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
  width: 50%;
`;

const CustomSelect = styled.select`
  appearance: none;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: right;
  max-width: 180px;
  min-width: 120px;
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
