import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import  { useState, useEffect } from 'react';

import Login from "./Login";
import Ap from "./App2";
// import C1 from './C1';
import Student from "./Student";
// import { hasAuthenticated } from "./services/AuthApi";
// import Auth from "./contexts/Auth"
// import AuthenticatedRoute from "./services/AuthenticatedRoute";






function App() {
  // const [isAuthenticated,setIsAuthenticated] = useState(hasAuthenticated());
  
  return (
    // <Auth.Provider value={{isAuthenticated,setIsAuthenticated}}>
    //   <Router>

    //     <Switch>
    //     <Route exact path="/login">
    //      <Login/>
    //     </Route>


    //     <Route exact path="/">
    //      <C1/>
    //     </Route>
       
    //     {/* <AuthenticatedRoute  path="/home" component={Home}/> */}
    //     <Route>
    //       <Home/>
    //     </Route>
    //     </Switch>

    //   </Router>
    //   </Auth.Provider>
    <Student/>

  );
}

export default App;
