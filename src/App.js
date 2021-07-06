import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <h1><Home/></h1>
          </Route>
          <Route path="/create">
            <h1><Create/></h1>
          </Route>
          <Route path="/blogs/:id">
            <h1><BlogDetails/></h1>
          </Route>

          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
