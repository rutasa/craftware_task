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

  function handleSubmit() {
    updateLoanDetails(loanAmount * 10000, loanTermMapper[loanTerm]);
    window.scrollTo(0, 500);
  }

  return (
    <SlidersWrapper>
      <SliderContainer>
        <Slider
          type="range"
          min="1"
          max="10"
          value={loanAmount}
          id="loanRange"
          onChange={handleChangeLoanAmount}
        />
      </SliderContainer>
      <SliderValue>{`$${(loanAmount * 10000).toLocaleString()}`}</SliderValue>
      <SliderContainer>
        <Slider
          type="range"
          min={loanAmount > 5 ? 3 : 1}
          max="4"
          value={loanTerm}
          id="loanTermRange"
          onChange={handleChangeLoanTerm}
        />
      </SliderContainer>
      <SliderValue>{`${loanTermMapper[loanTerm]} months`}</SliderValue>
      <ButtonWrapper>
        <Button type="button" className="btn" onClick={handleSubmit}>
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

const SliderContainer = styled.div`
  width: 70%;
  margin-bottom: 20px;
`;

const Slider = styled.input`
  appearance: none;
  width: 100%;
  height: 25px;
  border-radius: 15px;
  background: #111f3b;
  outline: none;
  overflow: hidden;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #05b7ab;
    border: 2px solid #ffffff;
    cursor: pointer;
    box-shadow: -200px 0 0 190px #f66000;
  }

  &::-moz-range-progress {
    background-color: #f66000;
  }

  &::-moz-range-track {
    background-color: #111f3b;
  }

  &::-ms-fill-lower {
    background-color: #f66000;
  }

  &::-ms-fill-upper {
    background-color: #111f3b;
  }
`;

const SliderValue = styled.div`
  width: 30%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 1rem;
  font-weight: 600;
  width: 45%;
  background-color: #f66000;
  border-color: #f66000;
  color: #ffffff;
`;

const ButtonSideText = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding-left: 20px;
`;
