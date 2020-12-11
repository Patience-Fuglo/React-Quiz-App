import React, { useState } from 'react';
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
  const [score, setScore] = useState(0);

  return (
    <div className='container'>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/Quiz">
                <Quiz score={score} setScore={setScore}/>
              </Route>
              <Route path="/Score">
                <Score score={score} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>

        <div>
        </div>
      </div>
    </div>

  );
}

export default App;
