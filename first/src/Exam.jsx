import  { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import SideBar from './SideBar';
import DatePicker from 'react-datepicker';

import { FaPlus } from 'react-icons/fa';









const  Exam= () => {
    const [exams, setExams] = useState([]);
    useEffect(()=>{
        axios
          .get("http://localhost:4000/getExams")
          .then((response) => {
            console.log(response.data);
            setExams(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
  
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [textAria,setTextArea] = useState("");
    const [dadQuestion,setDadQuestion] = useState("");
    const [dadAnswers,setDadAnswers]=useState([]);
    const [questionType, setQuestionType] = useState("");
    const [questions,setQuestions]=useState([]);
    const [mark,setMark]=useState(1);

    const [isDad, setIsDad] = useState(false);
    const [isQuiz, setIsQuiz] = useState(false);
    const [isMatch, setIsMatch] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const [quizQ, setQuizQ] = useState("");
    const [quizA, setQuizA] = useState("");
    const [quizAs, setQuizAs] = useState([]);
    const [quizRAs, setQuizRAs] = useState([]);
    function handleAddQuizA(){
       setQuizAs(pre=>[...pre,quizA]);
       setQuizA("");
       console.log(quizAs);
    }
    function  handleDeleteQuizA(index){
        const updatedList = [...quizAs];
        updatedList.splice(index, 1); // remove the third element at index 2
        setQuizAs(updatedList);
    }
    function handleAddQuizRA(event,answer){
        if (event.target.checked) {
            setQuizRAs(pre=>[...pre,answer])
            console.log(quizRAs);
          } else {
            const updatedAnswers = quizRAs.filter((i) => i != answer);
                // set the state to the new array
                setQuizRAs(updatedAnswers);
                console.log(quizRAs);
          }
    }

    const [matchQ, setMatchQ] = useState("");
    const [matchR, setMatchR] = useState("");
    const [matchL, setMatchL] = useState("");
    const [matchCouples,setMatchCouples] = useState([]);
    function handleAddCouple(){
        setMatchCouples(pre=>[...pre,{a:matchL,q:matchR}]);
        setMatchL("");
        setMatchR("");
        console.log(matchCouples);
        
    }
    function handleDeleteCouple(l,r){ 

        console.log([l,r]);
        console.log(matchCouples);
        const updatedAnswers = matchCouples.filter((i) => i.a != l && i.q != r);
        // set the state to the new array
        setMatchCouples(updatedAnswers);
    }
   





const handleButtonClick = () => {
setShowPopup(true);
};

const handlePopupClose = () => {
setShowPopup(false);
};

      


async function handleWordDoubleClick(event) {
const selectedText =await event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
if (selectedText !== '' && dadAnswers.slice(-1)[0] !== selectedText) {
    setDadAnswers(prevAnswers => [...prevAnswers, selectedText]);
} else {
    const word = await event.target.value.substring(0, event.target.selectionEnd).split(" ").pop();
    if(dadAnswers.slice(-1)[0] !== word)
    setDadAnswers(prevAnswers => [...prevAnswers, word]);
}

}
      
async function handleTextSelect(event) {
    const selectedText =await event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    if (selectedText) {
    setDadAnswers(prevAnswers => [...prevAnswers, selectedText]);
    }
}
    
function handleDeleteAnswer(answer){

    const updatedAnswers = dadAnswers.filter((i) => i != answer);
  // set the state to the new array
  setDadAnswers(updatedAnswers);

}

async function handleAddGQ(){
    if(questionType =="dad"){
    const q=  {exam:title,type:questionType,mark:mark,question:dadQuestion,answers:dadAnswers,text:textAria};
     setQuestions(pre =>[...pre,q]);
    }else if(questionType =="match"){
    const q=  {exam:title,type:questionType,mark:mark,question:matchQ,answers:matchCouples};
    setQuestions(pre =>[...pre,q]);
    }else if(questionType =="quiz"){
    const q=  {exam:title,type:questionType,mark:mark,question:quizQ,answers:quizAs,ranswers:quizRAs};
    setQuestions(pre =>[...pre,q]);
    }
    setQuestionType("");
    setQuizAs([]);
    setQuizRAs([]);
    setQuizQ("");
    setMatchQ("");
    setMark(1);
    setMatchCouples([]);
    setDadAnswers([]);
    setDadQuestion("");
    setTextArea("");
    setShowPopup(false);
    setIsDad(false);
    setIsQuiz(false);
    setIsMatch(false);

}

const [uploadProgress, setUploadProgress] = useState(0);
const [isUploading, setisUploading] = useState(true);

function handleAddExam(){
    
    
    axios.get("http://localhost:4000/addExam",{params:{exam:{title:title,startTime:startTime,endTime:endTime,level:level},questions:questions} }
    ,{
        onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
            if(percentCompleted ==100){
               
                    const timer = setTimeout(() => {
                        setisUploading(false);
                      
                    }, 1000); // 1000 milliseconds = 1 second
                
                    return () => clearTimeout(timer);
  
            }
          }
      }
      ).then(response => {
            console.log(response.data);
            setTitle("");  
            setStartTime("") ;
            setEndTime("");
            setLevel("");
            setDadAnswers([]);
            setQuestions([]);
            })
            .catch(error => {
            console.error(error);
            });


   
}

function handleDeleteQuestion(index){
    const updatedList = [...questions];
    updatedList.splice(index, 1); // remove the third element at index 2
    setQuestions(updatedList);
}
function TYPE(event){
    setQuestionType(event.target.value);
    if (event.target.value == "dad"){
        
        setIsDad(true);
        setIsQuiz(false);
        setIsMatch(false);
    }else if(event.target.value == "quiz"){
        
        setIsDad(false);
        setIsQuiz(true);
        setIsMatch(false);
    }else if(event.target.value == "match"){
        
        setIsDad(false);
        setIsQuiz(false);
        setIsMatch(true);
    }else if(event.target.value == "tf"){
        
        setIsDad(false);
        setIsQuiz(false);
        setIsMatch(true);
    }else {
        
        setIsDad(false);
        setIsQuiz(false);
        setIsMatch(false);
    }
}

function handleDeleteExam(title,startTime){
    console.log(title,startTime);
}


    return ( 
        <div className="font-muli theme-cyan gradient">
<div className="page-loader-wrapper">
    <div className="loader">
    </div>
</div>
<div id="main_content">
    
   <SideBar item="exams"/>
   
    
   
    <div className="page">
        <div className="section-body" id="page_top">
            <div className="container-fluid">
                
            </div>
        </div>
        <div className="section-body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="header-action">
                        <h1 className="page-title"  style={{fontFamily: 'Tajawal,sans-serif',fontSize:"25px"}}>الإمتحانات</h1>
                        <ol className="breadcrumb page-breadcrumb">
                            <li className="breadcrumb-item"><a href="#" style={{fontFamily: 'Tajawal,sans-serif',fontSize:"20px"}}>الخبير</a></li>
                            <li className="breadcrumb-item active" aria-current="page" style={{fontFamily: 'Tajawal,sans-serif',fontSize:"20px"}}>الإمتحانات</li>
                        </ol>
                    </div>
                   
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item"><a  id='listView' className="nav-link active" data-toggle="tab" href="#Student-all" style={{fontFamily: 'Tajawal,sans-serif',fontSize:"20px"}}>القائمة</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-add"   style={{fontFamily: 'Tajawal,sans-serif',fontSize:"20px"}}>إظافة</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="section-body mt-4">
            <div className="container-fluid">
            <div className="row clearfix row-deck">
            <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body ribbon">
                                <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">5</div>
                                <a href="/students" className="my_sort_cut text-muted">
                                <i className="fa fa-user-circle-o"></i>
                                    <span style={{fontFamily: 'Tajawal,sans-serif'}}>الطلبة</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body ribbon">
                                <div className="ribbon-box orange" data-toggle="tooltip" title="New Staff">8</div>
                                <a href="/courses" className="my_sort_cut text-muted">
                                <i className="fa fa-book"></i>
                                    <span style={{fontFamily: 'Tajawal,sans-serif'}}>الدروس</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <a href="/exams" className="my_sort_cut text-muted">
                                    <i className="fa fa-book"></i>
                                    <span style={{fontFamily: 'Tajawal,sans-serif'}}>الإمتحانات</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="tab-content">
                    <div className="tab-pane active" id="Student-all">
                       
                        <div className="card" > 
                                    <div className="card-header">
                                        <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}> قاامة </h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row clearfix row-deck" >
                                       
                                        
                                        {exams.map((exam,index) => (
                                        <div className="container" key={index}> 
                                        <div className="video">
                                        <h4 style={{fontFamily: 'Tajawal,sans-serif',position:"center"}}>{exam.title}</h4>
                                        <p>{exam.startTime.substring(0, 10)}</p>
                                        <button type="button" onClick={() => handleDeleteExam(exam.title,exam.startTime)}    className="btn btn-icon btn-sm js-sweetalert" ><i className="fa fa-trash-o text-danger"></i></button>
                                        </div>
                                        </div>
                                        ))}


                                        </div>
                                        </div>
                                        </div>
                    </div>
                   
                    <div className="tab-pane" id="Student-add">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}>إنشاء إمتحان</h3>
                                        
                                    </div>
                                    <form className="card-body">
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>العنوان<span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="عنوان الإمتحان" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}> وقت البدأ  <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                        <DatePicker 
                                        selected={startTime} 
                                        onChange={date => setStartTime(date)} 
                                        dateFormat="yyyy:MM:dd h:mm aa" 
                                        showPopperArrow={false} 
                                        shouldCloseOnSelect={true} 
                                        className="col-md-9" 
                                        placeholderText="وقت البدأ" 
                                        showTimeSelect 
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        />        
                                    </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}> وقت الإنتهاء  <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                        <DatePicker 
                                        selected={endTime} 
                                        onChange={date => setEndTime(date)} 
                                        dateFormat="yyyy:MM:dd h:mm aa" 
                                        showPopperArrow={false} 
                                        shouldCloseOnSelect={true} 
                                        className="col-md-9" 
                                        placeholderText="وقت الإنتهاء" 
                                        showTimeSelect 
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        />        
                                    </div>
                                    </div>
                                       
                                        
                                       
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>المستوى<span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department" value={level} onChange={(e) => setLevel(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1" style={{fontFamily: 'Tajawal,sans-serif'}}>السنة الاولي</option>
                                                    <option value="2"   style={{fontFamily: 'Tajawal,sans-serif'}}>السنة الثانية</option>
                                                    <option value="3" style={{fontFamily: 'Tajawal,sans-serif'}}>السنة الثالثة</option>
                                                    <option value="4" style={{fontFamily: 'Tajawal,sans-serif'}}>السنة الرابعة</option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                        <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}>الأسئلة <span className="text-danger">*</span></label>
                                            
                                        <div className="col-md-9">
                                        <div className="card"> 
                                        <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0 text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>النوع</th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {questions.map((question,index) => (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{question.type}</td>
                                                        <td></td>
                                                        <td></td>
                                                        
                                                        <td>
                                                            <a href="javascript:void(0)" onClick={()=>handleDeleteQuestion(index)}><i className="fa fa-trash-o text-danger"></i></a>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                   
                                                </tbody>
                                                
                                            </table>
                                            <div className='col-sm-12 conta'>
                                                <button type='button' className="add-button" onClick={handleButtonClick}><FaPlus className="add-icon" /></button>  
                                                </div>
                                        </div>  
                                    </div> 
                                    </div>
                                    </div>
                                    </div>

                                        


                                        <div className="col-sm-12">
                                        
                                          <button type="button" className="btn btn-primary" onClick={handleAddExam}>Submit</button>
                                        </div>
                                        {showPopup && (
                                            <div className="popup-container" >
                                            <div className="overlay" onClick={handlePopupClose}></div>
                                            <div className="popup-box">
                                            <div className="card-header">
                                                <h3 className="card-title"  style={{fontFamily: 'Tajawal,sans-serif'}}>إظافة سؤال</h3>
                                            </div>

                                                <div className="form-group row">
                                                <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>نوع السؤال<span className="text-danger">*</span></label>
                                                <div className="col-md-9">
                                                    <select className="form-control input-height" name="department" value={questionType} onChange={TYPE}  style={{fontFamily: 'Tajawal,sans-serif'}}>
                                                        <option value="">Select...</option>
                                                        <option value="quiz"> quiz</option>
                                                        <option value="dad"> Drag and Drop</option>
                                                        <option value="match">match</option>
                                                        <option value="tf"> true falsee</option>
                                                    
                                                    </select>
                                                </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>العلامة<span className="text-danger">*</span></label>
                                                    <div className="col-md-9">
                                                        <input type="text" className="form-control" value={mark}  onChange={(e) => setMark(parseInt(e.target.value))} placeholder="العلامة" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                    </div>
                                                </div>

                                                {isDad && <div>
                                                    <div className="form-group row">
                                                        <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>السؤال<span className="text-danger">*</span></label>
                                                        <div className="col-md-9">
                                                            <input type="text" className="form-control" value={dadQuestion}  onChange={(e) => setDadQuestion(e.target.value)} placeholder=" نص السؤال" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                        </div>
                                                    </div>
                                                <div  style={{ textAlign: "right" }}>
                                                {dadAnswers.map((answer,index) => (
                                                    <div className="answer-button-container" key={index}>
                                                    <button type="button" className={`btn btn-primary ${dadAnswers.length > 0 && dadAnswers[dadAnswers.length-1] === answer ? 'animated-button' : ''}`} onClick={()=> handleDeleteAnswer(answer)}  style={{background: `#17a2b8`,fontFamily: 'Tajawal,sans-serif'}}>{answer}</button>
                                                    </div>

                                                ))}
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}> الوصف <span className="text-danger">*</span></label>
                                                    <div className="col-md-9">
                                                            <textarea  rows="4" cols="50" type="text" value={textAria}  onDoubleClick={handleWordDoubleClick} onSelect={handleTextSelect} onChange={(e) => setTextArea(e.target.value)} className="form-control"   placeholder="ادخل الوصف"  style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                    </div>
                                                    </div></div>} 
                                                {isQuiz && <div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>السؤال<span className="text-danger">*</span></label>
                                                    <div className="col-md-9">
                                                        <input type="text" className="form-control" value={quizQ}  onChange={(e) => setQuizQ(e.target.value)} placeholder="نص السؤال" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                    </div>
                                                </div>
                                                
                                                <div className="label-container">
                                                {quizAs.map((answer,index) => (
                                                    <label className="checkbox-container" key={index}>
                                                        <a href="javascript:void(0)" onClick={() => handleDeleteQuizA(index)} style={{ marginRight: "200px",marginLeft:"auto" }}>
                                                        <i className="fa fa-trash-o text-danger"></i>
                                                        </a>
                                                        <span className="label-text">{answer}</span>
                                                        <input type="checkbox" onChange={(event) => handleAddQuizRA(event,answer)}/>
                                                        <span className="checkmark" ></span>
                                                    </label>
                                                ))}
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}>إجابة <span className="text-danger">*</span></label>
                                                    <div className="col-md-9 d-flex align-items-center ">
                                                        <input type="text" className="form-control mx-2" value={quizA}  onChange={(e) => setQuizA(e.target.value)} placeholder="إجابة محتملة" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                        <button type="button" className="btn btn-primary" onClick={handleAddQuizA}>إظافة</button>
                                                    </div>
                                                </div>
                                                </div>
                                                }

                                                {isMatch && <div>
                                                <div className="form-group row">
                                                    <label className="col-md-3 col-form-label"  style={{fontFamily: 'Tajawal,sans-serif'}}> السؤال<span className="text-danger">*</span></label>
                                                    <div className="col-md-9">
                                                        <input type="text" className="form-control" value={matchQ}  onChange={(e) => setMatchQ(e.target.value)} placeholder=" نص السؤال" style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                    </div>
                                                </div>
                                                {matchCouples.map((couple,index) => (
                                                <div className="row justify-content-center" key={index} style={{marginTop:"auto"}}>
                                                <a href="javascript:void(0)" onClick={()=>handleDeleteCouple(couple.a,couple.q)} style={{marginRight:"10px"}}><i className="fa fa-trash-o text-danger"></i></a>

                                                <div className="form-group row align-items-center">
                                                    <div className="col-md-6 mb-3">
                                                    <button type="button" className="btn btn-primary" >{couple.a}</button>
                                                    </div>
                                                    <div className="col-md-3 mb-3 text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" >
                                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                                    </svg>
                                                    </div>
                                                    <div className="col-md-3 mb-3">
                                                    <button type="button" className="btn btn-primary" >{couple.q}</button>
                                                    </div>
                                                </div>

                                                </div>
                                                ))}
                                               
                                                <div className="row justify-content-center">
                                               
                                                <div className="form-group row">
                                                <div className="col-md-6 mb-3" style={{ maxWidth: '100px',marginLeft:"200px" }}>
                                                    <input type="text" className="form-control" value={matchL} onChange={(e) => setMatchL(e.target.value)} placeholder="إجابة " style={{ fontFamily: 'Tajawal,sans-serif' }} />
                                                </div>
                                                <div className="col-md-6 mb-3" style={{ maxWidth: '100px' }}>
                                                    <input type="text" className="form-control" value={matchR} onChange={(e) => setMatchR(e.target.value)} placeholder=" سؤال" style={{ fontFamily: 'Tajawal,sans-serif' }} />
                                                </div>
                                                <div className="col-md-6 mb-3" style={{marginLeft:"170px",marginTop:"3px"}}>
                                                <button type='button' className="add-button" onClick={handleAddCouple}><FaPlus className="add-icon" /></button>  
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                }
                                                
                                                

                                                    
                                                   


                                                {uploadProgress > 0 &&  isUploading  && <div > <progress value={uploadProgress} max="100" /></div>}
                                                <div className="col-sm-12">
                                                <button type="button" className="btn btn-primary" onClick={handleAddGQ}>إظافة</button>
                                                </div>
                                            </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                                         
                                
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
       
       
    </div>    
</div>

 </div>
     );
}
 
export default Exam;