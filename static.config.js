import React, { Component } from 'react';
import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
    siteRoot: 'https://jobb.johnie.se',
    getSiteData: () => ({
        title: 'Johnie Hjelm',
        description:
            'Söker nu en person till mitt härliga team av personliga assistenter!'
    }),
    getRoutes: async () => {
        const { home } = await jdown('content');
        return [
            {
                path: '/',
                component: 'src/containers/Home',
                getData: () => ({
                    ...home
                })
            },
            {
                path: '/woho',
                component: 'src/containers/Woho',
                getData: () => ({})
            },
            {
                is404: true,
                component: 'src/containers/404'
            }
        ];
    },
    Document: class CustomHtml extends Component {
        render() {
            const { Html, Head, Body, children, renderMeta } = this.props;

            return (
                <Html>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="msapplication-TileColor"
                            content="#ff3465"
                        />
                        <meta name="author" content="Johnie Hjelm" />
                        <meta name="theme-color" content="#ff3465" />
                        <meta property="og:type" content="article" />
                        <meta
                            property="og:title"
                            content="Johnie Hjelm söker personlig assistent"
                        />
                        <meta
                            property="og:image"
                            content = "https://res.cloudinary.com/johnie/image/upload/w_500,ar_1:1,c_fill,g_auto/v1562795831/johnienew.jpg"
                        />
                        <meta
                            property="og:url"
                            content="https://jobb.johnie.se/"
                        />
                        <meta
                            property="og:site_name"
                            content="Johnie Hjelm söker personlig assistent"
                        />
                        <meta
                            property="og:description"
                            content="En driven webbutvecklare som nu söker en person till mitt härliga team av personliga assistenter!"
                        />
                        <meta name="twitter:site" content="@johniehjelm" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        <meta
                            name="description"
                            content="En driven webbutvecklare som nu söker en person till mitt härliga team av personliga assistenter!"
                        />
                        {renderMeta.styleTags}
                        <script
                            async
                            src="https://www.google-analytics.com/analytics.js"
                        />
                    </Head>
                    <Body>{children}</Body>
                </Html>
            );
        }
    }
};
