import React from "react";
import PrimaryNav from './PrimaryNav';
import {Helmet} from "react-helmet";

export default ({ pageTitle, children }) => (
<main>
    <Helmet>
        <title>{`${pageTitle} | My Website`}</title>
    </Helmet>

    <header>
        <PrimaryNav/>
    </header>

    <div id="content">
        {children}
    </div>

    <footer>&copy; {`${new Date().getFullYear()}`}</footer>
</main>
)