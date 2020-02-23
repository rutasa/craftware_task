import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateLoanDetails } from "./actions";

function Sliders({ updateLoanDetails }) {
  const [loanAmount, setLoanAmount] = React.useState(1);
  const [loanTerm, setLoanTerm] = React.useState(3);
  const loanTermMapper = {
    1: 12,
    2: 18,
    3: 24,
    4: 36
  };

  function handleChangeLoanAmount(event) {
    setLoanAmount(event.target.value);
    if (loanAmount > 5) {
      setLoanTerm(3);
    }
  }

  function handleChangeLoanTerm(event) {
    setLoanTerm(event.target.value);
  }

  return (
    <SlidersWrapper>
      <Slider>
        <input
          type="range"
          min="1"
          max="10"
          value={loanAmount}
          id="loanRange"
          onChange={handleChangeLoanAmount}
        />
      </Slider>
      <SliderValue>{`$${loanAmount * 10000}`}</SliderValue>
      <Slider>
        <input
          type="range"
          min={loanAmount > 5 ? 3 : 1}
          max="4"
          value={loanTerm}
          id="loanTermRange"
          onChange={handleChangeLoanTerm}
        />
      </Slider>
      <SliderValue>{`${loanTermMapper[loanTerm]} months`}</SliderValue>
      <ButtonWrapper>
        <Button
          type="button"
          className="btn"
          onClick={() =>
            updateLoanDetails(loanAmount * 10000, loanTermMapper[loanTerm])
          }
        >
          Apply now
        </Button>
        <ButtonSideText>Lorem ipsum dolor sit amet</ButtonSideText>
      </ButtonWrapper>
    </SlidersWrapper>
  );
}

const mapDispatchToProps = dispatch => ({
  updateLoanDetails: (loanAmount, loanTerm) =>
    dispatch(updateLoanDetails(loanAmount, loanTerm))
});

export default connect(null, mapDispatchToProps)(Sliders);

const SlidersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Slider = styled.div`
  width: 70%;
`;

const SliderValue = styled.div`
  width: 30%;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 1rem;
  font-weight: 600;
  width: 35%;
  background-color: #f66000;
  border-color: #f66000;
  color: #ffffff;
`;

const ButtonSideText = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding-left: 30px;
`;
