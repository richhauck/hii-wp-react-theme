import React from 'react';
import './App.css';
import Home from './components/Home';
import Pages from './components/Pages';
import Page from './components/Page';
import Posts from './components/Posts';
import Post from './components/Post';
import NoMatch from './components/NoMatch';
import {BrowserRouter, Switch, Route} from "react-router-dom";


window.$baseURL = 'http://wordpress.test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/posts/:slug" component={Post}/>
            <Route path="/posts" component={Posts} />
            <Route path="/pages" component={Pages} /> 
            <Route path="/:slug" component={Page}/>
            <Route path="*" component={NoMatch} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
