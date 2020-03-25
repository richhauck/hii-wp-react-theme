import React, {Component} from 'react'
import Layout from './Layout';
import axios from 'axios';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
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
            return <Layout pageMeta={{title: "pages"}}>Loading</Layout>
        }else{
            return(
                <Layout pageMeta={{title: "pages"}}>
                <Helmet title="Pages" />
                <h1>Pages</h1>
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
                </Layout>
            )
        }
    }
}
export default Pages;