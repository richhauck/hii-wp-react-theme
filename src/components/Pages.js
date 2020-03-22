import React, {Component} from 'react'
import axios from 'axios';
/**
 * Generates navigation based on Primary Nav defined in WP admin
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
        console.log('pages', pages)
        if(!isLoaded){
            return <>Loading</>
        }else{
            return(
                <>
                    <h1>Pages</h1>
                    <ul>
                        {pages.map(page => {
                            if(page.status === 'publish'){
                                return(
                                    <li key={page.ID}><a href={page.slug}>{page.title.rendered} ({page.date})</a></li>
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
export default Pages;