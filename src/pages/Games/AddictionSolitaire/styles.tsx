import styled from 'styled-components';

export const GameWrapper = styled.div`
  background: ${({theme}) => theme.colors.marineBlue};
  display: flex;
  width: 80rem;
  height: 40rem;
  border-radius: ${({theme}) => theme.borderRadius.large};
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;