import React from 'react';
import { BrowserRouter, Match, Link, Miss } from 'react-router';
import GithubUser from './components/GithubUser';
import Home from './components/Home';
import RouteNotFound from './components/RouteNotFound';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="MainWrapper">
        <ul className="Navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user/bumi">Bumi</Link></li>
          <li><Link to="/user/paulkogel">Paul</Link></li>
        </ul>

        <div className="Content">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/user/:id" component={GithubUser} />
          <Miss component={RouteNotFound} />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
