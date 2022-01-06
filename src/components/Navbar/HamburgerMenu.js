import styled from 'styled-components';

export const HamburgerButton = styled.input`
    position: fixed;
    z-index: 2;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    opacity: 0;

    &:checked + .hamburger-icon > div {
        transform: rotate(135deg);
    }

    &:checked + .hamburger-icon > div:before,
    &:checked + .hamburger-icon > div:after {
        top: 0;
        transform: rotate(90deg);
    }

    &:checked:hover + .hamburger-icon > div {
        transform: rotate(225deg);
    }

    &:checked ~ .overlay-wrapper {
        visibility: visible;
    }

    &:checked ~ .overlay-wrapper > div {
        transform: scale(1);
        transition-duration: 0.4s;
    }

    &:checked ~ .overlay-wrapper > div > div {
        opacity: 1;
        transition: opacity 0.4s ease;
    }
`;

export const HamburgerWrapper = styled.div`
    z-index: 1;
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HamburgerLine = styled.div`
    position: relative;
    width: 100%;
    height: 0.1rem;
    background: ${({theme}) => theme.palette.cyan};
    transition: all 0.4s ease;

    &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 10px;
        width: 100%;
        height: 0.1rem;
        background: inherit;
    }

    &::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: -10px;
        width: 100%;
        height: 0.1rem;
        background: inherit;
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
`;

export const Overlay = styled.div`
    background: ${({theme}) => theme.palette.lightGray};
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
`;

export const MenuWrapper = styled.div`
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
`;

export const Menu = styled.ul`
    padding: 0;
`;

export const MenuItem = styled.li`
    list-style: none;
    color: ${({theme}) => theme.palette.black};
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

