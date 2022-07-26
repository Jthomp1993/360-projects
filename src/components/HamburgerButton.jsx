import { useState, useContext } from 'react';
import styled, { css } from "styled-components";
import MainContext from '../context/MainContext';

const transition = '0.65s';

const Wrapper = styled.button`
    position: relative;
    width: var(--button-width);
    height: var(--button-height);
    border: 0;
    background: transparent;
    outline: none;
    cursor: pointer;

`;

const sharedAll = css`
    position: absolute;
    background: ${({ color }) => color || '#fff' };
    border-radius: var(--border-radius);
    transition: transform ${transition};

`;

const sharedSmallRectangles = css`
    width: var(--rectangle-width);
    height: var(--rectangle-height);
`;

const TopRectangle = styled.span`
    ${sharedAll};
    ${sharedSmallRectangles};
    ${({ isOpen }) => 
    isOpen
    ? 'transform: translate(var(--translate)) rotate(45deg);'
    : 'transform: translate(0, 0) rotate(0);'};
    top: 0;
    left: 0;
    transform-origin: 0% 0%;
`;

const MiddleRectangle = styled.span`
    ${sharedAll};
    top: 50%;
    left: 0;
    width: var(--button-width);
    height: var(--rectangle-height);
    transform: translateY(-50%)
        rotate(${({ isOpen }) => 
        (isOpen ? '-45deg' : '0')});
`;

const BottomRectangle = styled.span`
    ${sharedAll};
    ${sharedSmallRectangles};
    ${({ isOpen }) => 
    isOpen
    ? 'transform: translate(calc(-1 * var(--translate))) rotate(45deg);'
    : 'transform: translate(0, 0) roatate(0);'}
    bottom: 0;
    right: 0;
    transform-origin: 100% 100%;
`;

const HamburgerButton = ({ color }) => {
    const { isOpen, setIsOpen } = useContext(MainContext);

    return (
       <Wrapper onClick={() => setIsOpen(!isOpen)}>
            <TopRectangle color={color} isOpen={isOpen} />
            <MiddleRectangle color={color} isOpen={isOpen} />
            <BottomRectangle color={color} isOpen={isOpen} />
       </Wrapper>
    )
}

export default HamburgerButton;
