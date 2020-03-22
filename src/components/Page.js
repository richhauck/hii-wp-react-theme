import React, {Component} from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
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
            return <>Loading</>
        }else{
            const pageData = data[0];

            return(
                <div id="page">
                    <h1>{pageData.title.rendered}</h1>
                    <p>{pageData.date}</p>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html:pageData.content.rendered}}></div>
                </div>
            )
        }
    }
}
export default Page;