import LaunchIcon from 'mdi-react/LaunchIcon'
import * as React from 'react'
import Helmet from 'react-helmet'
import { IconItem } from '../components/IconItem'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'

const pageTitle = 'Get started with Sourcegraph'
const description = 'need description'

export default ((props: any) => (
    <Layout location={props.location}>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="twitter:title" content={pageTitle} />
            <meta property="og:title" content={pageTitle} />
            <meta name="twitter:site" content="@srcgraph" />
            <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="description" content={description} />
        </Helmet>
        <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
        <div className="bg-white text-dark">
            <div className="container-lg py-6 px-5">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="font-weight-bolder display-3 mb-4">{pageTitle}</h1>
                        <h3 className="font-weight-bolder text-sans-serif">Quickstart</h3>
                        <p>Run this to launch Sourcegraph on your local machine:</p>

                        <pre>
                            <code>
                                docker run
                                <br />
                                --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm
                                <br />
                                --volume ~/.sourcegraph/config:/etc/sourcegraph
                                <br />
                                --volume ~/.sourcegraph/data:/var/opt/sourcegraph
                                <br />
                                sourcegraph/server:3.17.0
                            </code>
                        </pre>

                        <h4 className="font-weight-bolder text-sans-serif mb-4">Deploy to a server or cluster</h4>
                        <p>
                            See <a href="https://docs.sourcegraph.com/admin/install">deployment documentation</a> for
                            information about Docker deployments, Kubernetes clusters, and other clusters.
                        </p>
                        <h4 className="font-weight-bolder text-sans-serif mb-2">Want help?</h4>
                        <p>
                            <a href="#" className="button btn btn-outline-primary">
                                Schedule time with a Sourcegraph engineer
                            </a>
                        </p>

                        <p>
                            <a href="https://docs.sourcegraph.com/">
                                Docs <LaunchIcon />
                            </a>
                        </p>

                        <hr className="my-4" />
                        <h4 className="font-weight-bolder text-sans-serif mb-2">Just need to search public code?</h4>
                        <p>
                            Use <a href="https://sourcegraph.com/search">Sourcegraph.com</a>. Tip:{' '}
                            <pre>
                                <code>repo:github.com/my/repo foo.</code>
                            </pre>
                        </p>
                    </div>
                    <div className="col-md-7">
                        <CustomerLogosSection className="py-5" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
