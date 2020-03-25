import React from "react";
import PrimaryNav from './PrimaryNav';
import {Helmet} from "react-helmet";

export default ({ pageMeta, children }) => (

<main>

    <Helmet>
        <html lang="en" />
        <body className={pageMeta.pageClass ? pageMeta.pageClass : ''}/>    
        <title>{`${pageMeta.title} | My Website`}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="" />
        <meta name="description" content={pageMeta.description ? pageMeta.description : ''} />  
        <meta name="keywords" content={pageMeta.keywords ? pageMeta.keywords.join(',') : ''} />
    </Helmet>


{pageMeta[0]}

    <header>
        <PrimaryNav/>
    </header>

    <div id="content">
        {children}
    </div>

    <footer>&copy; {`${new Date().getFullYear()}`}</footer>
</main>
)