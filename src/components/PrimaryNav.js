import React, {Component} from 'react'
import axios from 'axios';
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
                    <ul>
                        {links.map(link => {
                            if(link.post_status === 'publish'){
                                return(
                                    <li key={link.ID}><a href={link.post_name}>{link.title}</a></li>
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