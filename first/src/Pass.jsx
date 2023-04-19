import  { useState, useEffect } from 'react';
import SideBar from './SideBar';
import axios from "axios";






const Pass = () => {
    useEffect(()=> {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = "/assets/css/pass.css";
        document.head.appendChild(link1); 
        return () => {
            document.head.removeChild(link1);
        } 
      },[]);

      const [dadQuestions, setDadQuestions] = useState([]);
      const [dadQuestion, setDadQuestion] = useState({});
      const [dadAnswers, setDadAnswers] = useState([]);
      const [dadText, setDadText] = useState("");
      const [dadQuestionText, setDadQuestionText] = useState("");
      const [dadShowText, setDadShowText] = useState("");
      
    useEffect(()=>{
        axios
          .get("http://localhost:4000/getQuestions")
          .then((response) => {
            console.log(response.data);
            setDadQuestions(response.data);
            setDadQuestion(response.data[0]);
            setDadAnswers(response.data[0].answers);
            setDadText(response.data[0].text);
            setDadQuestionText(response.data[0].question);
           
           

            
          })
          .catch((error) => {
            console.log(error);
          });
    },[])

      const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
      };
    
      function handleDragOver(e){
        e.preventDefault();
      }
    
      function handleDrop(e){
        const answerId = e.dataTransfer.getData('text/plain');
        // const selectedAnswer = dadAnswers.find((answer) => answer == answerId);
        // if (selectedAnswer) {
        //     setAnswer(selectedAnswer.text);
        //     console.log(selectedAnswer.text);
          
        // }

        // setAnswer(answerId);


      }


   
       
    return ( 

        <div className="font-muli theme-cyan gradient">
        <div className="page-loader-wrapper">
            <div className="loader">
            </div>
        </div>
        <div id="main_content">
        <SideBar item="pass"/>

        <div class="container">     
            <div class="sidebar">
            <button class="circle-btn">50</button>
            <button class="circle-btn">50</button>
            <button class="circle-btn">50</button>
            <button class="circle-btn">50</button>
            <button class="circle-btn">50</button>
            <button class="circle-btn">50</button>
            
            </div>
        <div className="content">
        <div className='page'>
        {/* <div>
        <div className='question-div'>
        <p className='question-p'> لقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنلقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنلقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السن لقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنة) 2022</p>
        </div>


        <div style={{marginTop:"50px"}}>
        <div className="label-container" style={{marginTop:"20px"}}>
        <label className="checkbox-container"  style={{marginRight:"150px",}}>
            <span className="label-text"  >السلام عليكم</span>
            <input type="checkbox" />
            <span className="checkmark" ></span>
            
        </label>
        </div>
        <div className="label-container" style={{marginTop:"20px"}}>
        <label className="checkbox-container"  style={{marginRight:"150px",}}>
            <span className="label-text"  >السلام عليكم</span>
            <input type="checkbox" />
            <span className="checkmark" ></span>
            
        </label>
        </div>
        <div className="label-container" style={{marginTop:"20px"}}>
        <label className="checkbox-container"  style={{marginRight:"150px",}}>
            <span className="label-text"  >السلام عليكم</span>
            <input type="checkbox" />
            <span className="checkmark" ></span>
            
        </label>
        </div>
        </div>
        </div> */}
                         {/* <div className='question-div'>
                        <h3 className="card-title question-p" style={{fontFamily: 'Tajawal,sans-serif',color:"black"}}>{dadQuestionText} </h3>
                        </div>


                        <div  style={{ textAlign: "right",marginTop:"50px" }}>
                        {dadAnswers.map((answer,index) => (
                            <div className="answer-button-container" key={index} >
                            <input type="button"  draggable onDragStart={(e) => handleDragStart(e, answer)} className="btn btn-primary" value={answer}   style={{background: `#17a2b8`,fontFamily: 'Tajawal,sans-serif'}}/>
                            </div>
                        ))}

                        </div>

                        <div className='question-div'>
                            <p className='question-p' >
                            
                             </p>
                        </div> */}
                       






                        {/* <div>
      <div>
        {questions.map((question) => (
          <div key={question.id} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, question.id)}>
            {question.text} {question.answer ? answers.find((answer) => answer.id === parseInt(question.answer)).text : '?'}
          </div>
        ))}
      </div>
      <div>
        {answers.map((answer) => (
          <div key={answer.id} draggable onDragStart={(e) => handleDragStart(e, answer.id)} style={{ backgroundColor: answer.color }}>
            {answer.text}
          </div>
        ))}
      </div>
      <button onClick={calculateScore}>Calculate score</button>
    </div> */}


                       


        </div>

                
        </div>
        </div>

        
        </div>
















        {/* <div class="quiz-container" id="quiz">
    <div class="quiz-header">
      <h2 id="question">Question Text</h2>
      <ul>
        <li>
          <input type="radio" name="answer" id="a" class="answer"/>
          <label for="a" id="a_text">Answer</label>
        </li>
        <li>
          <input type="radio" name="answer" id="b" class="answer"/>
          <label for="b" id="b_text">Answer</label>
        </li>
        <li>
          <input type="radio" name="answer" id="c" class="answer"/>
          <label for="c" id="c_text">Answer</label>
        </li>
        <li>
          <input type="radio" name="answer" id="d" class="answer"/>
          <label for="d" id="d_text">Answer</label>
        </li>
      </ul>
    </div>
    <button id="submit" className='but'>Submit</button>
  </div> */}
        </div>
        
     );
}
 
export default Pass;