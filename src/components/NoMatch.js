import React from 'react'
import {useLocation} from "react-router-dom";
import Layout from './Layout'
/**
 * 404 Page
*/
export default function NoMatch(){
    const location = useLocation();
    return(
        <Layout pageTitle="Page Not Found">
            <h1>Page not found</h1>
            <h3>No match for <code>{location.pathname}</code></h3>
        </Layout>)
}