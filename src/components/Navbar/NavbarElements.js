import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({theme}) => theme.palette.black};
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: ${({theme}) => theme.palette.lightGray};
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: ${({theme}) => theme.palette.midGray};
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const IconLink = styled.a`
    cursor: pointer;
    margin: 1rem;
    display: flex;
    align-items: center;
`;
