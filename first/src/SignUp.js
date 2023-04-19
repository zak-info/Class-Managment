import React, { useState, useEffect , useContext} from 'react';
import axios from "axios";
import * as resetStyles from 'react-style-reset';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





 
// import "./css/login.css";
import { useHistory } from 'react-router-dom';
import sec from './images/Webinar-pana.svg';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {  faMars } from '@fortawesome/free-solid-svg-icons';
import {  faSchool } from '@fortawesome/free-solid-svg-icons';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';










const SignUp = () => {


  const histr = useHistory();  
  useEffect(()=> {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = "/css/login.css";
    document.head.appendChild(link1);
    return () => {
      document.head.removeChild(link1);
    } 
  },[]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullname, setFullname] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
  const [est, setEst] = useState("");
  const [level, setLevel] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleModeChange = () => {
    setIsSignUp(!isSignUp);
  };
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    axios.get("http://localhost:4000/create", { params: {_id:fullname+password, fullname:fullname,birthDay:birthDay,gender:gender,est:est,level:level,address:address,mobile:mobile,password:password} })
    .then(response => {
        if(response.data.inserted=="yes"){
            histr.push("/login");
        }else{
            setError("حاول مجددا");
        }
    })
    .catch(error => {
        setError("حاول مجددا")  ;
      });


    // if (isLoading) return;
    // setIsLoading(true);
    // try {
    //   if (fullname === "" || password === "") {
    //     setError("Please enter both fullname and password.");
    //   }
    //   //  else if (user.fullname !== "no" ) {
    //   //   setError("");
    //   //   histr.push("/home")
    //   // } 
    //   //  else {
    //   //   setError("Invalid fullname or password.");
    //   // }
    // } catch (error) {
    //   console.error(error);
    //   setError("An error occurred. Please try again later.");
    // }
    // setIsLoading(false);
  };

    return ( 
        <div className={`container bdy ${isSignUp ? 'sign-up-mode' : ''}`}   >

        <div className="forms-container">
          <div className="signin-signup">
            <form  className="sign-in-form" onSubmit={handleLoginSubmit}>
              <h2 className="title" style={{fontFamily: 'Tajawal,sans-serif'}}>انشاا حساب </h2>
              <div className="input-field">
              {/* onChange={(e) => setfullname(e.target.value)} */}
              <FontAwesomeIcon icon={faUser} className="user" />
                <input className='inpt' type="text" style={{fontFamily: 'Tajawal,sans-serif'}} placeholder="الاسم الكامل" value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </div>


              <div className="input-field">
                    <FontAwesomeIcon icon={faClock} className="user" />

                    <DatePicker selected={birthDay} onChange={date => setBirthDay(date)} dateFormat="yyyy:MM:dd"  showPopperArrow={false} shouldCloseOnSelect={true} className="inpt" placeholder="تاريخ الازدياد"/>
              </div>

             

              <div className="input-field">
                <FontAwesomeIcon icon={faMars} className="user" />
                    <select className="inpt" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} style={{fontFamily: 'Tajawal,sans-serif',border:"none",color:"#acacac"}}   >
                        <option value="" >جنس</option>
                        <option value="male">ذكر</option>
                        <option value="female">انثي</option>
                    </select>
            </div>


              <div className="input-field">
              <FontAwesomeIcon icon={faSchool} className="user" />
                <input className='inpt' type="text" style={{fontFamily: 'Tajawal,sans-serif'}} placeholder="الموسسة" value={est} onChange={(e) => setEst(e.target.value)}  />
              </div>

              <div className="input-field">
              <FontAwesomeIcon icon={faLevelUpAlt} className="user" />
                    <select className="inpt" name="department" value={level} onChange={(e) => setLevel(e.target.value)} style={{fontFamily: 'Tajawal,sans-serif',border:"none",color:"#acacac"}} >
                        <option value="">المستوا</option>
                        <option value="1">السنة الاولي</option>
                        <option value="2">السنة الثانية</option>
                        <option value="3">السنة الثالثة</option>
                        <option value="4">السنة الرابعة</option>
                        
                    </select>
            </div>

              <div className="input-field">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="user" />
                <input className='inpt' type="text" style={{fontFamily: 'Tajawal,sans-serif'}} placeholder="العنوان" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>


              <div className="input-field">
                <FontAwesomeIcon icon={faMobileAlt} className="user" />
                <input className='inpt' type="text" style={{fontFamily: 'Tajawal,sans-serif'}} placeholder="رقم الهاتف" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
              </div>


              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="user" />
                <input   className='inpt' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
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
              <h3>الخبير</h3>
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
 
export default SignUp;