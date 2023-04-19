import  { useState, useEffect } from 'react';





const SideBar = (props) => {
    // .content {
    //     flex-grow: 1;
    //     height: 100%;
    //   }
    // <div className="content">
    //     <div className='page'>
    //     <p style={{margin:"20px"}}>السلام عليكم</p>
    //     </div>
    
    // {dadShowText.map((dadt,index) => (
    //     <div key={index}>
    //     {dadt}
    //     </div>

    // ))}
   

    useEffect(()=> {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = "/assets/plugins/bootstrap/css/bootstrap.min.css";
        document.head.appendChild(link1); 

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = "/assets/plugins/summernote/dist/summernote.css";
        document.head.appendChild(link2); 

        const link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = "/assets/css/style.min.css";
        document.head.appendChild(link3); 
        const link4 = document.createElement('link');
        link4.rel = 'stylesheet';
        link4.href = "/assets/css/other.css";
        document.head.appendChild(link4); 

       

        return () => {
            document.head.removeChild(link1);
            document.head.removeChild(link2);
            document.head.removeChild(link3);
            document.head.removeChild(link4);

        } 
      },[]);

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
        //   document.body.appendChild(script7);
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

const [item,setItem]=useState("");  
useEffect(()=>{
    setItem(props.item)

},[])
// const item=props.itm


    
  

      return ( 
          <div >
        <div id="header_top" className="header_top">
        <div className="container">
            <div className="hleft">
                <a className="header-brand" href="/home"><i className="fa fa-graduation-cap brand-logo"></i></a>
                <div className="dropdown">
                    <a href="javascript:void(0)" className="nav-link icon menu_toggle"><i className="fe fe-align-center"></i></a>
                    <a href="javascript:void(0)" className="nav-link icon settingbar"><i className="fe fe-settings"></i></a>
                </div>
            </div>
            <div className="hright">
                <a href="/login" className="nav-link icon settingbar"><i className="fe fe-power"></i></a>                
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
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-gradient" checked/>
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
           
        </div>
    </div>
    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">LearnUp<a href="javascript:void(0)" className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle"></i></a></h5>
        =
        <div className="tab-content mt-3">
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li className={item === "home" ? "active" : ""}><a href="/home"><i className="fa fa-dashboard"></i><span>Dashboard</span></a></li>
                        <li className={item === "students" ? "active" : ""}><a href="/students"><i className="fa fa-users"></i><span style={{fontFamily: 'Tajawal,sans-serif'}}>التلاميذ</span></a></li>
                        <li className={item === "courses" ? "active" : ""} ><a href="/courses"><i className="fa fa-book"></i><span style={{fontFamily: 'Tajawal,sans-serif'}}>دروس</span></a></li>
                        <li className={item === "exams" ? "active" : ""}><a href="/exams"><i className="fa fa-black-tie"></i><span style={{fontFamily: 'Tajawal,sans-serif'}}>الإمتحانات</span></a></li>
                        <li className={item === "pass" ? "active" : ""}><a href="/exams"><i className="fa fa-black-tie"></i><span style={{fontFamily: 'Tajawal,sans-serif'}}>غرفة الإمتحان</span></a></li>
                        </ul>
                </nav>
            </div>
        </div>
    </div>
   
   </div>
       );
}
 
export default SideBar;