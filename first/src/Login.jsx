import React, { useState, useEffect , useContext} from 'react';
import Auth from "./contexts/Auth";
import { login } from "./services/AuthApi";
import axios from "axios";
import * as resetStyles from 'react-style-reset';
import { useLocation } from 'react-router-dom';




 
// import "./css/login.css";
import { useHistory } from 'react-router-dom';
import sec from './images/Webinar-pana.svg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


function Login() {
  // const location = useLocation();

  // useEffect(() => {
  //   resetStyles();
  // }, [location]);
  


  const histr = useHistory(); 
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  // const { isAuthenticated, setIsAuthenticated } = useContext(Auth);


  // useEffect(()=>{
  //   if (isAuthenticated){
  //     histr.push("/home");
  //   }
  // },[histr,isAuthenticated]);

  useEffect(()=> {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = "/css/login.css";
    document.head.appendChild(link1);
    return () => {
      document.head.removeChild(link1);
    } 
  },[]);

  const data = {
    name: 'John',
    email: 'john@example.com',
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleModeChange = () => {
    setIsSignUp(!isSignUp);
  };
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    let user={};

    axios.get("http://localhost:4000/login", { params: { username: username, password: password } })
    .then(response => {
      // if(response.data.fullname!=="no"){
        user=response.data;
         if (user.fullname !== "no" ) {
          setError("");
          histr.push("/home")
        } 
         else {
          setError("Invalid username or password.");
        }

      // }
    })
    .catch(error => {
      console.error(error);
    });


    if (isLoading) return;
    setIsLoading(true);
    try {
      if (username === "" || password === "") {
        setError("Please enter both username and password.");
      }
      //  else if (user.fullname !== "no" ) {
      //   setError("");
      //   histr.push("/home")
      // } 
      //  else {
      //   setError("Invalid username or password.");
      // }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className={`container bdy ${isSignUp ? 'sign-up-mode' : ''}`}   >

      <div className="forms-container">
        <div className="signin-signup">
          <form  className="sign-in-form" onSubmit={handleLoginSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="user" />
              <input className='inpt' type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="user" />
              <input   className='inpt' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="error-message error-txt">{error}</p>}
            {isLoading && <p>Loading...</p>}
            <FontAwesomeIcon icon={faExclamationCircle} className={`errorr user-iconn ${error ? "show" : ""}`} />
            <input   type="submit" value="Login" className="btn solid inpt" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>SOAR</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
          </div>
          <img src={sec} className="image" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Login;