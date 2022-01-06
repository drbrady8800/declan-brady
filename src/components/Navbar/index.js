import React from 'react';
import { Nav, NavMenu, IconLink } from './NavbarElements';
import {
    HamburgerButton,
    HamburgerWrapper,
    HamburgerLine,
    OverlayWrapper,
    Overlay,
    Menu,
    MenuWrapper,
    MenuItem,
    MenuLink
} from './HamburgerMenu';
import { LinkedInIcon, GithubIcon } from '../icons/icons';


const Navbar = () => {
return (
	<>
	<Nav>
        <NavMenu>
            <HamburgerButton type="checkbox" />
            <HamburgerWrapper className="hamburger-icon">
                <HamburgerLine/>
            </HamburgerWrapper>
            <OverlayWrapper className="overlay-wrapper">
                <Overlay>
                    <MenuWrapper>
                        <Menu>
                            <MenuItem><MenuLink href="/">Home</MenuLink></MenuItem>
                            <MenuItem><MenuLink href="/about-me">About Me</MenuLink></MenuItem>
                            <MenuItem><MenuLink href="/projects">Projects</MenuLink></MenuItem>
                            <MenuItem><MenuLink href="/contact">Contact</MenuLink></MenuItem>
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