import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import  { useState, useEffect } from 'react';
import ProtectedRoute from './ProtectedRoute';



import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import HomePage from './HomePage';
import Student from "./Student";
import Courses from "./Courses";
import SideBar from "./SideBar";
import Exam from "./Exam";
import Pass from "./Pass";

// import { hasAuthenticated } from "./services/AuthApi";
// import Auth from "./contexts/Auth"
// import AuthenticatedRoute from "./services/AuthenticatedRoute";






function App() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  

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
    
    <Router>
      <Switch>
         <Route exact path={"/"} component={HomePage} />


        <Route exact path={"/login"}>
        <Login onLogin={handleLogin}/>
        </Route>

        <ProtectedRoute
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
        />

        <Route exact path={"/signup"} component={SignUp} />
        {/* <Route exact path={"/home"} component={Home} /> */}
        <Route exact path={"/students"} component={Student} />
        <Route exact path={"/courses"} component={Courses} />
        <Route exact path={"/exams"} component={Exam} />
        <Route exact path={"/pass"} component={Pass} />
      </Switch>
    
    </Router>
  );
}

export default App;
