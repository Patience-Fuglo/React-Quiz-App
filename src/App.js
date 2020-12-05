import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Score from "./Components/Score";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
         <Route path="/Home">
           <Home />
         </Route>
         <Route path="/Quiz">
           <Quiz>
           </Quiz>
         </Route>
         <Route path="/Score">
           <Score>
           </Score>
         </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
