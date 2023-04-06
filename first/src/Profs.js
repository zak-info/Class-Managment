import React, { Component } from 'react';
import "./images/favicon2.png";
import "./css/bootstrap.min.css";
import "./css/materialdesignicons.min.css";
import "./css/tiny-slider.css";
import "./css/tiny-slider.css.map";
import "./css/swiper.min.css";
import "./css/style.min.css";
import "./css/style1.css";

// import "./js/app";
// import "./js/bootstrap.bundle.min";
// import "./js/counter.init";
// import "./js/js1";
// import "./js/tiny-slider";


import logo from "./images/Programming-amico.svg";
import bg from "./images/bg-home.png";
import shape from "./images/testi/shape.png"
import shape2 from "./images/testi/shape-2.png"
import shape3 from "./images/testi/shape-3.png"
import img1 from "./images/team/img1.png"
import img2 from "./images/team/img2.png"
import img3 from "./images/team/img3.png"






class Profs extends Component {
  componentDidMount() {
   

    const script1 = document.createElement("script");
    script1.src = "/js/bootstrap.bundle.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script4= document.createElement("script");
    script4.src = "/js/tiny-slider.js";
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement("script");
    script5.src = "/js/swiper.min.js";
    script5.async = true;
    document.body.appendChild(script5);



    const script6 = document.createElement("script");
    script6.src = "https://unpkg.com/swiper@8/swiper-bundle.min.js";
    script6.async = true;
    document.body.appendChild(script6);

    const script2 = document.createElement("script");
    script2.src = "/js/counter.init.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script = document.createElement("script");
    script.src = "/js/app.js";
    script.async = true;
    document.body.appendChild(script);

    const script3 = document.createElement("script");
    script3.src = "/js/js1.js";
    script3.async = true;
    document.body.appendChild(script3);

   
   

    
  }

  render() {
    var link = document.createElement("link");
    link.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    var link2 = document.createElement("link");
    link2.href = "https://unpkg.com/swiper@8/swiper-bundle.min.css";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    return (
      <div>
        <a href="javascript: void(0);" id="mode" className="mode-btn text-white rounded-end">
        <i className="uil uil-brightness mode-dark mx-auto"></i>
        <i className="uil uil-moon bx-spin mode-light"></i>
    </a>


    <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
        <div className="container-fluid custom-container">
            <a className="navbar-brand logo text-uppercase" href="index.html">
                <img src={bg} className="logo-light" alt="" height="34"/>
                <img src="./images/logo-light.png.png" className="logo-dark" alt="" height="34"/>
            </a>

            <button className="navbar-toggler me-3 order-2 ms-4" type="button" dataBsToggle="collapse"
                dataBsTarget="#navbarCollapse" ariaControls="navbarCollapse" ariaLabel="Toggle navigation">
                <i className="mdi mdi-menu"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto navbar-center">
                    <li className="nav-item active">
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                   
                    <li className="nav-item">
                        <a href="#testi" className="nav-link">profs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#blog" className="nav-link">Event</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
                <div className="ms-auto ps-2 ps-lg-0">
                    <a href="https://web.facebook.com/esisba.edu?_rdc=1&_rdr" className="btn btn-dark rounded-pill my-3 my-lg-0" >Login</a>
                </div>
            </div>
        </div>
    </nav>
    <section className="home" id="home" style={{backgroundImage: "./images/bg-home.png"}}>
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <div className="home-slider" id="home-slider">
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-item">
                                        <p className="text-warning fw-semibold mb-0">Bienvenue!</p>
                                        <div className="home-title mb-0 fw-bold h1">
                                            <span className="typewrite " data-period="2000"
                                                data-type='[ "ESI SBA.","École supérieure en informatique.","de Sidi Bel Abbès." ]'>
                                                <span className="wrap text-dark"></span>
                                            </span>
                                        </div>
                                        <p className="mt-3 text-muted">L'École supérieure en informatique 08 Mai 1945 de Sidi Bel Abbès est un établissement universitaire public, placé sous la tutelle du Ministère de l’Enseignement Supérieur et de la Recherche Scientifique,.</p>

                                        <div className="icon-item mt-4">
                                            <div className="d-flex">
                                                <a href="https://web.facebook.com/esisba.edu?_rdc=1&_rdr">
                                                    <div className="social-icon facebook avatar-sm">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </div>
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCJl5EHFqDq7W2bZA5Cw_uWA">
                                                    <div className="social-icon pinterest avatar-sm">
                                                        <i className="mdi mdi-youtube"></i>
                                                    </div>
                                                </a>
                                               
                                                <a href="https://www.linkedin.com/school/ecole-superieure-en-informatique-08-mai-1945-sidi-bel-abbes">
                                                    <div className="social-icon linkedin avatar-sm">
                                                        <i className="mdi mdi-linkedin"></i>
                                                    </div>
                                                </a>
                                               
                                            </div>

                                        </div>

                                        
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="my-image">
                                        <img src={logo} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                       

                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section testimonial" id="testi">
        <div className="shape-1">
            <img src={shape} alt="" className="img-fluid"/>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="text-center mb-5">
                        <h6 className="mb-0 text-muted fs-15 text-uppercase">ENSEIGNANTS</h6>
                        <h2>ANNUAIRE ENSEIGNANTS</h2>
                       
                    </div>
                </div>
            </div>

            <div className="swiper-container py-5">
                <div className="swiper-wrapper pt-3">
                    <div className="swiper-slide border-radius position-relative  " >
                        <div className="user-image">
                            <img src={img1} alt="" className="avatar-md rounded-circle"/>
                        </div>
                        <div className="text-center mt-4">
                           
                        </div>
                        <hr/>
                        <div className="user-info text-center">
                            <div className="user-info">
                                <h5 className="text-black mb-0">Benslimane Sidi Mohammed</h5>
                                <p className="mb-0 text-muted fs-14">Professeur</p>
                            </div>
                        </div>
                    </div>

 <div className="swiper-slide border-radius position-relative  ">
    <div className="user-image">
        <img src={img2} alt="" className="avatar-md rounded-circle"/>
    </div>
    <div className="text-center mt-4">
      
    </div>
    <hr/>
    <div className="user-info text-center">
        <div className="user-info">
            <h5 className="text-black mb-0">ACED Mohammed Reda
            </h5>
            <p className="mb-0 text-muted fs-14">Maître Assistant A</p>
        </div>
    </div>
</div>

 <div className="swiper-slide border-radius position-relative ">
    <div className="user-image">
        <img src={img3} alt="" className="avatar-md rounded-circle"/>
    </div>
    <div className="text-center mt-4">
       
    </div>
    <hr/>
    <div className="user-info text-center">
        <div className="user-info">
            <h5 className="text-black mb-0">AMAR BENSABER Djamel</h5>
            <p className="mb-0 text-muted fs-14">Professeur</p>
        </div>
    </div>
</div>
                   
                   
       </div>

                <div className="swiper-pagination"></div>
            </div>
        </div>

        <div className="shape-2">
            <img src={shape2} alt="" className="img-fluid"/>
        </div>

        <div className="shape-3">
            <img src={shape3} alt="" className="img-fluid"/>
        </div>
    </section>
      </div>
    );
  }
}

export default Profs;
