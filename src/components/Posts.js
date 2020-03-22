import React, {Component} from 'react'
import Layout from './Layout'
import axios from 'axios';
import {Link} from "react-router-dom";

/**
 * Generates List of Post Links
*/
class Posts extends Component{
    
    state = {
        posts: [],
        isLoaded: false
    }
    componentDidMount(){
        axios.get(window.$baseURL+'/wp-json/wp/v2/posts')
        .then(res => this.setState({
            posts: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    render(){
        const {posts, isLoaded} = this.state;
        if(!isLoaded){
            return <Layout>Loading</Layout>
        }else{
            return(
                <Layout pageTitle="Posts">
                    <h2><Link to="/posts">Posts</Link></h2>
                    <ul>
                        {posts.map(post => {
                            if(post.status === 'publish'){
                                const link = 'posts/' + post.slug;
                                return(
                                    <li key={post.ID}><Link to={link}>{post.title.rendered}</Link></li>
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
export default Posts;