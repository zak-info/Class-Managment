import  { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { useHistory } from 'react-router-dom';
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
  
    const history = useHistory(); 
    const [username, setUsername] = useState("");
    const [level, setLevel] = useState("");
    const [est, setEst] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [students, setStudents] = useState([]);
    const [old, setOld] = useState([]);
    let studentIndex=0;

    useEffect(()=>{
    axios.get("http://localhost:4000/getStudents")
    .then(response => {
      console.log(response.data);

      setStudents(response.data);
      setOld(response.data)
    })
    .catch(error => {
      console.error(error);
    });
    },[])


    


    const handleAddStudent = async (event)=>{
        
        axios.get("http://localhost:4000/addStudent", { params: {_id:username+"1234", fullname: username,birthDay:'123123',gender:gender,est:est,level:level,address:address,mobile:mobile,password: "1234" } })
        .then(response => {
          console.log(response.data);
          axios.get("http://localhost:4000/getStudents")
                .then(response => {
                console.log(response.data);

                setStudents(response.data);
                setOld(response.data);
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


    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = function(event) {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
          console.log(jsonData);
          axios.get("http://localhost:4000/addWithFile",{params:jsonData})
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                console.error(error);
                });

        //   history.push("/");
          // Do something with the JSON data
        };
      
        reader.readAsBinaryString(file);
      }

      function handleFilter(event) {
        if (event.target.value.length){
        const filteredStudents =students.filter((student) => student.fullname.toLowerCase().includes(event.target.value.toLowerCase()) );
        setStudents(filteredStudents);
        }else{
            setStudents(old);
        }

      }

    async  function handleDeleteStudent(event){
        await axios.get("http://localhost:4000/deleteStudent",{params:{_id:event.target.value}})
                .then(response => {
                    if (response.data.deleted === "yes"){
                        console.log("yes");
                    //    const filteredStudents =  students.filter((student) => student._id !== event.target.value );
                
                    axios.get("http://localhost:4000/getStudents")
                    .then(response => {
                      console.log(response.data);
                
                      setStudents(response.data);
                      setOld(response.data)
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
        <div className="font-muli theme-cyan gradient">
<div className="page-loader-wrapper">
    <div className="loader">
    </div>
</div>
<div id="main_content">
    
   <SideBar item="student"/>
   
    
   
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
                                            <input type="text" className="form-control" placeholder="الاسم" onChange={handleFilter}/>
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
                                        <a href="javascript:void(0);" className="btn btn-sm btn-primary btn-block" title="">بحث</a>
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
                                        <th> المؤسسة</th>
                                        <th>السنة</th>
                                        
                                        <th>هاتف الولي</th>
                                        <th>تاريخ التسجيل </th>
                                        <th>عمليات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {students.map((student,index) => (
                                    <tr  key={index}>
                                        <td>{index+1}</td>
                                        {/* <td className="w60">
                                            <img className="avatar" src={avatar1} alt=""/>
                                        </td> */}
                                        <td><span className="font-16">{student.fullname}</span></td>
                                        <td>{student.est}</td>
                                        <td>{student.level}</td>
                                        <td>(213) {student.mobile}</td>
                                        <td>04 Jan, {student.birthDay}</td>
                                        <td>
                                            <button type="button" value={index} onClick={(event) => {setStudents([...students].slice(event.target.value,1))}} className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button>
                                            <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" onClick={handleDeleteStudent} value={student._id} className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button>
                                        </td>
                                    </tr>
                                    ))}
                                    
                                    
                                    
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
                                            <label className="col-md-3 col-form-label">المؤسسة <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department" value={est} onChange={(e) => setEst(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="سحوان">سحوان </option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-3 col-form-label">المستوا <span className="text-danger">*</span></label>
                                            <div className="col-md-9">
                                                <select className="form-control input-height" name="department" value={level} onChange={(e) => setLevel(e.target.value)}>
                                                    <option value="">Select...</option>
                                                    <option value="1">السنة الاولي</option>
                                                    <option value="2">السنة الثانية</option>
                                                    <option value="3">السنة الثالثة</option>
                                                    <option value="4">السنة الرابعة</option>
                                                   
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
                                            <button type="submit" className="btn btn-outline-secondary"><a href="/student"></a></button>
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