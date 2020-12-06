import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Score from './Components/Score';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/Quiz">
              <Quiz />
            </Route>
            <Route path="/Score">
              <Score />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
