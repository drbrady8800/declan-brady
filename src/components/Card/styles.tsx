import styled, { keyframes } from "styled-components";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const CardBody = styled.div<{column: number, row: number}>`
  grid-column: ${(props) => props.column + 1};
  grid-row: ${(props) => props.row + 1};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: all 1s ease;
  aspect-ratio: 5 / 7;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
  &.shake {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
`;

export const CardInfoText = styled.div<{color: string}>`
  font-size: ${(props) => props.theme.fontSize.small};
  line-height: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.color};
`;

export const CardTitle = styled.div<{color: string}>`
  font-size: ${(props) => props.theme.fontSize.large};
  line-height: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.color};
  text-align: center;
`;

export const InfoRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;