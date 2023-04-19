import  { useState, useEffect,useContext } from 'react';
import axios from "axios";
import SideBar from './SideBar';



// import "./assets/plugins/bootstrap/css/bootstrap.min.css";
// import "./assets/plugins/summernote/dist/summernote.css";
// import  "./assets/css/style.min.css"


import avatar1 from "./assets/images/xs/avatar1.jpg";
import avatar2 from "./assets/images/xs/avatar2.jpg";
import avatar3 from "./assets/images/xs/avatar3.jpg";
import avatar4 from "./assets/images/xs/avatar4.jpg";
import avatar5 from "./assets/images/xs/avatar5.jpg";

import dflt from "./assets/images/themes/default.png"
import dark from "./assets/images/themes/dark.png"
import rtl from "./assets/images/themes/rtl.png"


const Home = () => {
   

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:4000/getEvents")
    .then(response => {
      console.log(response.data);

      setEvents(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    },[])


  

  const handleAddEvent = async (event)=>{
      axios.get("http://localhost:4000/addEvent", { params: { title: title,type:type,des:des,date:date,status:"not seen"} })
        .then(response => {
          console.log(response.data);
          axios.get("http://localhost:4000/getEvents")
                .then(response => {
                console.log(response.data);

                setEvents(response.data);
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

  async  function handleMark(event){
    var targt=""
    if(event.target.className === "tag tag-danger"){
        targt="seen"

    }else if(event.target.className === "tag tag-warning"){
        targt="not seen"
    }
    console.log(event.target.value);
    await axios.get("http://localhost:4000/mark",{params:{_id:event.target.value,status:targt}})
            .then(response => {
                if (response.data){
                    console.log("yes");
                //    const filteredStudents =  students.filter((student) => student._id !== event.target.value );
            
                axios.get("http://localhost:4000/getEvents")
                .then(response => {
                  console.log(response.data);
            
                  setEvents(response.data);
                })
                .catch(error => {
                  console.error(error);
                });                    
            }else{
                    console.log("shit");
                }
            })
            .catch(error => {
            console.error(error);
            });

  }

  return ( 
<div  className="font-muli theme-cyan gradient">
<div className="page-loader-wrapper">
    <div className="loader">
    </div>
</div>

<div id="main_content">
    <SideBar item="home"/>
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
                        <li className="nav-item"><a  id='listView' className="nav-link active" data-toggle="tab" href="#Student-all">List View</a></li>
                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-add">Add</a></li>
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
                                <a href="professors.html" className="my_sort_cut text-muted">
                                    <i className="fa fa-black-tie"></i>
                                    <span>Professors</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body ribbon">
                                <div className="ribbon-box orange" data-toggle="tooltip" title="New Staff">8</div>
                                <a href="/students" className="my_sort_cut text-muted">
                                    <i className="fa fa-user-circle-o"></i>
                                    <span>Students</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <a href="library.html" className="my_sort_cut text-muted">
                                    <i className="fa fa-book"></i>
                                    <span>Library</span>
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
                        
                       
                        <div className="card"> 
                                    <div className="card-header">
                                        <h3 className="card-title">New Student List</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0 text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>العنوان</th>
                                                        <th>الفن</th>
                                                        <th>الوصف</th>
                                                        <th>التاريخ</th>
                                                        <th>الحالة</th>
                                                        <th>تعديل</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {events.map((evnt,index) => (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{evnt.title}</td>
                                                        <td>{evnt.type}</td>
                                                        <td>{evnt.des}</td>
                                                        <td>
                                                         {evnt.status==="not seen" &&    <span   value={evnt._id} onClick={handleMark} className="tag tag-danger">{evnt.status}</span>}
                                                         {evnt.status==="seen" &&    <span  value={evnt._id} onClick={handleMark} className="tag tag-success">{evnt.status}</span>}
                                                        </td>
                                                        <td>{evnt.date}</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                    {/* <tr>
                                                        <td>2</td>
                                                        <td>Mark Hay</td>
                                                        <td> Mark</td>
                                                        <td>26/05/2018</td>
                                                        <td>
                                                            <span className="tag tag-warning">unpaid</span>
                                                        </td>
                                                        <td>Science</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Anthony Davie</td>
                                                        <td>Cinnabar</td>
                                                        <td>21/05/2018</td>
                                                        <td>
                                                            <span className="tag tag-success ">paid</span>
                                                        </td>
                                                        <td>Commerce</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>David Perry</td>
                                                        <td>Felix </td>
                                                        <td>20/04/2019</td>
                                                        <td>
                                                            <span className="tag tag-danger">unpaid</span>
                                                        </td>
                                                        <td>Mechanical</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Anthony Davie</td>
                                                        <td>Beryl</td>
                                                        <td>24/05/2017</td>
                                                        <td>
                                                            <span className="tag tag-success ">paid</span>
                                                        </td>
                                                        <td>M.B.A.</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </div>  
                                    </div> 
                                 </div>
                    </div>
                   
                    <div className="tab-pane" id="Student-add">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Basic Information</h3>
                                        
                                    </div>
                                    <form className="card-body">
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"> العنوان <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="ادخل العنوان"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"> التاريخ  <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input data-provide="datepicker" data-date-autoclose="true" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" placeholder="ادخل التاريخ"/>
                                            </div>
                                        </div>
                                       
                                       
                                        {/* <div className="form-group row">
                                            <label className="col-md-3 col-form-label">السنة <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department" value={year} onChange={(e) => setYear(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1">السنة الاولي</option>
                                                    <option value="2">السنة الثانية</option>
                                                    <option value="3">السنة الثالثة</option>
                                                    <option value="4">السنة الرابعة</option>
                                                </select>
                                            </div>
                                        </div> */}
                                        
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">الفن <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="form-control" placeholder="ادخل الفن"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label"> الوصف <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <textarea  rows="4" cols="50" type="text" value={des} onChange={(e) => setDes(e.target.value)} className="form-control"   placeholder="ادخل الوصف"/>
                                            </div>
                                        </div>
                                        
                                       
                                        {/* <div className="form-group row">
                                            <label className="col-md-3 col-form-label">الانشاا بملف <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                            <div className="col-sm-12">
                                            <div className="form-group mt-2 mb-3">
                                                <input type="file" className="dropify"/>
                                                <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                            </div>
                                            </div>
                                            </div>
                                        </div> */}

                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Submit</button>
                                            <button type="submit" className="btn btn-outline-secondary">Cancel</button>
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
                    <div className="tab-pane fade" id="admin-Activity" role="tabpanel">
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
                    </div>
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
 
export default Home;