import React from "react";
import styled from "styled-components";
import * as headerImage from "./assets/header.png";
import * as bikeImage from "./assets/bike.png";
import * as benchImage from "./assets/bench.png";
import * as questionIcon from "./assets/question.png";
import Sliders from "./Sliders";

export default function App() {
  React.useEffect(() => {
      window.$('[data-toggle="tooltip"]').tooltip();
  });

  return (
    <div>
      <ImageContainer />
      <BikeImage src={bikeImage} />
      <Video width="400" height="270" controls>
        <source src="" type="video/mp4" />
      </Video>
      <SliderContainer>
        <StyledHeaderH4>Lorem ipsum dolor sit amet</StyledHeaderH4>
        <StyledSubheader>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </StyledSubheader>
        <Sliders />
      </SliderContainer>
      <BenchImage src={benchImage} />
      <Bar>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Bar>

      <FormContent>
        <StyledHeaderH4>Lorem ipsum dolor sit amet</StyledHeaderH4>
        <StyledSubheader>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
          <img
            src={questionIcon}
            alt="question icon"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip content"
          />
        </StyledSubheader>
          
      </FormContent>
    </div>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  background: center no-repeat url(${headerImage});
  background-size: cover;
`;

const BikeImage = styled.img`
  position: absolute;
  left: 10%;
  height: 100px;
  width: 170px;
  top: 350px;
`;

const BenchImage = styled.img`
  position: absolute;
  left: 80%;
  height: 100px;
  width: 120px;
  top: 372px;
  z-index: 10;
`;

const Video = styled.video`
  border-radius: 5%;
  position: absolute;
  top: 50px;
  left: 50%;
`;

const SliderContainer = styled.div`
  width: 400px;
  height: 270px;
  background-color: #ffffff;
  border-radius: 5%;
  position: absolute;
  top: 100px;
  left: 25%;
  padding: 20px 10px;
  text-align: center;
`;

const StyledHeaderH4 = styled.h4`
  font-weight: 600;
`;

const StyledSubheader = styled.p`
  font-size: 0.8rem;
`;

const Bar = styled.div`
  background-color: #f3f4be;
  width: 100%;
  position: absolute;
  left: 0;
  top: 450px;
  padding: 20px 10px;
  text-align: center;
  font-size: 0.8rem;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 550px;
  justify-content: center;
  align-items: center;
`;
