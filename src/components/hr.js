import React from 'react';
import styled from 'styled-components';

const HrWrap = styled.div`
	width: ${props => props.width};
	height: auto;

	svg {
		fill: ${props => props.color};
	}
`;

const Hr = props => (
	<HrWrap {...props}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.33 18.36">
			<g>
				<path d="M108.33,15.67a1.05,1.05,0,0,1-.75-.31l-8-8-8,8a1.06,1.06,0,0,1-1.49,0l-8-8-8,8a1.06,1.06,0,0,1-1.49,0l-8-8-8,8a1.06,1.06,0,0,1-1.49,0l-8-8-8,8a1.06,1.06,0,0,1-1.49,0l-8-8-8,8a1.06,1.06,0,0,1-1.49,0l-8-8-8,8a1.06,1.06,0,0,1-1.49-1.49L11,5.09a1.06,1.06,0,0,1,1.49,0l8,8,8-8a1.05,1.05,0,0,1,1.49,0l8,8,8-8a1.06,1.06,0,0,1,1.49,0l8,8,8-8a1.06,1.06,0,0,1,1.49,0l8,8,8-8a1.06,1.06,0,0,1,1.49,0l8,8,8-8a1.05,1.05,0,0,1,1.49,0l8.78,8.78a1.06,1.06,0,0,1-.75,1.8Z" />
			</g>
		</svg>
	</HrWrap>
);

Hr.defaultProps = {
	width: '100px',
	color: 'var(--secondary-color)'
};

export default Hr;
