import styled from 'styled-components';
import { flash } from "../../../components/Card/styles";

export const BlankSpace = styled.div<{column: number, row: number}>`
  grid-column: ${(props) => props.column + 1};
  grid-row: ${(props) => props.row + 1};
  aspect-ratio: 5 / 7;
  width: 100%;
  border: 0.5rem solid ${({theme}) => theme.colors.navy};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  &.flash {
    animation: ${flash} 0.75s linear;
  }
`;

export const GameWrapper = styled.div`
  background: ${({theme}) => theme.colors.marineBlue};
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 100%;
  max-width: 80rem;
  aspect-ratio: 65 / 28;
  border-radius: ${({theme}) => theme.borderRadius.large};
  align-items: center;
`;