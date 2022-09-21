import React, {useState} from 'react';
import {
  HamburgerLine,
  HamburgerWrapper,
  IconLink,
  Menu,
  MenuItem,
  MenuLink,
  MenuWrapper,
  Nav,
  NavMenu,
  OverlayWrapper,
  Overlay,
} from './styles';
import { LinkedInIcon, GithubIcon } from '../icons/icons';
import { RoutesEnum } from '../../types';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <NavMenu>
          <HamburgerWrapper className={`${isOpen ? "open" : ""}`} onClick={() => {
            setIsOpen(!isOpen);
          }}>
            <HamburgerLine />
          </HamburgerWrapper>
          <OverlayWrapper className={`${isOpen ? "open" : ""}`}>
            <Overlay className={`${isOpen ? "open" : ""}`}>
              <MenuWrapper className={`${isOpen ? "open" : ""}`}>
                <Menu>
                  <MenuItem><MenuLink href={RoutesEnum.HOME}>Home</MenuLink></MenuItem>
                  <MenuItem><MenuLink href={RoutesEnum.ABOUT_ME}>About Me</MenuLink></MenuItem>
                  <MenuItem><MenuLink href={RoutesEnum.PROJECTS}>Projects</MenuLink></MenuItem>
                  <MenuItem><MenuLink href={RoutesEnum.CONTACT}>Contact</MenuLink></MenuItem>
                  <MenuItem><MenuLink href={RoutesEnum.SOLITAIRE}>Addiction Solitaire</MenuLink></MenuItem>
                  <MenuItem><MenuLink href={RoutesEnum.COUNTDOWN}>Class Countdown</MenuLink></MenuItem>
                </Menu>
              </MenuWrapper>
            </Overlay>
          </OverlayWrapper>
        </NavMenu>
        <NavMenu>
          <IconLink href='https://www.linkedin.com/in/declanrbrady/' target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconLink>
          <IconLink href='https://github.com/drbrady8800' target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </IconLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;