import  { useState, useEffect,useRef } from 'react';
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
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

      const [questions, setQuestions] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState({});
      const [dadAnswers, setDadAnswers] = useState([]);
      const [dadText, setDadText] = useState("");
      const [dadQuestionText, setDadQuestionText] = useState("");
      const [test, setTest] = useState([{exam:"e1",type:"match",mark:12,question:"qwe",answers:[["qwe1","qwe2"],["qwe4","qw3"]]}]);
      console.log(test[0].answers[0]);
      
    useEffect(()=>{
        axios
          .get("http://localhost:4000/getQuestions")
          .then((response) => {
            setQuestions(response.data);
            console.log(response.data);
            setCurrentQuestion(response.data[0]);
            setDadAnswers(response.data[0].answers);
            setDadText(response.data[0].text);
            setDadQuestionText(response.data[0].question);
            // setDadShowText(response.data[0].text)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
  
  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex+1]);
      console.log(currentQuestion);
    }
  }
  
  function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentQuestion(questions[currentQuestionIndex-1]);
      console.log(currentQuestion);
    }
  }

  function handleGoToQuestion(index){
    setCurrentQuestionIndex(index);
    setCurrentQuestion(questions[index]);
  }
      const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
      };
    
      function handleDragOver(e){
        e.preventDefault();
      }

      function handleDrop(e, index) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        const span = e.currentTarget;
        span.textContent = data;
      }


  const [matchedAnswers, setMatchedAnswers] = useState([]);
  const [draggedCircle, setDraggedCircle] = useState(null);
  const circlesRef = useRef([]);

  function handleMatchDragStart(event, questionIndex) {
    event.dataTransfer.setData("text/plain", "");
    setDraggedCircle(questionIndex);
  }

  function handleMatchDragOver(event, answerIndex) {
    event.preventDefault();
  }

  function handleMatchDrop(event, answerIndex) {
    event.preventDefault();
    if (draggedCircle !== null) {
      const isMatch = matchedAnswers.some((match) => match.question === draggedCircle);
      if (!isMatch) {
        setMatchedAnswers([...matchedAnswers, { question: draggedCircle, answer: answerIndex }]);
        const questionCircle = circlesRef.current[draggedCircle];
        questionCircle.classList.add("matched");
      }
    }
    setDraggedCircle(null);
  }

  function renderQuestion(index) {
    const isMatched = matchedAnswers.some((match) => match.question === index);
    return (
      <div key={index} className="question-container">
        <div
          className={`circle question-circle ${isMatched ? "matched" : ""}`}
          ref={(element) => (circlesRef.current[index] = element)}
          draggable={!isMatched}
          onDragStart={(event) => handleMatchDragStart(event, index)}
        ></div>
        <div className="question">{test[0].answers[index][1]}</div>
      </div>
    );
  }

  function renderAnswer(index) {
    const isMatched = matchedAnswers.some((match) => match.answer === index);
    return (
      <div key={index} className="answer-container">
        <div className="answer" onDragOver={(event) => handleMatchDragOver(event, index)} onDrop={(event) => handleMatchDrop(event, index)}>
          {test[0].answers[index][0]}
        </div>
        <div className={`circle answer-circle ${isMatched ? "matched" : ""}`}></div>
      </div>
    );
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
            {questions.map((q,index) => (
            <div className='circle-div'  key={index}>
            
            <button class="circle-btn"  onClick={(e)=>handleGoToQuestion(index)}>{index+1}</button>
            <p>نقاط{q.mark}</p>
            </div>
            ))}
            </div>
        <div className="content">
        <div className='page'>
                        <div className='question-div'>
                        <h3 className=" question-p" style={{fontFamily: 'Tajawal,sans-serif'}}>{currentQuestion.question} </h3>
                        </div>


                      {currentQuestion.type=="quiz" && 
                              <div>
                              {/* <div className='question-div'>
                              <p className='question-p'> لقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنلقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنلقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السن لقاء تلفزيوني مع الشيخ مزمل فقيري (حقيقة الإخوان وأنصار السنة) 2022</p>
                              </div> */}


                              <div style={{marginTop:"50px"}}>
                              {currentQuestion.answers.map((answer,index) => (
                              <div className="label-container" style={{marginTop:"20px"}}>
                              <label className="checkbox-container"  style={{marginRight:"150px",}}>
                                  <span className="label-text"  >السلام عليكم</span>
                                  <input type="checkbox" />
                                  <span className="checkmark" ></span>
                                  
                              </label>
                              </div>
                              ))}
                              
                              
                              </div>
                              </div>}
                        

                       

                        {currentQuestion.type=="dad" && 
                        <div><div  style={{ textAlign: "right",marginTop:"50px" }}>
                        {currentQuestion.answers.map((answer,index) => (
                            <div className="answer-button-container" key={index} >
                            <input type="button"  draggable onDragStart={(e) => handleDragStart(e, answer)} className="btn btn-primary" value={answer}   style={{background: `#17a2b8`,fontFamily: 'Tajawal,sans-serif'}}/>
                            </div>
                        ))}
                        </div>
                        <div className='question-div'>
                            <p className='question-p' >
                            {currentQuestion.text.split(/(-+)/).map((str, index) => {
                                if (str === '-' || str === '') {
                                  return null;
                                }
                                if (str.includes('-')) {
                                  return (
                                    <span key={index} style={{color:"#7ed957"}} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index)}>
                                      ____
                                    </span>
                                  );
                                }
                                return str;
                              })}
                             </p>
                        </div></div>}

                        {currentQuestion.type=="match" && 
                        <div className="game">
                        <div className="questions">{test[0].answers.map((_, index) => renderQuestion(index))}</div>
                        <div className="answers">{test[0].answers.map((_, index) => renderAnswer(index))}</div>
                      </div>
                      }



                       

                       

    <div class="button-container" style={{marginBottom:"20px"}}>
  
    <button type="button" onClick={handleNextQuestion} className="btn btn-primary" style={{ fontFamily: 'Tajawal,sans-serif',marginRight:"150px" }}>&laquo; التالي  </button>
  {/* <p className='card-title'>السؤال 5</p> */}
    <button type="button" onClick={handlePrevQuestion} className="btn btn-primary" style={{ fontFamily: 'Tajawal,sans-serif',marginRight:"50px" }}> السابق &raquo; </button>
  
</div> 
{/* <div class="button-container">
  <button class="left-button">Left Button</button>
  <button class="right-button">Right Button</button>
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