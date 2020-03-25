import React, {Component} from 'react'
import Layout from './Layout'
import Posts from './Posts'
import Pages from './Pages'
class Home extends Component{
    render(){
        return (
            <Layout pageMeta={{
                title: "Home",
                keywords: ["home", "page"],
                description: "description goes here",
                pageClass: "home"
              }}>
                <h1>Home</h1>
            </Layout>
        )
    }
}
export default Home;