import React from "react";
import styled from "styled-components";
import * as checkIcon from "./assets/check.png";
import Tooltip from "./Tooltip";
import LoanDetailsBox from "./LoanDetailsBox";
import YourDetails from "./YourDetailsForm";

export default function MainContent() {
  return (
    <ContentContainer>
      <StyledHeaderH4>Lorem ipsum dolor sit amet</StyledHeaderH4>
      <SubheaderWrapper>
        <StyledSubheader>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
        </StyledSubheader>
        <StyledTooltip content="Tolltip content" />
      </SubheaderWrapper>
      <ChecksContent>
        <CheckItem>
          <CheckIcon src={checkIcon} />
          <StyledSubheader>Lorem ipsum dolor sit amet</StyledSubheader>
        </CheckItem>
        <Spacer />
        <CheckItem>
          <CheckIcon src={checkIcon} />
          <StyledSubheader>Lorem ipsum dolor sit amet</StyledSubheader>
        </CheckItem>
      </ChecksContent>
      <LoanDetailsBox />
      <YourDetails />
    </ContentContainer>
  );
}

const StyledHeaderH4 = styled.h4`
  font-weight: 600;
`;

const StyledSubheader = styled.p`
  font-size: 0.8rem;
  display: inline;
`;

const StyledTooltip = styled(Tooltip)`
  display: inline;
`;

const SubheaderWrapper = styled.div`
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 550px auto 0;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  @media only screen and (max-width: 500px) {
    margin-top: 380px;
  }
`;

const ChecksContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CheckItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Spacer = styled.div`
  width: 30px;
`;
