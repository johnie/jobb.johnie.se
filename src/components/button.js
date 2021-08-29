import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.a`
    background-color: transparent;
    color: ${props => props.color};
    padding: 0 2em;
    line-height: 2.5;
    border: 4px solid #ff3465;
    color: #ff3465;
    font-weight: 900;
    border-radius: 100px;
    position: relative;
    font-size: 1.8rem;
    text-shadow: -4px -2px ${props => props.bg};

    &::before {
        display: none;
    }

    &:hover,
    &:focus {
        top: -4px;
    }

    .btn-bg {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 100px;
        background-color: ${props => props.bg};
        z-index: -1;
    }

    .btn-text {
        color: ${props => props.color};
    }
`;

const Button = ({ bg, color, href, text }) => (
    <ButtonWrap bg={bg} color={color} href={href}>
        <span className="btn-bg" />
        <span className="btn-text">{text}</span>
    </ButtonWrap>
);

Button.defaultProps = {
    bg: 'transparent',
    color: '#ff3465'
};

export default Button;
