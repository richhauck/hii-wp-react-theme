import React, {Component} from 'react'
import Layout from './Layout'
import axios from 'axios';
import {Link} from "react-router-dom";
class Page extends Component{
    state = {
        data: {},
        isLoaded: false
    }
    loadData(slug){
        axios.get(window.$baseURL+'/wp-json/wp/v2/pages/?slug=' + slug)
        .then(res => this.setState({
            data: res.data,
            isLoaded: true,
        }))
        .catch(err => console.log(err));
    }
    componentDidMount(){
        const { slug } = this.props.match.params;
        this.loadData(slug);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.loadData(nextProps.location.pathname);
        };
    }
    render(){
        const {data, isLoaded} = this.state;
        if(!isLoaded){
            return <Layout>Loading</Layout>
        }else{
            const pageData = data[0];

            return(
                <Layout pageTitle={pageData.title.rendered}>
                    <h1>{pageData.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html:pageData.content.rendered}}></div>
                </Layout>
            )
        }
    }
}
export default Page;