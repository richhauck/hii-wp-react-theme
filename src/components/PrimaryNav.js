import React, {Component} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

/**
 * Generates navigation based on Primary Nav defined in WP admin
*/
class PrimaryNav extends Component{
    
    state = {
        links: [],
        isLoaded: false
    }
    componentDidMount(){
        // relies on custom rest_api_init in functions.php
        axios.get(window.$baseURL+'/wp-json/nav/menu')
        .then(res => this.setState({
            links: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render(){
        const {links, isLoaded} = this.state;
        if(!isLoaded){
            return <nav>Loading</nav>
        }else{
            return(
                <nav>
                    <strong>Primary Nav</strong> 
                    <Link to="/">Home</Link> | <Link to="/pages">Pages</Link> | <Link to="/posts">Posts</Link>
                    <ul>
                        {links.map(link => {
                            if(link.post_parent == 0){
                                console.log('slug: ', link.slug)
                                return(
                                    <li key={link.ID}><Link to={'/'+link.slug}>{link.title}</Link></li>
                                )
                            }
                        }    
                        )}
                    </ul>
                </nav>
            )
        }
    }
}
export default PrimaryNav;