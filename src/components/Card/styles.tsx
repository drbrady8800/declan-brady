import styled from "styled-components";

export const CardBody = styled.div<{width: string}>`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: transform 0.4s ease;
  aspect-ratio: 5 / 7;
  width: ${(props) => props.width};
  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease;
  }
`;