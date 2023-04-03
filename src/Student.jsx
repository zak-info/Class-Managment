import  { useState, useEffect } from 'react';


import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/summernote/dist/summernote.css";
import  "./assets/css/style.min.css"
import $ from 'jquery';



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

    useEffect(() => {
        document.body.appendChild(script7);
        document.body.appendChild(script1);
        document.body.appendChild(script2);

        document.body.appendChild(script6);
        document.body.appendChild(script);
        document.body.appendChild(script4);

        document.body.appendChild(script5);



    // return () => {

    //     // document.body.removeChild(script1);
    //     // document.body.removeChild(script2);
    //     // document.body.removeChild(script4);
    //     // document.body.removeChild(script5);
    //     // document.body.removeChild(script6);

    //   }
    
    }, []);




    return ( 
        <div>
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
                    {/* <!-- <a href="page-search.html" className="nav-link icon"><i className="fe fe-search" data-toggle="tooltip" data-placement="right" title="Search..."></i></a>
                    <a href="app-email.html"  className="nav-link icon app_inbox"><i className="fe fe-inbox" data-toggle="tooltip" data-placement="right" title="Inbox"></i></a>
                    <a href="app-filemanager.html"  className="nav-link icon app_file xs-hide"><i className="fe fe-folder" data-toggle="tooltip" data-placement="right" title="File Manager"></i></a>
                    <a href="app-social.html"  className="nav-link icon xs-hide"><i className="fe fe-share-2" data-toggle="tooltip" data-placement="right" title="Social Media"></i></a>
                    <a href="javascript:void(0)" className="nav-link icon theme_btn"><i className="fe fe-feather"></i></a> --> */}
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
                        {/* <!-- <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Fix Navbar top</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-fixnavbar"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Header Dark</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-pageheader"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li> --> */}
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
                        {/* <!-- <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Box Shadow</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxshadow">
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li> --> */}
                        <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">RTL Support</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-rtl"/>
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li>
                        {/* <!-- <li>
                            <label className="custom-switch">
                                <span className="custom-switch-description">Box Layout</span>
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxlayout">
                                <span className="custom-switch-indicator"></span>
                            </label>
                        </li> --> */}
                    </ul>
                </div>
                <hr/>
                {/* <!-- <div className="form-group">
                    <label className="d-block">Storage <span className="float-right">77%</span></label>
                    <div className="progress progress-sm">
                        <div className="progress-bar" role="progressbar" aria-valuenow="77" aria-valuemin:"0" aria-valuemax:"100" style="width: 77%;"></div>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mt-3">Upgrade Storage</button>
                </div> --> */}
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
                        <a href="../university/index.html"><img src="../assets/images/themes/default.png" className="img-fluid" alt="" /></a>
                    </li>
                    <li className="list-group-item mb-2">
                        <p>Dark Version</p>
                        <a href="../university-dark/index.html"><img src="../assets/images/themes/dark.png" className="img-fluid" alt="" /></a>
                    </li>
                    <li className="list-group-item mb-2">
                        <p>RTL Version</p>
                        <a href="../university-rtl/index.html"><img src="../assets/images/themes/rtl.png" className="img-fluid" alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>        
    </div>
    {/* <!-- <div className="user_div">
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#righttab-statistics">Statistics</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Result">Result</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Students">Student</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Todo">Todo</a></li>
        </ul>
        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="righttab-statistics" role="tabpanel">
                <div className="card">
                    <div className="card-body">
                        <div>Total Revenue</div>
                        <div className="py-3 m-0 text-center h1 text-success">$79,452</div>
                        <div className="d-flex">
                            <span className="text-muted">Income</span>
                            <div className="ml-auto"><i className="fa fa-caret-up text-success"></i>4%</div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <ul className="list-unstyled mb-0">
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>$43,320</strong></div>
                                    <div className="float-right"><small className="text-muted">Bank of America</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>$36,132</strong></div>
                                    <div className="float-right"><small className="text-muted">Wells Fargo</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow:"0" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-yellow"><i className="fa fa-users"></i> </div>
                        <div className="content">
                            <span>Total Student</span>
                            <h5 className="number mb-0">2,051</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-gray"><i className="fa fa-sitemap"></i> </div>
                        <div className="content">
                            <span>Department</span>
                            <h5 className="number mb-0">14</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-dark"><i className="fa fa-black-tie"></i> </div>
                        <div className="content">
                            <span>Total Teacher</span>
                            <h5 className="number mb-0">27</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-azure"><i className="fa fa-tags"></i> </div>
                        <div className="content">
                            <span>Total Courses</span>
                            <h5 className="number mb-0">31</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-pink"><i className="fa fa-credit-card"></i> </div>
                        <div className="content">
                            <span>Expense</span>
                            <h5 className="number mb-0">$7,254</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-green"><i className="fa fa-bank"></i> </div>
                        <div className="content">
                            <span>Total Income</span>
                            <h5 className="number mb-0">$27,852</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-cyan"><i className="fa fa-map-o"></i> </div>
                        <div className="content">
                            <span>Our Center</span>
                            <h5 className="number mb-0">52</h5>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body top_counter">
                        <div className="icon bg-indigo"><i className="fa fa-smile-o"></i> </div>
                        <div className="content">
                            <span>Smiley Face</span>
                            <h5 className="number mb-0">10K</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="righttab-Result" role="tabpanel">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Result 2019</h3>
                        <div className="card-options">
                            <a href="#"><i className="fa fa-file-excel-o" data-toggle="tooltip" title="Export Excel"></i></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>87%</strong></div>
                                    <div className="float-right"><small className="text-muted">Art & Design</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>80%</strong></div>
                                    <div className="float-right"><small className="text-muted">Fashion</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow:"0" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>63%</strong></div>
                                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-orange" role="progressbar" style="width: 63%" aria-valuenow="36" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>91%</strong></div>
                                    <div className="float-right"><small className="text-muted">Computers</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-indigo" role="progressbar" style="width: 91%" aria-valuenow="6" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>35%</strong></div>
                                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-pink" role="progressbar" style="width: 35%" aria-valuenow="6" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <div className="row text-center">
                            <div className="col-6 border-right">
                                <label className="mb-0">Total Pass</label>
                                <div className="font-20 font-weight-bold">1,052</div>
                            </div>
                            <div className="col-6">
                                <label className="mb-0">Total Fail</label>
                                <div className="font-20 font-weight-bold">198</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Result 2018</h3>
                        <div className="card-options">
                            <a href="#"><i className="fa fa-file-excel-o" data-toggle="tooltip" title="Export Excel"></i></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>80%</strong></div>
                                    <div className="float-right"><small className="text-muted">Fashion</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow:"0" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>87%</strong></div>
                                    <div className="float-right"><small className="text-muted">Art & Design</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>91%</strong></div>
                                    <div className="float-right"><small className="text-muted">Computers</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-indigo" role="progressbar" style="width: 91%" aria-valuenow="6" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>35%</strong></div>
                                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-pink" role="progressbar" style="width: 35%" aria-valuenow="6" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>63%</strong></div>
                                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-orange" role="progressbar" style="width: 63%" aria-valuenow="36" aria-valuemin:"0" aria-valuemax:"100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <div className="row text-center">
                            <div className="col-6 border-right">
                                <label className="mb-0">Total Pass</label>
                                <div className="font-20 font-weight-bold">845</div>
                            </div>
                            <div className="col-6">
                                <label className="mb-0">Total Fail</label>
                                <div className="font-20 font-weight-bold">142</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="righttab-Students" role="tabpanel">
                <div id="users">
                    <div className="input-group mt-2 mb-2">
                        <input type="text" className="form-control search" placeholder="Search Student">
                    </div>
                    <ul className="right_chat list-unstyled list">
                        <li className="alfabet">A</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Abigail Churchill</span>
                                    <span className="message">Art & Design</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Alexandra Carr</span>
                                    <span className="message">Fashion</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Alison Berry</span>
                                    <span className="message">Fashion</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">B</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Bella Alan</span>
                                    <span className="message">Sports Science</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">C</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Caroline Alan</span>
                                    <span className="message">Sports Science</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Connor Campbell</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar7.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Charles Campbell</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">D</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar8.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Donna Hudson</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar9.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Dylan Jones</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">G</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar8.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Gordon Hudson</span>
                                    <span className="message">Sports Science</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar9.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Gabrielle Walker</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar10.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Gavin North</span>
                                    <span className="message">Computers</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">S</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">Stephanie Hudson</span>
                                    <span className="message">Sports Science</span>
                                </div>
                            </a>
                        </li>
                        <li className="alfabet">W</li>
                        <li>
                            <a href="javascript:void(0);" className="media">
                                <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="">
                                <div className="media-body">
                                    <span className="name">William Paige</span>
                                    <span className="message">Fashion</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user_chatbody chat_app">
                    <div className="card-header bline pt-1 pl-0 pr-0">
                        <h3 className="card-title">Abigail Churchill <small>Online</small></h3>
                        <div className="card-options">
                            <a href="javascript:void(0)" className="p-1" data-toggle="dropdown"><i className="fa fa-cog"></i></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item active" href="#">Online</a>
                                <a className="dropdown-item" href="#">Away</a>
                                <a className="dropdown-item" href="#">Do not disturb</a>
                                <a className="dropdown-item" href="#">Invisible</a>
                            </div>
                            <a href="javascript:void(0)" className="p-1 chat_close"><i className="fa fa-close"></i></a>
                        </div>
                    </div>
                    <div className="chat_windows">
                        <ul className="mb-0">
                            <li className="other-message">
                                <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                                <div className="message">
                                    <p className="bg-light-blue">Are we meeting today?</p>
                                    <span className="time">10:10 AM, Today</span>
                                </div>
                            </li>    
                            <li className="other-message">
                                <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                                <div className="message">
                                    <p className="bg-light-blue">Hi Aiden, how are you? How is the project coming along?</p>
                                    <p className="bg-light-blue">Are we meeting today?</p>
                                    <span className="time">10:15 AM, Today</span>
                                </div>
                            </li>                                    
                            <li className="my-message">
                                <div className="message">
                                    <p className="bg-light-gray">Project has been already finished and I have results to show you.</p>
                                    <div className="file_folder">
                                        <a href="javascript:void(0);">
                                            <div className="icon">
                                                <i className="fa fa-file-excel-o text-success"></i>
                                            </div>
                                            <div className="file-name">
                                                <p className="mb-0 text-muted">Report2017.xls</p>
                                                <small>Size: 68KB</small>
                                            </div>
                                        </a>
                                    </div>
                                    <span className="time">10:17 AM, Today</span>
                                </div>
                            </li>
                            <li className="other-message">
                                <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                                <div className="message">
                                    <div className="media_img">
                                        <img src="../assets/images/gallery/1.jpg" className="w100 img-thumbnail" alt="">
                                        <img src="../assets/images/gallery/2.jpg" className="w100 img-thumbnail" alt="">
                                    </div>
                                    <span className="time">10:15 AM, Today</span>
                                </div>
                            </li> 
                            <li className="other-message">
                                <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                                <div className="message">                                            
                                    <p className="bg-light-blue">Are we meeting today I have results?</p>
                                    <span className="time">10:18 AM, Today</span>
                                </div>
                            </li>
                            <li className="my-message">
                                <div className="message">
                                    <p className="bg-light-gray">Well we have good budget for the project</p>
                                    <span className="time">10:25 AM, Today</span>
                                </div>
                            </li>
                        </ul>
                        <div className="chat-message clearfix">
                            <a href="javascript:void(0);"><i className="icon-camera"></i></a>
                            <a href="javascript:void(0);"><i className="icon-camcorder"></i></a>
                            <a href="javascript:void(0);"><i className="icon-paper-plane"></i></a>
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Enter text here...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="righttab-Todo" role="tabpanel">
                <ul className="list-unstyled mb-0 todo_list">
                    <li>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked="">
                            <span className="custom-control-label">Report Panel Usag</span>
                        </label>
                    </li>
                    <li>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1">
                            <span className="custom-control-label">Report Panel Usag</span>
                        </label>
                    </li>
                    <li>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked="">
                            <span className="custom-control-label">New logo design for Angular Admin</span>
                        </label>
                    </li>
                    <li>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1">
                            <span className="custom-control-label">Design PSD files for Angular Admin</span>
                        </label>
                    </li>
                    <li>
                        <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" checked="">
                            <span className="custom-control-label">New logo design for Angular Admin</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div> --> */}
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">LearnUp<a href="javascript:void(0)" className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
        {/* <!-- <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#menu-uni">University</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu-admin">Admin</a></li>
        </ul> --> */}
        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li className="active"><a href="index.html"><i className="fa fa-dashboard"></i><span>Dashboard</span></a></li>
                        <li><a href="professors.html"><i className="fa fa-black-tie"></i><span>Professors</span></a></li>
                        {/* <!-- <li><a href="staff.html"><i className="fa fa-user-circle-o"></i><span>Staff</span></a></li> --> */}
                        <li><a href="students.html"><i className="fa fa-users"></i><span>Students</span></a></li>
                        {/* <!-- <li><a href="departments.html"><i className="fa fa-users"></i><span>Departments</span></a></li> -->
                        <!-- <li><a href="courses.html"><i className="fa fa-graduation-cap"></i><span>Courses</span></a></li>                         --> */}
                        <li><a href="library.html"><i className="fa fa-book"></i><span>Library</span></a></li>
                        {/* <!-- <li><a href="holiday.html"><i className="fa fa-bullhorn"></i><span>Holiday</span></a></li> -->
                        <!-- <li className="g_heading">Extra</li> --> */}
                        <li><a href="events.html"><i className="fa fa-calendar"></i><span>emploi de temps</span></a></li>
                        {/* <!-- <li><a href="app-chat.html"><i className="fa fa-comments-o"></i><span>Chat App</span></a></li>
                        <li><a href="app-contact.html"><i className="fa fa-address-book"></i><span>Contact</span></a></li>
                        <li><a href="app-filemanager.html"><i className="fa fa-folder"></i><span>FileManager</span></a></li>
                        <li><a href="our-centres.html"><i className="fa fa-map"></i><span>OurCentres</span></a></li>
                        <li><a href="gallery.html"><i className="fa fa-camera-retro"></i><span>Gallery</span></a></li> --> */}
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
                {/* <!-- <div className="page-header">
                    <div className="left">                        
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="What you want to find">
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="nav nav-pills">                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="page-empty.html">Empty page</a>
                                    <a className="dropdown-item" href="page-profile.html">Profile</a>
                                    <a className="dropdown-item" href="page-search.html">Search Results</a>
                                    <a className="dropdown-item" href="page-timeline.html">Timeline</a>
                                    <a className="dropdown-item" href="page-invoices.html">Invoices</a>
                                    <a className="dropdown-item" href="page-pricing.html">Pricing</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="login.html">Login</a>
                                    <a className="dropdown-item" href="register.html">Register</a>
                                    <a className="dropdown-item" href="forgot-password.html">Forgot password</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="404.html">404 error</a>
                                    <a className="dropdown-item" href="500.html">500 error</a>
                                </div>
                            </li>
                        </ul>
                        <div className="notification d-flex">
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-language"></i></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="">English</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/es.svg" alt="">Spanish</a>
                                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt="">japanese</a>
                                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="">France</a> 
                                </div>
                            </div>
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success nav-unread"></span></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <ul className="right_chat list-unstyled w350 p-0">
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="">
                                                <div className="media-body">
                                                    <span className="name">Donald Gardner</span>
                                                    <div className="message">It is a long established fact that a reader</div>
                                                    <small>11 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="">
                                                <div className="media-body">
                                                    <span className="name">Wendy Keen</span>
                                                    <div className="message">There are many variations of passages of Lorem Ipsum</div>
                                                    <small>18 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>
                                        <li className="offline">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="">
                                                <div className="media-body">
                                                    <span className="name">Matt Rosales</span>
                                                    <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                    <small>27 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>
                                        <li className="online">
                                            <a href="javascript:void(0);" className="media">
                                                <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="">
                                                <div className="media-body">
                                                    <span className="name">Phillip Smith</span>
                                                    <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                                    <small>33 mins ago</small>
                                                    <span className="badge badge-outline status"></span>
                                                </div>
                                            </a>                            
                                        </li>                        
                                    </ul>
                                    <div className="dropdown-divider"></div>
                                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                </div>
                            </div>
                            <div className="dropdown d-flex">
                                <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-primary nav-unread"></span></a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <ul className="list-unstyled feeds_widget">
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-blue"><i className="fa fa-check"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">Campaign <strong className="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-green"><i className="fa fa-user"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">New admission <strong className="text-green font-weight-bold">32</strong> in computer department.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-red"><i className="fa fa-info"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">6th sem result <strong className="text-red font-weight-bold">67%</strong> in computer department.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feeds-left">
                                                <span className="avatar avatar-azure"><i className="fa fa-thumbs-o-up"></i></span>
                                            </div>
                                            <div className="feeds-body ml-3">
                                                <p className="text-muted mb-0">New Feedback <strong className="text-azure font-weight-bold">53</strong> for university assessment.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="dropdown-divider"></div>
                                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                </div>
                            </div>
                            <div className="dropdown d-flex">
                                <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                    <span className="avatar" style="background-image: url(../assets/images/xs/avatar5.jpg)"></span> George</a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="page-profile.html"><i className="dropdown-icon fe fe-user"></i> Profile</a>
                                    <a className="dropdown-item" href="app-setting.html"><i className="dropdown-icon fe fe-settings"></i> Settings</a>
                                    <a className="dropdown-item" href="app-email.html"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> Inbox</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-send"></i> Message</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                                    <a className="dropdown-item" href="login.html"><i className="dropdown-icon fe fe-log-out"></i> Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> --> */}
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
                        {/* <!-- <li  className="nav-item"><a className="nav-link" data-toggle="tab" href="#Student-profile">Profile</a></li> --> */}
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
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Department"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="input-group">
                                            <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Admission Date"/>
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
                                        <th>Name</th>
                                        <th></th>
                                        <th>Department</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Admission Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A25</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar1} alt=""/>
                                        </td>
                                        <td><span className="font-16">Ken Smith</span></td>
                                        <td>Science</td>
                                        <td>ken@gmail.com</td>
                                        <td>(417) 646-7483</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A26</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar2} alt=""/>
                                        </td>
                                        <td><span className="font-16">Gerald K Smith</span></td>
                                        <td>M.C.A.</td>
                                        <td>Gerald@gmail.com</td>
                                        <td>(154) 646-2486</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A25</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar3} alt=""/>
                                        </td>
                                        <td><span className="font-16">Ken Smith</span></td>
                                        <td>Mechanical</td>
                                        <td>ken@gmail.com</td>
                                        <td>(417) 646-8377</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A27</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar4} alt=""/>
                                        </td>
                                        <td><span className="font-16">Alice A Smith</span></td>
                                        <td>M.B.B.S.</td>
                                        <td>Patricia@gmail.com</td>
                                        <td>(753) 646-4931</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A17</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar5} alt=""/>
                                        </td>
                                        <td><span className="font-16">Ken Smith</span></td>
                                        <td>Arts</td>
                                        <td>ken@gmail.com</td>
                                        <td>(417) 646-7642</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A11</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar6} alt=""/>
                                        </td>
                                        <td><span className="font-16">Corrine M Johnson</span></td>
                                        <td>Mechanical</td>
                                        <td>Gladys@gmail.com</td>
                                        <td>(349) 646-8377</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A12</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar7} alt=""/>
                                        </td>
                                        <td><span className="font-16">Alan Johnson</span></td>
                                        <td>Music</td>
                                        <td>ken@gmail.com</td>
                                        <td>(648) 646-8523</td>
                                        <td>04 Jan, 2019</td>
                                        <td>
                                            <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A23</td>
                                        <td className="w60">
                                            <img className="avatar" src={avatar8} alt=""/>
                                        </td>
                                        <td><span className="font-16">John Smith</span></td>
                                        <td>Civil</td>
                                        <td>Corrine@gmail.com</td>
                                        <td>(417) 646-7845</td>
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
                    <div className="tab-pane" id="Student-profile">
                        <div className="row">
                            <div className="col-xl-4 col-md-12">
                                <div className="card">
                                    <div className="card-body w_user">
                                        <div className="user_avtar">
                                            <img className="rounded-circle" src={smavatar1} alt=""/>
                                        </div>
                                        <div className="wid-u-info">
                                            <h5>Dessie Parks</h5>
                                            <p className="text-muted m-b-0">119 Peepee Way, Hilo, HI, 96720</p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5 className="mb-0">270</h5>
                                                    <small>Followers</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">310</h5>
                                                    <small>Following</small>
                                                </li>
                                                <li>
                                                    <h5 className="mb-0">908</h5>
                                                    <small>Liks</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">About Me</h3>
                                        <div className="card-options ">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                          <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a> 
                                        </div>
                                    </div>
									<div className="card-body">
										<p>Hello I am Celena Anderson a Clerk in Xyz College USA. I love to work with all my college staff and seniour professors.</p>
										<ul className="list-group">
                                            <li className="list-group-item">
                                                <b>Gender </b>
                                                <div className="pull-right">Female</div>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Department</b>
                                                <div className="pull-right">Mechanical</div>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Email </b>
                                                <div className="pull-right">test@example.com</div>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Phone</b>
                                                <div className="pull-right">1234567890</div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Study</strong></div>
                                                    <div className="float-right"><small className="text-muted">35%</small></div>
                                                </div>
                                                <div className="progress progress-xxs">
                                                    <div className="progress-bar bg-pink" role="progressbar" style={{width: "35%", ariaValuenow:"35", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Cricket</strong></div>
                                                    <div className="float-right"><small className="text-muted">72%</small></div>
                                                </div>
                                                <div className="progress progress-xxs">
                                                    <div className="progress-bar bg-blue" role="progressbar" style={{width: "72%", ariaValuenow:"72", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Music</strong></div>
                                                    <div className="float-right"><small className="text-muted">60%</small></div>
                                                </div>
                                                <div className="progress progress-xxs">
                                                    <div className="progress-bar bg-green" role="progressbar" style={{width: "60%", ariaValuenow:"60", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="row">
											<div className="col-md-4 col-sm-4 col-6">
												<div className="font-18 font-weight-bold">37</div>
												<div>Projects</div>
											</div>
											<div className="col-md-4 col-sm-4 col-6">
												<div className="font-18 font-weight-bold">51</div>
												<div>Tasks</div>
											</div>
											<div className="col-md-4 col-sm-4 col-6">
												<div className="font-18 font-weight-bold">61</div>
												<div>Uploads</div>
											</div>
										</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Timeline Activity</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
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
                                        <div className="summernote">
                                            Hello there,
                                            <br/>
                                            <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                                            <p>Please try <b>paste some texts</b> here</p>
                                        </div>
                                        <div className="timeline_item ">
                                            <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                                            <span><a href="javascript:void(0);">Elisse Joson</a> San Francisco, CA <small className="float-right text-right">20-April-2019 - Today</small></span>
                                            <h6 className="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                                            <div className="msg">
                                                <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                                                <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 12 Love</a>
                                                <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-comments"></i> 1 Comment</a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample">
                                                    <form className="well">
                                                        <div className="form-group">
                                                            <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                                        </div>
                                                        <button className="btn btn-primary">Submit</button>
                                                    </form>
                                                    <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                        <li>
                                                            <div className="avatar_img">
                                                                <img className="rounded img-fluid" src={avatar4} alt=""/>
                                                            </div>
                                                            <div className="comment_body">
                                                                <h6>Donald Gardner <small className="float-right font-14">Just now</small></h6>
                                                                <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>                                
                                        </div>
                                        <div className="timeline_item ">
                                            <img className="tl_avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                                            <span><a href="javascript:void(0);" title="">Dessie Parks</a> Oakland, CA <small className="float-right text-right">19-April-2019 - Yesterday</small></span>
                                            <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                                            <div className="msg">
                                                <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                                                <div className="timeline_img mb-20">
                                                    <img className="width100" src={img1} alt="Awesome Image"/>
                                                    <img className="width100" src={img2} alt="Awesome Image"/>
                                                </div>
                                                <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 23 Love</a>
                                                <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i className="fa fa-comments"></i> 2 Comment</a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample1">
                                                    <form className="well">
                                                        <div className="form-group">
                                                            <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                                        </div>
                                                        <button className="btn btn-primary">Submit</button>
                                                    </form>
                                                    <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                        <li>
                                                            <div className="avatar_img">
                                                                <img className="rounded img-fluid" src={avatar4} alt=""/>
                                                            </div>
                                                            <div className="comment_body">
                                                                <h6>Donald Gardner <small className="float-right font-14">Just now</small></h6>
                                                                <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                                <div className="timeline_img mb-20">
                                                                    <img className="width150" src={img7} alt="Awesome Image"/>
                                                                    <img className="width150" src={img8} alt="Awesome Image"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="avatar_img">
                                                                <img className="rounded img-fluid" src={avatar3} alt=""/>
                                                            </div>
                                                            <div className="comment_body">
                                                                <h6>Dessie Parks <small className="float-right font-14">1min ago</small></h6>
                                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>                                    
                                            </div>
                                        </div>
                                        <div className="timeline_item ">
                                            <img className="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
                                            <span><a href="javascript:void(0);" title="" >Rochelle Barton</a> San Francisco, CA <small className="float-right text-right">12-April-2019</small></span>
                                            <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                                            <div className="msg">
                                                <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                                                <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 7 Love</a>
                                                <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i className="fa fa-comments"></i> 1 Comment</a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample2">
                                                    <form className="well">
                                                        <div className="form-group">
                                                            <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                                        </div>
                                                        <button className="btn btn-primary">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        {/* <!-- <div className="card-options ">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div> --> */}
                                    </div>
                                    <form className="card-body">
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">First Name <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" placeholder="Enter First name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Last Name <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" placeholder="Enter Last name"/>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Roll No <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div> --> */}
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Email
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Registration Date <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Class <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department">
                                                    <option value="">Select...</option>
                                                    <option value="Category 1">Computer</option>
                                                    <option value="Category 2">Mechanical</option>
                                                    <option value="Category 3">Mathematics</option>
                                                    <option value="Category 3">Commerce</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Gender <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="gender">
                                                    <option value="">Select...</option>
                                                    <option value="Category 1">Male</option>
                                                    <option value="Category 2">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Mobile No. <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Departments <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Parents Mobile No. <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Date Of Birth  <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Date of Birth"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">upload fichier <span className="text-danger">*</span></label>
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
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Account Information</h3>
                                        <div className="card-options ">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>User Name</label>
                                                    <input type="text" className="form-control">
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="text" className="form-control">
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Confirm Password</label>
                                                    <input type="text" className="form-control">
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Account Information</h3>
                                        <div className="card-options ">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Facebook</label>
                                            <input type="text" className="form-control">
                                        </div>
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <input type="text" className="form-control">
                                        </div>
                                        <div className="form-group">
                                            <label>LinkedIN</label>
                                            <input type="text" className="form-control">
                                        </div>
                                        <div className="form-group">
                                            <label>Behance</label>
                                            <input type="text" className="form-control">
                                        </div>
                                        <div className="form-group">
                                            <label>dribbble</label>
                                            <input type="text" className="form-control">
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div> --> */}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- <div className="section-body">
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            Copyright © 2019 <a href="https://themeforest.net/user/puffintheme/portfolio">PuffinTheme</a>.
                        </div>
                        <div className="col-md-6 col-sm-12 text-md-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="../doc/index.html">Documentation</a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)">FAQ</a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="btn btn-outline-primary btn-sm">Buy Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div> --> */}
    </div>    
</div>
        // </div>
     );
}
 
export default Student;