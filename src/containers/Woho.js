import React from 'react';
import { Redirect, withRouteData } from 'react-static';
import format from 'date-fns/format';
import seLocale from 'date-fns/locale/sv';
import styled from 'styled-components';
//

const params = ({ history }) => new URLSearchParams(history.location.search);

const WohoWrap = styled.div`
	background-color: white;
	position: absolute;
	box-sizing: border-box;
	margin: 16px;
	width: 100%;
	max-width: 600px;
	padding: 1.5em;
	border-radius: 1em;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 8px 8px var(--secondary-color);

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: -8px;
		left: -8px;
		box-sizing: border-box;
		border: 2px solid black;
		width: 100%;
		height: 100%;
		border-radius: 1em;
	}

	@media (max-width: 32em) {
		width: 90%;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
	}
`;

const woho = data => {
	const p = params(data);
	const id = p.get('invitee_uuid') || '';
	const name = p.get('invitee_full_name') || '';
	const email = p.get('invitee_email') || '';
	const time = format(
		p.get('event_start_time') || new Date(),
		'dddd DD MMMM YYYY kl. HH:mm',
		{
			locale: seLocale
		}
	);

	if (!data.history.location.search) {
		return <Redirect to="/" />;
	}

	return (
		<WohoWrap>
			<h2>
				Wohooo!{' '}
				<span role="img" aria-label="Woho icon">
					🎉
				</span>
			</h2>
			<p>Tack för din bokning! Jag hör av mig inom kort.</p>
			<strong>ID:</strong> <span>{id}</span>
			<br />
			<strong>Namn:</strong> <span>{name}</span>
			<br />
			<strong>Email:</strong> <span>{email}</span>
			<br />
			<strong>Datum:</strong> <span>{time}</span>
		</WohoWrap>
	);
};

export default withRouteData(woho);
