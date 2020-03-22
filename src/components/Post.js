import React, {Component} from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
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
            return <>Loading</>
        }else{
            const postData = data[0];
            return(
                <div id="post">
                    <h1>{postData.title.rendered}</h1>
                    <p>{postData.date}</p>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html:postData.content.rendered}}></div>
                </div>
            )
        }
    }
}
export default Post;