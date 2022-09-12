import styled from 'styled-components';

export const HamburgerLine = styled.div`
  position: relative;
  width: inherit;
  height: 0.125rem;
  top: 50%;
  background-color: ${(props) => props.theme.colors.cyan};
  transition: all 0.4s ease;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem;
    height: 0.125rem;
    right: 0;
    background-color: ${(props) => props.theme.colors.cyan};
    transition: all 0.4s ease;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -0.5rem;
    height: 0.125rem;
    right: 0;
    background-color: ${(props) => props.theme.colors.cyan};
    transition: all 0.4s ease;
  }
`;

export const HamburgerWrapper = styled.div`
  z-index: 100;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  border: none;
  &.open > div {
    transform: rotate(135deg);
  }

  &.open > div:before,
  &.open > div:after {
    top: 0;
    transform: rotate(90deg);
  }
  &.open:hover > div {
    transform: rotate(225deg);
  }
`;

export const IconLink = styled.a`
  cursor: pointer;
  margin: 1rem;
  display: flex;
  align-items: center;
`;
export const Menu = styled.ul`
  padding: 0;
`;

export const MenuItem = styled.li`
  list-style: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  padding: 1rem;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.5);
  }
`;

export const MenuLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
`;

export const MenuWrapper = styled.div`
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
  &.open {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
`;

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.black};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  z-index: 2;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background: ${(props) => props.theme.colors.lightGray};
  opacity: 0.5;
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
  &.open {
    transform: scale(1);
    transition-duration: 0.4s;
  }
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    visibility: visible;
  }
`;