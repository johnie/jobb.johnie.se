import React from 'react';
import { withRouteData } from 'react-static';
import differenceInYears from 'date-fns/difference_in_years';
import convert from 'htmr';
import Button from '../components/button';
//

const pupa = (template, data) => {
    if (typeof template !== 'string') {
        throw new TypeError(
            `Expected a string in the first argument, got ${typeof template}`
        );
    }

    if (typeof data !== 'object') {
        throw new TypeError(
            `Expected an Object/Array in the second argument, got ${typeof data}`
        );
    }

    const regex = /{(.*?)}/g;

    return template.replace(regex, (_, key) => {
        let ret = data;

        // eslint-disable-next-line
        for (const prop of key.split('.')) {
            ret = ret ? ret[prop] : '';
        }

        return ret || '';
    });
};

const greet = () => {
    const hours = new Date().getHours();
    if (hours >= 12) {
        return hours > 17 ? 'God kväll' : 'God eftermiddag';
    }

    return 'Hallå där';
};

const getAge = differenceInYears(new Date(), new Date(1992, 4, 8));

class Home extends React.Component {
    state = {
        muted: true
    };

    constructor() {
        super();
        this.toggleMute = this.toggleMute.bind(this);
    }

    toggleMute() {
        this.setState(({ muted }) => ({ muted: !muted }));
    }

    render() {
        if (typeof document !== 'undefined') {
            const title = pupa(this.props.title.contents, {
                greeting: greet()
            });
            const body = pupa(this.props.body.contents, { getAge });
            return (
                <React.Fragment>
                    <header className="page-title">{convert(title)}</header>
                    <div className="video-wrapper" onClick={this.toggleMute}>
                        <video autoPlay loop muted={this.state.muted}>
                            <source
                                src="https://res.cloudinary.com/johnie/video/upload/v1549824948/johnie_xp7dhb.webm"
                                type="video/webm"
                            />
                            <source
                                src="https://res.cloudinary.com/johnie/video/upload/v1549824948/johnie_xp7dhb.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div
                            className={`sound-control ${
                                !this.state.muted ? 'off' : ''
                            }`}
                        />
                    </div>
                    <main className="main-content">
                        {convert(body)}
                        <div className="contact-wrap">
                            <Button
                                text="Maila mig"
                                href="mailto:johnie@hjelm.im"
                            />
                        </div>
                    </main>
                </React.Fragment>
            );
        }

        return null;
    }
}

export default withRouteData(Home);
