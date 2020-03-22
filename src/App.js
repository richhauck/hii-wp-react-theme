import React from 'react';
import './App.css';
import PrimaryNav from './components/PrimaryNav';
import Posts from './components/Posts';
import Pages from './components/Pages';

window.$baseURL = 'http://wordpress.test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimaryNav/>
      </header>
      <Posts/>
      <Pages/>
    </div>
  );
}

export default App;
