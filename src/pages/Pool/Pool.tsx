import React, { useEffect, useState, useRef } from "react";
import { findWinner, findWinners, places } from './logic';
import { mountBodyDarkMode, unmountBodyDarkMode } from "../../utils/bodyUtlis";
import { FormWrapper, GeorgiaLogo, InputWrapper, NumberInput, StyledInputButton, StyledButton, TCULogo, Wrapper } from './styles';
  
const Pool = () => {
  const [winners, setWinners] = useState<places>({
    winner: "",
    secondPlace: "",
    lastPlace: "",
  });

  const georgiaRef = useRef<HTMLInputElement>(null);
  const tcuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    mountBodyDarkMode();
    return function cleanup() {
      unmountBodyDarkMode();
    }
  }, []);

  return (
    <Wrapper className="m-auto pt-5">
        <FormWrapper onSubmit={(e) => {
          e.preventDefault();

          setWinners(findWinner(Number(georgiaRef.current?.value), Number(tcuRef.current?.value)));
        }}>
          <InputWrapper className="pb-3 gap-3">
            <NumberInput type="number" ref={georgiaRef} placeholder="Georgia Score"/>
            <GeorgiaLogo/>
            <TCULogo/>
            <NumberInput type="number" ref={tcuRef} placeholder="TCU Score"/>
          </InputWrapper>
          
          <StyledInputButton className="mt-5 px-3 py-2 mx-auto" type="submit" value="Calculate winner"/>
        </FormWrapper>
      
      <div>
        <h1 className="text-center mt-5 text-white">Winner: {winners.winner}</h1>
        <h2 className="text-center text-white">Second: {winners.secondPlace}</h2>
        <h3 className="text-center text-white">Last: {winners.lastPlace}</h3>
      </div>
      <StyledButton className="mt-5 px-3 py-2 mx-auto"onClick={() => window.open("https://docs.google.com/spreadsheets/d/1db61oXXiECoBFEd2OK_Bayl74XR0Z_9rIxQAJQIwDR4/edit?usp=sharing", "_blank")} >See all possibilities</StyledButton>
    </Wrapper>
    
  );
};
  
export default Pool;