import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Weather from './components/Weather';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Valves from './components/Valves';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/valves" component={Valves} />
            <Route path="/weather" component={Weather} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
      </div>
    </Router>
    //  <h1>Smart Garden</h1>
  );
}

export default App;
