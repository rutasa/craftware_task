import React from 'react';
import styled from 'styled-components';

export default function Sliders(){
    const [loanAmount, setLoanAmount] = React.useState(1);
    const [loanTerm, setLoanTerm] = React.useState(3);
    const loanTermMapper = {
        1: 12,
        2: 18,
        3: 24,
        4: 36
    };

    function handleChangeLoanAmount(event){
        setLoanAmount(event.target.value);
        if (loanAmount > 5) {
            setLoanTerm(3);
        }
    }

    function handleChangeLoanTerm(event){
        setLoanTerm(event.target.value);
    }

    return (<SlidersWrapper>
        <Slider>
            <input type="range" min="1" max="10" value={loanAmount} id="loanRange" onChange={handleChangeLoanAmount}/>
        </Slider>
        <SliderValue>{`$${loanAmount*10000}`}</SliderValue>
        <Slider>
            <input type="range" min={loanAmount > 5 ? 3 : 1} max="4" value={loanTerm} id="loanTermRange" onChange={handleChangeLoanTerm}/>
        </Slider>
        <SliderValue>{`${loanTermMapper[loanTerm]} months`}</SliderValue>
        <ButtonWrapper>
        <Button type="button" className="btn btn-warning">Apply now</Button>
        <ButtonSideText>Lorem ipsum dolor sit amet</ButtonSideText>
        </ButtonWrapper>
    </SlidersWrapper>);
}

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
    background-color: #F66000;
    border-color: #F66000;
    color: #FFFFFF;
`;

const ButtonSideText = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    padding-left: 30px;
`;
