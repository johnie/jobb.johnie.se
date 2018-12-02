import React from 'react';
import { withRouteData } from 'react-static';
import pupa from 'pupa';
import differenceInYears from 'date-fns/difference_in_years';
import convert from 'htmr';
import Button from '../components/button';
//

const greet = () => {
	const hours = new Date().getHours();
	if (hours >= 12) {
		return hours > 17 ? 'God kväll' : 'God eftermiddag';
	}

	return 'Hallå där';
};

const getAge = differenceInYears(new Date(), new Date(1992, 4, 8));

export default withRouteData(data => {
	const title = pupa(data.title.contents, { greeting: greet() });
	const body = pupa(data.body.contents, { getAge });
	return (
		<React.Fragment>
			<header className="page-title">{convert(title)}</header>
			<main className="main-content">
				{convert(body)}
				<div className="contact-wrap">
					<Button text="Maila mig" href="mailto:jobb@johnie.se" />
					<span className="sep">eller</span>
					<Button
						bg="var(--third-color)"
						color="white"
						text="Boka in mig i kalendern"
						href="https://calendly.com/johniehjelm/jobb/30min"
					/>
				</div>
			</main>
		</React.Fragment>
	);
});
