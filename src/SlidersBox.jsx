import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Sliders from "./Sliders";
import { updateVideoPlayStatus } from "./actions";

function SlidersBox({ updateVideoStatus }) {
  function handleClick() {
    updateVideoStatus(false);
  }

  return (
    <SliderContainer onClick={handleClick}>
      <StyledHeaderH4>Lorem ipsum dolor sit amet</StyledHeaderH4>
      <StyledSubheader>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </StyledSubheader>
      <Sliders />
    </SliderContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  updateVideoStatus: status => dispatch(updateVideoPlayStatus(status))
});

export default connect(null, mapDispatchToProps)(SlidersBox);

const SliderContainer = styled.div`
  width: 400px;
  height: 270px;
  background-color: #ffffff;
  border-radius: 1rem;
  position: absolute;
  top: 100px;
  left: 25%;
  padding: 20px 10px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledHeaderH4 = styled.h4`
  font-weight: 600;
`;

const StyledSubheader = styled.p`
  font-size: 0.8rem;
`;
