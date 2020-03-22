import React from 'react'
import {useLocation} from "react-router-dom";
/**
 * 404 Page
*/
export default function NoMatch(){
    const location = useLocation();
    return(
        <div>
            <h1>Page not found</h1>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>)
}