import React, {Component} from 'react'
import axios from 'axios';
/**
 * Generates navigation based on Primary Nav defined in WP admin
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
                <>
                    <h1>Posts</h1>
                    <ul>
                        {posts.map(post => {
                            if(post.status === 'publish'){
                                const link = 'posts/' + post.slug;
                                return(
                                    <li key={post.ID}><a href={link}>{post.title.rendered} ({post.date})</a></li>
                                )
                            }
                        }    
                    )}
                    </ul>
                </>
            )
        }
    }
}
export default Posts;