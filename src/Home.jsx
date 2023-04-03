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

import dflt from "./assets/images/themes/default.png"
import dark from "./assets/images/themes/dark.png"
import rtl from "./assets/images/themes/rtl.png"






const Home = () => {
    const script4= document.createElement("script");
    script4.src = "/assets/bundles/counterup.bundle.js";
    script4.async = true;

       
    const script7 = document.createElement("script");
    script7.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script7.async = true;    


    const script1 = document.createElement("script");
    script1.src = "/assets/bundles/lib.vendor.bundle.js";
    script1.async = true;

    

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
        document.body.appendChild(script2);
        document.body.appendChild(script6);
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
                {/* <!-- <a href="javascript:void(0)" className="nav-link icon right_tab"><i className="fe fe-align-right"></i></a> --> */}
                <a href="login.html" className="nav-link icon settingbar"><i className="fe fe-power"></i></a>                
            </div>
        </div>
    </div>
    <div id="rightsidebar" className="right_sidebar">
        <a href="javascript:void(0)" className="p-3 settingbar float-right"><i className="fa fa-close"></i></a>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">Settings</a></li>
            {/* <!-- <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">Activity</a></li> --> */}
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
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>$36,132</strong></div>
                                    <div className="float-right"><small className="text-muted">Wells Fargo</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>80%</strong></div>
                                    <div className="float-right"><small className="text-muted">Fashion</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>63%</strong></div>
                                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-orange" role="progressbar" style="width: 63%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>91%</strong></div>
                                    <div className="float-right"><small className="text-muted">Computers</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-indigo" role="progressbar" style="width: 91%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>35%</strong></div>
                                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-pink" role="progressbar" style="width: 35%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
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
                                    <div className="progress-bar bg-green" role="progressbar" style="width: 80%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>87%</strong></div>
                                    <div className="float-right"><small className="text-muted">Art & Design</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-azure" role="progressbar" style="width: 87%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>91%</strong></div>
                                    <div className="float-right"><small className="text-muted">Computers</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-indigo" role="progressbar" style="width: 91%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="clearfix">
                                    <div className="float-left"><strong>35%</strong></div>
                                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-pink" role="progressbar" style="width: 35%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="clearfix">
                                    <div className="float-left"><strong>63%</strong></div>
                                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                                </div>
                                <div className="progress progress-xxs">
                                    <div className="progress-bar bg-orange" role="progressbar" style="width: 63%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
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
                <div className="d-flex justify-content-between align-items-center">
                    <div className="header-action">
                        <h1 className="page-title">Dashboard</h1>
                        <ol className="breadcrumb page-breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Ericsson</a></li>
                            <li className="breadcrumb-item"><a href="#">University</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </div>
                    <ul className="nav nav-tabs page-header-tab">
                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#admin-Dashboard">Dashboard</a></li>
                        {/* <!-- <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#admin-Activity">Activity</a></li> --> */}
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
                    {/* <!-- <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <a href="app-contact.html" className="my_sort_cut text-muted">
                                    <i className="fa fa-address-book"></i>
                                    <span>Contact</span>
                                </a>
                            </div>
                        </div>
                    </div> --> */}
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
                    {/* <!-- <div className="col-6 col-md-4 col-xl-2">
                         <div className="card">
                            <div className="card-body">
                                <a href="app-filemanager.html" className="my_sort_cut text-muted">
                                    <i className="fa fa-folder"></i>
                                    <span>FileManager</span>
                                </a>
                            </div>
                        </div>
                    </div>  --> */}
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
                    {/* <!-- <div className="col-6 col-md-4 col-xl-2">
                        <div className="card">
                            <div className="card-body">
                                <a href="holiday.html" className="my_sort_cut text-muted">
                                    <i className="fa fa-bullhorn"></i>
                                    <span>Holiday</span>
                                </a>
                            </div>
                        </div>
                    </div> --> */}
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="admin-Dashboard" role="tabpanel">
                        <div className="row clearfix">
                            {/* <!-- <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">University Report</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-sm-flex justify-content-between">
                                            <div className="font-12 mb-2"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></span></div>
                                            <div className="selectgroup w250">
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" value="low" className="selectgroup-input" checked="">
                                                    <span className="selectgroup-button">1D</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" value="medium" className="selectgroup-input">
                                                    <span className="selectgroup-button">1W</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" value="high" className="selectgroup-input">
                                                    <span className="selectgroup-button">1M</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" value="veryhigh" className="selectgroup-input">
                                                    <span className="selectgroup-button">1Y</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div id="apex-chart-line-column"></div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-xl-3 col-md-6 mb-2">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Fees</strong></div>
                                                    <div className="float-right"><small className="text-muted">35%</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-indigo" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-uppercase font-10">Compared to last year</span>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-2">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Donation</strong></div>
                                                    <div className="float-right"><small className="text-muted">61%</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-yellow" role="progressbar" style="width: 61%" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-uppercase font-10">Compared to last year</span>
                                            </div> 
                                            <div className="col-xl-3 col-md-6 mb-2">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Income</strong></div>
                                                    <div className="float-right"><small className="text-muted">87%</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-green" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-uppercase font-10">Compared to last year</span>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-2">
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>Expense</strong></div>
                                                    <div className="float-right"><small className="text-muted">42%</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-pink" role="progressbar" style="width: 42%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-uppercase font-10">Compared to last year</span>
                                            </div>                                                                       
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                        </div>                
                        {/* <!-- <div className="row clearfix row-deck">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Exam Toppers</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
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
                                    <div className="table-responsive" style="height: 310px;">
                                        <table className="table card-table table-vcenter text-nowrap table-striped mb-0">
                                            <tbody>
                                                <tr>
                                                    <th>No.</th>                                                    
                                                    <th>Name</th>
                                                    <th></th>
                                                    <th>Marks</th>
                                                    <th>%AGE</th>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Merri Diamond</div>
                                                        <div className="text-muted">Science</div>
                                                    </td>
                                                    <td>199</td>
                                                    <td>99.00</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Sara Hopkins</div>
                                                        <div className="text-muted">Mechanical</div>
                                                    </td>
                                                    <td>197</td>
                                                    <td>98.00</td>
                                                </tr>
                                                <tr>
                                                    <td>41</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Allen Collins</div>
                                                        <div className="text-muted">M.C.A.</div>
                                                    </td>
                                                    <td>197</td>
                                                    <td>98.00</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Erin Gonzales</div>
                                                        <div className="text-muted">Arts</div>
                                                    </td>
                                                    <td>194</td>
                                                    <td>97.00</td>
                                                </tr>
                                                <tr>
                                                    <td>57</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Claire Peters</div>
                                                        <div className="text-muted">Science</div>
                                                    </td>
                                                    <td>192</td>
                                                    <td>95.00</td>
                                                </tr>
                                                <tr>
                                                    <td>85</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Claire Peters</div>
                                                        <div className="text-muted">Science</div>
                                                    </td>
                                                    <td>192</td>
                                                    <td>95.00</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td className="w40">
                                                        <div className="avatar">
                                                            <img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="avatar">
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Claire Peters</div>
                                                        <div className="text-muted">Science</div>
                                                    </td>
                                                    <td>191</td>
                                                    <td>95.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <div className="font-14"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">View All</a></span></div>
                                        <div>
                                            <button type="button" className="btn btn-primary">Export</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Performance</h3>
                                    </div>
                                    <div className="card-body">
                                        <div id="apex-radar-multiple-series"></div>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
                        <div className="row">
                            <div className="col-md-12">
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