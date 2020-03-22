import React, {Component} from 'react'
import Posts from './Posts';
import Pages from './Pages';
class Home extends Component{
    render(){
        return (
            <>
                <h1>Home</h1>
                <Pages/>
                <Posts/>
            </>
        )
    }
}
export default Home;