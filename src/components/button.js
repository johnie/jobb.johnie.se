import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.a`
	background-color: transparent;
	color: ${props => props.color};
	padding: 0 2em;
	line-height: 2.5;
	border: 2px solid #000;
	color: #000;
	font-weight: 900;
	border-radius: 100px;
	position: relative;
	font-size: 1.2rem;
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
		top: 0.25em;
		left: 0.25em;
		border-radius: 100px;
		background-color: ${props => props.bg};
		z-index: -1;

		&::before {
			position: absolute;
			content: '';
			background-image: url(/assets/images/sm-dot-pattern.svg);
			height: 100%;
			width: 100px;
			top: 0;
			left: 0;
			-webkit-background-size: 50% 50%;
			background-size: 50%;
			background-repeat: repeat-y;
			background-position: 0;
			-webkit-filter: invert(1);
			filter: invert(1);
		}
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
	bg: 'var(--secondary-color)',
	color: 'black'
};

export default Button;
