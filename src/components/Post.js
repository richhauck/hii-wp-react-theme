import React, {Component} from 'react'
import Layout from './Layout'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import Moment from "moment"
/**
 * Displays single post
*/
class Post extends Component{
    
    state = {
        data: {},
        isLoaded: false
    }
    componentDidMount(){
        const { slug } = this.props.match.params;
        console.log('slug: ', slug)
        // wordpress.test/wp-json/wp/v2/posts/1153
        // wordpress.test/wp-json/wp/v2/posts?slug=scheduled

        axios.get(window.$baseURL+'/wp-json/wp/v2/posts/?slug=' + slug)
        .then(res => this.setState({
            data: res.data,
            isLoaded: true,
        }))
        .catch(err => console.log(err));

    }
    render(){
        const {data, isLoaded} = this.state;
        if(!isLoaded){
            return <Layout>Loading</Layout>
        }else{
            const postData = data[0];
            const postDate = Moment(postData.date).format('MMMM Do YYYY, h:mm:ss a');
            return(
                <Layout pageTitle={postData.title.rendered}>
                    <h1>{postData.title.rendered}</h1>
                    <p>{postDate}</p>
                    <div dangerouslySetInnerHTML={{__html:postData.content.rendered}}></div>
                </Layout>
            )
        }
    }
}
export default Post;