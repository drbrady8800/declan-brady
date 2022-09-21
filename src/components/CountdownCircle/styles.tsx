import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    stroke-dashoffset: 0;
  }
`;

export const Circle = styled.circle<{animationDuration: string, animationDelay?: string, color: string}>`
  fill: rgba(0,0,0,0);
  stroke: ${(props) => props.color};
  stroke-linecap: round;
  stroke-width: 10;
  stroke-dashoffset: 500;
  animation: ${rotate} ${(props) => props.animationDuration} linear infinite;
`;

export const LabelText = styled.text`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.main};
  fill: ${(props) => props.theme.colors.black};
  &.dark {
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const NumberText = styled.text`
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.main};
  fill: ${(props) => props.theme.colors.black};
  &.dark {
    fill: ${(props) => props.theme.colors.white};
  }
`;