import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`; 

export const StyledButton = styled.button`
  color: ${({theme}) => theme.colors.navy};
  background-color: ${({theme}) => theme.colors.cyan};
  font-size: 1.5rem;
  font-family: ${({theme}) => theme.fontFamily.main};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  width: fit-content;
  border: none;
`;