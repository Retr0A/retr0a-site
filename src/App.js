import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="current-page">
        <Switch className="navbar-switch">
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/products' exact component={Products} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
