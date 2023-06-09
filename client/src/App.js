import './App.css';
import {Switch,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import AdminNavbar  from './admincomp/AdminNavbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Uhome from './user/Uhome';
import Profile from './user/Profile';
import Enterudata from './user/Enterudata'

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/index" component={AdminNavbar} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/uhome/:id" component={Uhome} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/enterudata/:id" component={Enterudata} />
    </Switch>
    
    
    
    </>
  );
}

export default App;
