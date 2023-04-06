import  { useState, useEffect,useContext } from 'react';

import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/summernote/dist/summernote.css";
import  "./assets/css/style.min.css"


import avatar1 from "./assets/images/xs/avatar1.jpg";
import avatar2 from "./assets/images/xs/avatar2.jpg";
import avatar3 from "./assets/images/xs/avatar3.jpg";
import avatar4 from "./assets/images/xs/avatar4.jpg";
import avatar5 from "./assets/images/xs/avatar5.jpg";

import dflt from "./assets/images/themes/default.png"
import dark from "./assets/images/themes/dark.png"
import rtl from "./assets/images/themes/rtl.png"


const Ap = () => {

    const script7 = document.createElement("script");
    script7.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script7.async = true;  


  const script1 = document.createElement("script");
  script1.src = "/assets/bundles/lib.vendor.bundle.js";
  script1.async = true;

  const script4= document.createElement("script");
  script4.src = "/assets/bundles/counterup.bundle.js";
  script4.async = true;

  const script5 = document.createElement("script");
  script5.src = "/assets/bundles/apexcharts.bundle.js";
  script5.async = true;

  const script6 = document.createElement("script");
  script6.src = "/assets/bundles/summernote.bundle.js";
  script6.async = true;



  const script2 = document.createElement("script");
  script2.src = "/assets/js/core.js";
  script2.async = true;


  

  useEffect(() => {
      document.body.appendChild(script7);
      document.body.appendChild(script1);
      document.body.appendChild(script4);
      document.body.appendChild(script5);
      document.body.appendChild(script6);
      document.body.appendChild(script2);



  return () => {

      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);

    }
  
  }, []);


  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [classR, setClassR] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [birthDay, setBirthDay] = useState("");


  const handleAddStudent = async (event)=>{
      console.log(username);
      console.log(year);
      console.log(classR);
      console.log(gender);
      console.log(mobile);
      console.log(address);
      console.log(birthDay);

  }

  return ( 
<div  className="font-muli theme-cyan gradient">
<div className="page-loader-wrapper">
    <div className="loader">
    </div>
</div>

<div id="main_content">
    <div id="header_top" className="header_top">
        <div className="container">
            <div className="hleft">
                <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo"></i></a>
                <div className="dropdown">
                    <a href="javascript:void(0)" className="nav-link icon menu_toggle"><i className="fe fe-align-center"></i></a>
                    <a href="javascript:void(0)" className="nav-link icon settingbar"><i className="fe fe-settings"></i></a>
                </div>
            </div>
            <div className="hright">
                <a href="login.html" className="nav-link icon settingbar"><i className="fe fe-power"></i></a>                
            </div>
        </div>
    </div>
    <div id="rightsidebar" className="right_sidebar">
        <a href="javascript:void(0)" className="p-3 settingbar float-right"><i className="fa fa-close"></i></a>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">Settings</a></li>
        </ul>
        <div className="tab-content">
            <div role="tabpanel" className="tab-pane vivify fadeIn active" id="Settings" aria-expanded="true">
                <div className="mb-4">
                    <h6 className="font-14 font-weight-bold text-muted">Theme Color</h6>
                    <ul className="choose-skin list-unstyled mb-0">
                        <li data-theme="azure"><div className="azure"></div></li>
                        <li data-theme="indigo"><div className="indigo"></div></li>
                        <li data-theme="purple"><div className="purple"></div></li>
                        <li data-theme="orange"><div className="orange"></div></li>
                        <li data-theme="green"><div className="green"></div></li>
                        <li data-theme="cyan" className="active"><div className="cyan"></div></li>
                        <li data-theme="blush"><div className="blush"></div></li>
                        <li data-theme="white"><div className="bg-white"></div></li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
                    <div className="custom-controls-stacked font_setting">
                        <label className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="font" value="font-muli" checked=""/>
                            <span className="custom-control-label">Muli Google Font</span>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="font" value="font-montserrat"/>
                            <span className="custom-control-label">Montserrat Google Font</span>
                        </label>
                        <label className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" name="font" value="font-poppins"/>
                            <span className="custom-control-label">Poppins Google Font</span>
                        </label>
                    </div>
                </div>
                <div>
                    <h6 className="font-14 font-weight-bold mt-4 text-muted">General Settings</h6>
                    <ul className="setting-list list-unstyled mt-1 setting_switch">
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Night Mode</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-darkmode"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                       
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Min Sidebar Dark</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-min_sidebar"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Sidebar Dark</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-sidebar"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Icon Color</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-iconcolor"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Gradient Color</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-gradient" checked=""/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                       
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">RTL Support</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-rtl"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                       
                    </ul>
                </div>
                <hr/>
                
            </div>
            <div role="tabpanel" className="tab-pane vivify fadeIn" id="activity" aria-expanded="false">
                <ul className="new_timeline mt-3">
                    <li>
                        <div className="bullet pink"></div>
                        <div className="time">11:00am</div>
                        <div className="desc">
                            <h3>Attendance</h3>
                            <h4>Computer Class</h4>
                        </div>
                    </li>
                    <li>
                        <div className="bullet pink"></div>
                        <div className="time">11:30am</div>
                        <div className="desc">
                            <h3>Added an interest</h3>
                            <h4>“Volunteer Activities”</h4>
                        </div>
                    </li>
                    <li>
                        <div className="bullet green"></div>
                        <div className="time">12:00pm</div>
                        <div className="desc">
                            <h3>Developer Team</h3>
                            <h4>Hangouts</h4>
                            <ul className="list-unstyled team-info margin-0 p-t-5">                                            
                                <li><img src={avatar1} alt="Avatar"/></li>
                                <li><img src={avatar2} alt="Avatar"/></li>
                                <li><img src={avatar3} alt="Avatar"/></li>
                                <li><img src={avatar4} alt="Avatar"/></li>                                            
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="bullet green"></div>
                        <div className="time">2:00pm</div>
                        <div className="desc">
                            <h3>Responded to need</h3>
                            <a href="javascript:void(0)">“In-Kind Opportunity”</a>
                        </div>
                    </li>
                    <li>
                        <div className="bullet orange"></div>
                        <div className="time">1:30pm</div>
                        <div className="desc">
                            <h3>Lunch Break</h3>
                        </div>
                    </li>
                    <li>
                        <div className="bullet green"></div>
                        <div className="time">2:38pm</div>
                        <div className="desc">
                            <h3>Finish</h3>
                            <h4>Go to Home</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="theme_div">
        <div className="card">
            <div className="card-body">
                <ul className="list-group list-unstyled">
                    <li className="list-group-item mb-2">
                        <p>Light Version</p>
                        <a href="../university/index.html"><img src={dflt} className="img-fluid" alt="" /></a>
                    </li>
                    <li className="list-group-item mb-2">
                        <p>Dark Version</p>
                        <a href="../university-dark/index.html"><img src={dark} className="img-fluid" alt="" /></a>
                    </li>
                    <li className="list-group-item mb-2">
                        <p>RTL Version</p>
                        <a href="../university-rtl/index.html"><img src={rtl} className="img-fluid" alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>        
    </div>
   
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">LearnUp<a href="javascript:void(0)" className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
        =
        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li className="active"><a href="index.html"><i className="fa fa-dashboard"></i><span>Dashboard</span></a></li>
                        <li><a href="professors.html"><i className="fa fa-black-tie"></i><span>Professors</span></a></li>
                        <li><a href="students.html"><i className="fa fa-users"></i><span>Students</span></a></li>
                        <li><a href="library.html"><i className="fa fa-book"></i><span>Library</span></a></li>
                        <li><a href="events.html"><i className="fa fa-calendar"></i><span>emploi de temps</span></a></li>
                        </ul>
                </nav>
            </div>
            <div className="tab-pane fade" id="menu-admin" role="tabpanel">
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li><a href="payments.html"><i className="fa fa-credit-card"></i><span>Payments</span></a></li>
                        <li><a href="noticeboard.html"><i className="fa fa-dashboard"></i><span>Noticeboard</span></a></li>
                        <li><a href="taskboard.html"><i className="fa fa-list-ul"></i><span>Taskboard</span></a></li>
                        <li><a href="hostel.html"><i className="fa fa-bed"></i><span>Hostel</span></a></li>
                        <li><a href="transport.html"><i className="fa fa-truck"></i><span>Transport</span></a></li>
                        <li><a href="attendance.html"><i className="fa fa-calendar-check-o"></i><span>Attendance</span></a></li>
                        <li><a href="leave.html"><i className="fa fa-flag"></i><span>Leave</span></a></li>
                        <li><a href="setting.html"><i className="fa fa-gear"></i><span>Settings</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
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
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Student-all">List View</a></li>
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
                                <a href="students.html" className="my_sort_cut text-muted">
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
                                                        <th>Name</th>
                                                        <th>Assigned Professor</th>
                                                        <th>Date Of Admit</th>
                                                        <th>Fees</th>
                                                        <th>Branch</th>
                                                        <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Jens Brincker</td>
                                                        <td>Kenny Josh</td>
                                                        <td>27/05/2016</td>
                                                        <td>
                                                            <span className="tag tag-success">paid</span>
                                                        </td>
                                                        <td>Mechanical</td>
                                                        <td>
                                                            <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                                            <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
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
                                                    </tr>
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
                                            <label className="col-md-3 col-form-label">الاسم الكامل <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="Enter First name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">تاريخ الازدياد  <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input data-provide="datepicker" data-date-autoclose="true" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className="form-control" placeholder="Date of Birth"/>
                                            </div>
                                        </div>
                                       
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">الجنس <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="gender" value={gender}   onChange={(e) => setGender(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="male">ذكر</option>
                                                    <option value="female">انثي</option>
                                                </select>
                                            </div>
                                        </div>
                                       
                                        <div className="form-group row">
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
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">القسم <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department" value={classR} onChange={(e) => setClassR(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1">القسم الاول</option>
                                                    <option value="2">القسم الثاني</option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">العنوان <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">هاتف الرلي <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control"/>
                                            </div>
                                        </div>
                                        
                                       
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">الانشاا بملف <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                            <div className="col-sm-12">
                                            <div className="form-group mt-2 mb-3">
                                                <input type="file" className="dropify"/>
                                                <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                            </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-primary" onClick={handleAddStudent}>Submit</button>
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
 
export default Ap;