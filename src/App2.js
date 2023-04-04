import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Login from "./Login";
// import C1 from './C1';
// import Student from "./Student";
// import Home from "./Home";


function App2() {
  return (
      <Router>
        <Switch>
        {/* <Route exact path="/">
         <C1/>
        </Route> */}
        <Route exact path="/login">
         <Login/>
        </Route>
        {/* <Route exact path="/home">
         <Home/>
        </Route> */}
        </Switch>

      </Router>

  );
}

export default App2;
