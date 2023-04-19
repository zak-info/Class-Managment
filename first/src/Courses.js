import  { useState, useEffect,useContext,useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from "react-player";
// import Thumbnail from "react-thumbnail";
import { FaFilePdf } from 'react-icons/fa';
import SideBar from './SideBar';
import axios from "axios";





const Courses = () => {

  const history = useHistory(); 
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [newart, setnewArt] = useState("");
  const [newDes, setnewDes] = useState("");
  const [courses, setCourses] = useState("");
  
  

  const [arts, setArts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/getArts")
    .then(response => {
      console.log(response.data);

      setArts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },[])


  

  const handleAddArt = async (event)=>{
      axios.get("http://localhost:4000/addArt", { params: { art:newart,des:newDes} })
        .then(response => {
          console.log(response.data);
          axios.get("http://localhost:4000/getArts")
                .then(response => {
                console.log(response.data);

                setArts(response.data);
                console.log(arts);

                document.getElementById("listView").click();



                })
                .catch(error => {
                console.error(error);
                });
        //   history.go(0)
        })
        .catch(error => {
          console.error(error);
        });
     
  }

  async function handleDeleteArt(event){
    console.log(event.target.textContent);
    axios.get("http://localhost:4000/addArt",{params:{art:event.target.textContent}})
    .then(response => {
      console.log(response.data);

    //   setArts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setisUploading] = useState(true);


  const handleAddCourse = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('art', des);
    formData.append('file', file.get('file'));

    axios.post("http://localhost:4000/upload", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
        if(percentCompleted ==100){
           
                const timer = setTimeout(() => {
                    setisUploading(false);
                    axios
                .get("http://localhost:4000/getCourses")
                .then((response) => {
                  console.log(response.data);
                  setfiles(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
                document.getElementById("listView").click();
                }, 1000); // 1000 milliseconds = 1 second
            
                return () => clearTimeout(timer);

                setisUploading(true);

                
             
        }
      }
  })
      .then(response => {
        console.log(response.data);
        if(response.data.inserted=="yes"){
            console.log("object");
        }
      })
      .catch(error => {
        console.error(error);
      });
}


const [file,setFile]=useState(Object);


function handleFileUpload(event) {
  const fil = event.target.files[0];
  const formData = new FormData();
  formData.append('file', fil);
  setFile(formData);
  console.log(file);
}

function handleDeleteFile(v){
    axios
      .get("http://localhost:4000/deleteCourse",{params:{path:v}})
      .then((response) => {
       
        if(response.data.deleted=="yes"){
            const fls=files.filter(fl => fl.path!=v)
            setfiles(fls);
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
}




const [files, setfiles] = useState([]);
useEffect(()=>{
    axios
      .get("http://localhost:4000/getCourses")
      .then((response) => {
        console.log(response.data);
        setfiles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
},[])
  

  return ( 
<div  className="font-muli theme-cyan gradient">
<div className="page-loader-wrapper">
    <div className="loader">
    </div>
</div>

<div id="main_content">
   
    <SideBar item="courses"/>
    
   
   
    <div className="page">
        <div className="section-body" id="page_top">
            <div className="container-fluid">
               
            </div>
        </div>
       
        <div className="section-body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="header-action">
                        <h1 className="page-title">Students</h1>
                        <ol className="breadcrumb page-breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Ericsson</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Students</li>
                        </ol>
                    </div>
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item"><a className="nav-link active" id='listView' data-toggle="tab" href="#Student-all" style={{fontFamily: 'Tajawal,sans-serif'}}>القائمة</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-add" style={{fontFamily: 'Tajawal,sans-serif'}}>إظافة</a></li>
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
                    <div className="tab-pane fade show active" id="admin-Dashboard" role="tabpanel">
                        <div className="row clearfix">
                          
                        </div>                
                        
                        <div className="row">
                            <div className="col-md-12">
                            
                
                        <div className="section-body mt-4">
                        <div className="container-fluid">
                            <div className="tab-content">
                                <div className="tab-pane active" id="Student-all">
        
        
        
                                 {arts.map((art,index) => (
                                 <div className="card" key={index}> 
                                    <div className="card-header">
                                        <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}> قاامة {art.art}</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {/* <div className="table-responsive"> */}
                                        <div className="row clearfix row-deck" >
                                        {/* <div  className="container">

                                        {files.map((video,index) => (
                                            <div key={index} className="video">
                                            <ReactPlayer url={`http://localhost:4000/courses/${video.path}`} controls width="100%" height="auto" />
                                            </div>
                                        ))}
                                        </div>
                                         */}
                                         <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}> فيديوات</h3>
                                        <div className='card'></div>
                                        
                                        <div className="container">
                                         {/* const thumbnailWidth = 300;
                                            const thumbnailHeight = (thumbnailWidth / video.aspectRatio).toFixed(2); */}
                                          
                                           {/* <Thumbnail
                                                    url={`http://localhost:4000/courses/${video.path}`}
                                                    width={thumbnailWidth}
                                                    height={thumbnailHeight}
                                                    imageFit="contain"
                                                /> */}


                                            {files.filter(video => video.art == art.art && video.path.slice(-4) == ".mp4").map((video,index) => (
                                           
                                               
                                                <div key={index} className="video">
                                               
                                             <ReactPlayer  url={`http://localhost:4000/courses/${video.path}`} controls width="100%" height="auto" />
                                             
                                             <h4 style={{fontFamily: 'Tajawal,sans-serif'}}>{video.title}</h4>
                                             <p>le 10/12/2023</p>
                                             <button type="button" onClick={()=> handleDeleteFile(video.path)}  className="btn btn-icon btn-sm js-sweetalert" ><i className="fa fa-trash-o text-danger"></i></button>
                                                </div>
                                           
                                               ))}
                                                </div>
                                                <br/>
                                                <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}> ملفات</h3>
                                                 <div className='card'></div>
                                                <div className="container">
                                               
                                               {files.filter(video => video.art == art.art && video.path.slice(-4) !== ".mp4").map((video,index) => (
                                           
                                               
                                           <div key={index} className="video">
                                        {/* <ReactPlayer url={`http://localhost:4000/courses/${video.path}`} controls width="100%" height="auto" /> */}
                                        {/* <a href={`http://localhost:4000/courses/${video.path}`} target="_blank" className="pdf-link"> </a> */}
                                        <a href={`http://localhost:4000/courses/${video.path}`} target="_blank">
                                            <FaFilePdf size={160} className="red-icon"/>
                                        </a>
                                        <span style={{fontFamily: 'Tajawal,sans-serif'}} className='spm'>{video.title}</span>
                                            <button type="button" onClick={()=> handleDeleteFile(video.title)}  className="btn btn-icon btn-sm js-sweetalert" ><i className="fa fa-trash-o text-danger"></i></button>
                                          
                                           </div>
                                      
                                          ))}
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        ))}
                                    </div>
                                
                                    <div className="tab-pane" id="Student-add">
                                        <div className="row clearfix">
                                            <div className="col-lg-8 col-md-12 col-sm-12 clearfix">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="card-title"  style={{fontFamily: 'Tajawal,sans-serif'}}>اضافة فن</h3>
                                                        
                                                    </div>
                                                    <form className="card-body">
                                                        <div className="form-group row">
                                                            <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}> الفن <span className="text-danger">*</span></label>
                                                            <div className="col-md-9">
                                                                <input type="text"   className="form-control" style={{fontFamily: 'Tajawal,sans-serif'}} value={newart}  onChange={(e) => setnewArt(e.target.value)} placeholder="ادخل الفن"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}> الوصف <span className="text-danger">*</span></label>
                                                            <div className="col-md-9">
                                                                <textarea  rows="4" cols="50" type="text" value={newDes} onChange={(e) => setnewDes(e.target.value)} className="form-control"   placeholder="ادخل الوصف"  style={{fontFamily: 'Tajawal,sans-serif'}}/>
                                                            </div>
                                                        </div>
                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary" onClick={handleAddArt}>Submit</button>
                                            <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title" style={{fontFamily: 'Tajawal,sans-serif'}}>اضافة درس</h3>
                                        
                                    </div>
                                    <form className="card-body">
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label" style={{fontFamily: 'Tajawal,sans-serif'}}> العنوان <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"  value={title}  onChange={(e) => setTitle(e.target.value)}  placeholder="ادخل عنوان الدرس" style={{fontFamily: 'Tajawal,sans-serif'}} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"    style={{fontFamily: 'Tajawal,sans-serif'}}>الفن <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="gender" value={des}  onChange={(e) => setDes(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    {arts.map((art,index) => (
                                                    <option  key={index} value={art.art}  style={{fontFamily: 'Tajawal,sans-serif'}}>{art.art}</option>
                                                    ))}
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">الانشاا بملف <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                            <div className="col-sm-12">
                                            <div className="form-group mt-2 mb-3">
                                                <input type="file" onChange={handleFileUpload} className="dropify"/>
                                                <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary" onClick={handleAddCourse} >Submit</button>
                                            <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                            {uploadProgress > 0 &&  isUploading  && <div > <progress value={uploadProgress} max="100" /></div>}
                                        </div>
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
                    {/* <div className="tab-pane fade" id="admin-Activity" role="tabpanel">
                        <div className="row clearfix row-deck">
                            <div className="col-xl-7 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Quick Mail</h3>
                                        <div className="card-options">
                                            <a href="javascript:void(0)" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                            <div className="item-action dropdown ml-2">
                                                <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text w80">To:</span>
                                            </div>
                                            <input type="text" className="form-control"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text">CC BCC</span>
                                            </div>
                                        </div>
                                        <div className="input-group mt-1 mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text w80">Subject:</span>
                                            </div>
                                            <input type="text" className="form-control"/>
                                        </div>

                                        <div className="summernote">
                                            Hi there,
                                            <br/>
                                            <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                                            <br/>
                                            <p>Thank you!</p>
                                            <h6>Summer Note</h6>
                                        </div>
                                        <button className="btn btn-default mt-3">Send</button>
                                    </div>
                                </div>
                
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">University Stats</h3>
                                        <div className="card-options">
                                            <a href="javascript:void(0)" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                            <div className="item-action dropdown ml-2">
                                                <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>                                            
                                                    <div className="dropdown-divider"></div>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-lg-4 col-4 border-right">
                                                <label className="mb-0 font-10">Department</label>
                                                <h4 className="font-20 font-weight-bold">05</h4>
                                            </div>
                                            <div className="col-lg-4 col-4 border-right">
                                                <label className="mb-0 font-10">Total Teacher</label>
                                                <h4 className="font-20 font-weight-bold">43</h4>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <label className="mb-0 font-10">Total Student</label>
                                                <h4 className="font-20 font-weight-bold">267</h4>
                                            </div>
                                        </div>
                                        <table className="table table-striped mt-4">
                                            <tbody><tr>
                                                <td>
                                                    <label className="d-block">Mechanical Engineering<span className="float-right">43%</span></label>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-indigo" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{width: "43%"}}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="d-block">Business Analysis - BUS <span className="float-right">27%</span></label>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={{width: "27%"}}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="d-block">Computer Technology - CT <span className="float-right">81%</span></label>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "81%"}}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="d-block">Management - MGT <span className="float-right">61%</span></label>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "61%"}}></div>
                                                    </div>   
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="d-block">Science <span className="float-right">77%</span></label>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}></div>
                                                    </div>   
                                                </td>
                                            </tr>
                                        </tbody></table> 
                                    </div>
                                    <div className="card-footer">
                                        <small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="card">
                                    <div className="table-responsive todo_list">
                                        <table className="table table-hover text-nowrap table-striped table-vcenter mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Task</th>
                                                    <th className="w150 text-right">Due</th>
                                                    <th className="w100">Priority</th>
                                                    <th className="w80 text-center"><i className="icon-user"></i></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked/>
                                                            <span className="custom-control-label">Report Panel Usag</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">Feb 12-2019</td>
                                                    <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                    <td>
                                                        <span className="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1"/>
                                                            <span className="custom-control-label">Report Panel Usag</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">Feb 18-2019</td>
                                                    <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                    <td>
                                                        <img src={avatar1} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked/>
                                                            <span className="custom-control-label">New logo design for Angular Admin</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">March 02-2019</td>
                                                    <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                    <td>
                                                        <img src={avatar2} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked/>
                                                            <span className="custom-control-label">Report Panel Usag</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">Feb 12-2019</td>
                                                    <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                    <td>
                                                        <span className="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1"/>
                                                            <span className="custom-control-label">Report Panel Usag</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">Feb 18-2019</td>
                                                    <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                    <td>
                                                        <img src={avatar3} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked/>
                                                            <span className="custom-control-label">New logo design for Angular Admin</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">March 02-2019</td>
                                                    <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                    <td>
                                                        <span className="avatar avatar-blue"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1"/>
                                                            <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">March 20-2019</td>
                                                    <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                    <td>
                                                        <img src={avatar4} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1"/>
                                                            <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                        </label>
                                                    </td>
                                                    <td className="text-right">March 20-2019</td>
                                                    <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                    <td>
                                                        <img src={avatar5} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="section-body">
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                       
                    </div>
                </div>
            </footer>
        </div>
    </div>    
</div>



</div>

   );
}
 
export default Courses;