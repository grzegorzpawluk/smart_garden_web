import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Weather from './Weather';
import Contact from './Contact';
import { MyContext } from './../context/MyContext';
import Login from './Login';

function Home() {
  const { rootState, isLoggedIn } = useContext(MyContext);
  const { isAuth } = rootState;

  useEffect(() => {
    isLoggedIn(); //async
  }, []);

  console.log(isAuth);
  if (isAuth) {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Weather} />
                <Route path="/weather" component={Weather} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/*" component={Weather} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <>
        <Router>
          <div className="App">
            <Nav />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/*" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default Home;
