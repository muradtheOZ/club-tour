
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';


function App() {
 
  return (
    <div  style={{backgroundColor: '#06182F'}}>
      <Header> </Header>
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
