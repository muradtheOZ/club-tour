
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';


function App() {
  

  return (
    <div>
    <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
