import React, { useState, useEffect} from 'react';
import './css/loginStyle.css';
// import { useHistory } from 'react-router-dom';
import sec from './images/Webinar-pana.svg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


function Login() {
  const data = {
    name: 'John',
    email: 'john@example.com',
  };
  const [isSignUp, setIsSignUp] = useState(false);
  // const history = useHistory(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleModeChange = () => {
    setIsSignUp(!isSignUp);
  };
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      // const user = await api.get("/login?email="+username+"&password="+password);
      if (username === "" || password === "") {
        setError("Please enter both username and password.");
      }
       else if (username === "dd" || password === "dd") {
        setError("");
        console.log("correct!!");
        // props.onLogin();
      } 
       else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`} >
    {/* <div className='container sign-up-mode'> */}

      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleLoginSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="user" />
              <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="user" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="error-message error-txt">{error}</p>}
            {isLoading && <p>Loading...</p>}
            <FontAwesomeIcon icon={faExclamationCircle} className={`errorr user-iconn ${error ? "show" : ""}`} />
            <input type="submit" value="Login" className="btn solid" />
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