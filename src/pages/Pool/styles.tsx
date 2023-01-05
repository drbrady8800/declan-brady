import styled from "styled-components";
import GeorgiaLogoURL from "../../assets/GeorgiaLogo.png";
import TCULogoURL from "../../assets/TCULogo.png";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  
`; 

export const GeorgiaLogo = styled.div`
  background-image: url(${GeorgiaLogoURL});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`; 

export const NumberInput = styled.input`
  font-size: ${({theme}) => theme.fontSize.xSmall};
  font-family: ${({theme}) => theme.fontFamily.main};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  height: 30px;
  color: ${({theme}) => theme.colors.navy};
  border-radius: ${({theme}) => theme.borderRadius.small};
  border: none;
  ::placeholder {
    color: ${({theme}) => theme.colors.navy};
    font-weight: ${({theme}) => theme.fontWeight.regular};
  }
`;

export const TCULogo = styled.div`
  background-image: url(${TCULogoURL});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100%;
`;

export const StyledInputButton = styled.input`
  color: ${({theme}) => theme.colors.navy};
  background-color: ${({theme}) => theme.colors.cyan};
  font-size: 1.5rem;
  font-family: ${({theme}) => theme.fontFamily.main};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  width: fit-content;
  border: none;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
`; 