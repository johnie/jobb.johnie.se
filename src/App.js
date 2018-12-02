import React from 'react';
import { Head, Router, withSiteData } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './app.css';

const App = withSiteData(({ title, description }) => (
    <Router>
        <div className="content">
            <Head
                titleTemplate={`${title} - %s`}
                defaultTitle={`${title} - ${description}`}
            />
            <Routes />
        </div>
    </Router>
));

export default hot(module)(App);
