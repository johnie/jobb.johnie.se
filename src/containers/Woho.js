import React from 'react';
import { Head, withRouteData } from 'react-static';
import format from 'date-fns/format';
import seLocale from 'date-fns/locale/sv';
//

const woho = data => {
    if (typeof document !== 'undefined') {
        const params = ({ history }) =>
            new URLSearchParams(history.location.search);

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

        return (
            <div className="woho-wrap">
                <Head title="Wohooo!" />
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
            </div>
        );
    }

    return <div className="woho-wrap">Heelo</div>;
};

export default withRouteData(woho);
