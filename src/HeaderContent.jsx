import React from "react";
import styled from "styled-components";
import * as bikeImage from "./assets/bike.png";
import * as benchImage from "./assets/bench.png";
import * as headerImage from "./assets/header.png";
import Video from "./Video";
import SlidersBox from "./SlidersBox";

export default function HeaderContent(){
    return <>
        <ImageContainer />
        <BikeImage src={bikeImage} />
        <Video/>
        <SlidersBox/>
        <BenchImage src={benchImage} />
        <Bar>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
        </Bar>
    </>
}

const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  background: center no-repeat url(${headerImage});
  background-size: cover;
  
  @media only screen and (max-width: 500px) {
    height: 250px;
  }
`;

const BikeImage = styled.img`
  position: absolute;
  left: 10%;
  height: 100px;
  width: 170px;
  top: 350px;
  @media only screen and (max-width: 500px) {
    top: 150px;
  }
`;

const BenchImage = styled.img`
  position: absolute;
  left: 80%;
  height: 100px;
  width: 120px;
  top: 372px;
  z-index: 10;
  @media only screen and (max-width: 500px) {
    display: none;
  }
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
  @media only screen and (max-width: 500px) {
    top: 250px;
  }
`;
