import React from "react";
import Axios from 'axios';
import { useState, useEffect} from "react";


function Dashboard(){

  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);

    const[num,setnum]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_report1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum(count);
        });
    
      
    },[]);

    const[num1,setnum1]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_external1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum1(count);
        });
    
      
    },[]);

    const[num2,setnum2]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_schedule1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum2(count);
        });
    
      
    },[]);

    const[num3,setnum3]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum3(count);
        });
    
      
    },[]);

    const[list1,setlist1]=useState([]);
    useEffect(()=>{
    
  let fac=JSON.parse(localStorage.getItem("fac_email"));
  
        Axios.get('http://localhost:1351/api/get_registerdata',{params:{semail:fac.fac_email}}).then((response)=>{
          const a=response.data[0]._id;
          console.log("My id is"+a);
            let object={email:response.data[0].email,
                fname:response.data[0].fname,
                lname:response.data[0].lname,
                mobile:response.data[0].mobile,
                dob:response.data[0].dob,
                role:response.data[0].role,
                gender:response.data[0].gender,
                enroll_no:response.data[0].enroll_no,
                id:a
            };
            localStorage.setItem('fac_email',JSON.stringify(object)); //to store in string form
		
        console.log(response.data);
        setlist1(response.data);

        });
    
      
    },[]);

    return(
        <>
          <div class="row">
            <div class="col-md-8 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Welcome Faculty</h3>
                  <h6 class="font-weight-normal mb-0">All systems are running smoothly! You have <span class="text-primary">3 unread alerts!</span></h6>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                   
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>  
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card tale-bg">
                <div class="card-people mt-auto">
                  <img src="assets/images/dashboard/people.svg" alt="people"/>
                  <div class="weather-info">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin transparent">
              <div class="row">
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-tale">
                    <div class="card-body">
                      <p class="mb-4">PPTs</p>
                      <p class="fs-30 mb-2">{num1}</p>
                      <p><span class="float-right display-5 opacity-5"><i class="icon-folder menu-icon"></i></span></p>
                      {/* <p>10.00% (30 days)</p> */}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <div class="card card-dark-blue">
                    <div class="card-body">
                      <p class="mb-4">Reports</p>
                      <p class="fs-30 mb-2">{num}</p>
                      <p><span class="float-right display-5 opacity-5"><i class="icon-file menu-icon"></i></span></p>
                      {/* <p>22.00% (30 days)</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div class="card card-light-blue">
                    <div class="card-body">
                      <p class="mb-4">Number of Meetings</p>
                      <p class="fs-30 mb-2">{num2}</p>
                      <p><span class="float-right display-5 opacity-5"><i class="icon-head menu-icon"></i></span></p>
                      {/* <p>2.00% (30 days)</p> */}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 stretch-card transparent">
                  <div class="card card-light-danger">
                    <div class="card-body">
                      <p class="mb-4">Number of Requests</p>
                      <p class="fs-30 mb-2">{num3}</p>
                      <p><span class="float-right display-5 opacity-5"><i class="icon-clock menu-icon"></i></span></p>
                      {/* <p>0.22% (30 days)</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 stretch-card grid-margin">
              <div class="card">
              {/* <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Dropdown button</button>
                  <div class="dropdown-menu"><a class="dropdown-item" href="#">Link 1</a> <a class="dropdown-item" href="#">Link 2</a> <a class="dropdown-item" href="#">Link 3</a>
                  </div> */}
                <div class="card-body">
                  <p class="card-title">Announcements  </p>
                  
                  <ul class="icon-data-list">
                  {list.map((val)=>{
                        return(
                            <>
                    <li>
                      <div class="d-flex">
                        <img src="assets/images/pc_avatar.jpg" alt="user"/>
                        <div>
                          <p class="mb-0">{val.announcement}</p>
                          <small>{val.date_of_announcement}</small>
                          <p></p>
                          <p></p>
                          <p><br/></p>
                        </div>
                      </div>
                    </li>
                    </>
            )})}
                    
                  </ul>
                  
                </div>
              </div>
            </div>
          
        </>
    );
}

export default Dashboard;