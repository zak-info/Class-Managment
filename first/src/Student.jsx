import  { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { useHistory } from 'react-router-dom';




import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/summernote/dist/summernote.css";
import  "./assets/css/style.min.css"



import avatar1 from "./assets/images/xs/avatar1.jpg";
import avatar2 from "./assets/images/xs/avatar2.jpg";
import avatar3 from "./assets/images/xs/avatar3.jpg";
import avatar4 from "./assets/images/xs/avatar4.jpg";
import avatar5 from "./assets/images/xs/avatar5.jpg";
import avatar6 from "./assets/images/xs/avatar6.jpg";
import avatar7 from "./assets/images/xs/avatar7.jpg";
import avatar8 from "./assets/images/xs/avatar8.jpg";

import smavatar1 from "./assets/images/sm/avatar1.jpg";
import smavatar2 from "./assets/images/sm/avatar2.jpg";
import smavatar3 from "./assets/images/sm/avatar3.jpg";


import dflt from "./assets/images/themes/default.png"
import dark from "./assets/images/themes/dark.png"
import rtl from "./assets/images/themes/rtl.png"
import img1 from "./assets/images/gallery/1.jpg"
import img2 from "./assets/images/gallery/2.jpg"
import img7 from "./assets/images/gallery/7.jpg"
import img8 from "./assets/images/gallery/8.jpg"






const Student = () => {
    useEffect(() => {
        const script7 = document.createElement("script");
    script7.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script7.async = true;    

    const script1 = document.createElement("script");
    script1.src = "/assets/bundles/lib.vendor.bundle.js";
    script1.async = true;

    const script4= document.createElement("script");
    script4.src = "/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js";
    script4.async = true;

    const script5 = document.createElement("script");
    script5.src = "/assets/plugins/dropify/js/dropify.min.js";
    script5.async = true;

    const script6 = document.createElement("script");
    script6.src = "/assets/bundles/summernote.bundle.js";
    script6.async = true;

    const script = document.createElement("script");
    script.src = "/assets/plugins/sweetalert/sweetalert.min.js";
    script.async = true;

    const script2 = document.createElement("script");
    script2.src = "/assets/js/core.js";
    script2.async = true;
        document.body.appendChild(script7);
        document.body.appendChild(script1);
        document.body.appendChild(script4);

        document.body.appendChild(script5);
        document.body.appendChild(script6);
        document.body.appendChild(script);

        document.body.appendChild(script2);



    return () => {

        document.body.removeChild(script1);
        document.body.removeChild(script2);
        document.body.removeChild(script4);
        document.body.removeChild(script5);
        document.body.removeChild(script6);

      }
    
    }, []);
    const history = useHistory(); 
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


    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = function(event) {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
          console.log(jsonData[0].promo);
          history.push("/");
          // Do something with the JSON data
        };
      
        reader.readAsBinaryString(file);
      }



    return ( 
        <div className="font-muli theme-cyan gradient">
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
                <a href="javascript:void(0)" class="nav-link icon right_tab"><i class="fe fe-align-right"></i></a>

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
                <div className="tab-content">
                    <div className="tab-pane active" id="Student-all">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Roll No."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="الاسم"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="السنة"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="القسم "/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-primary btn-block" title="">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive card">
                            <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Roll No.</th>
                                        <th>الاسم</th>
                                        <th>السنة</th>
                                        <th>القسم</th>
                                        <th>هاتف الولي</th>
                                        <th>Admission Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A25</td>
                                        {/* <td className="w60">
                                            <img className="avatar" src={avatar1} alt=""/>
                                        </td> */}
                                        <td><span className="font-16">محمد مداد</span></td>
                                        <td>الثالثة</td>
                                        <td>الرابعة ب</td>
                                        <td>(417) 646-7483</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    
                                    
                                    
                                </tbody>
                            </table>
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
                                                <input type="file" onChange={handleFileUpload} className="dropify"/>
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
     );
}
 
export default Student;