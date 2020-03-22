import React, {Component} from 'react'
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
        console.log('posts', posts)
        if(!isLoaded){
            return <>Loading</>
        }else{
            return(
                <div id="posts">
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
                </div>
            )
        }
    }
}
export default Posts;