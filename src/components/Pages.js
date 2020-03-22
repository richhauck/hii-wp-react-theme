import React, {Component} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
/**
 * Generates List of Page Links
*/
class Pages extends Component{
    
    state = {
        pages: [],
        isLoaded: false
    }
    componentDidMount(){
        axios.get(window.$baseURL+'/wp-json/wp/v2/pages')
        .then(res => this.setState({
            pages: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render(){
        const {pages, isLoaded} = this.state;
        if(!isLoaded){
            return <>Loading</>
        }else{
            return(
                <div id="pages">
                <h2><Link to="/pages">Pages</Link></h2>
                    <ul>
                        {pages.map(page => {
                            if(page.status === 'publish'){
                                return(
                                    <li key={page.ID}><Link to={page.slug}>{page.title.rendered}</Link></li>
                                )
                            }
                        }    
                    )}
                    </ul>
                </div>
            )
        }
    }
}
export default Pages;