import React from "react";
import { Link } from "react-router-dom";
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

    const[grpid,setgrpid]=useState();
    useEffect(()=>{
        Axios.get('http://localhost:1351/api/login').then((response)=>{
            let group_id = response.data.group_id;
        console.log(response.data);
        setgrpid(response.data);
        alert(group_id);

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
    
  let stu=JSON.parse(localStorage.getItem("stu_email"));
  //alert(stu.stu_email);
        Axios.get('http://localhost:1351/api/get_registerdata',{params:{semail:stu.stu_email}}).then((response)=>{
            let object={email:response.data[0].email,
                fname:response.data[0].fname,
                lname:response.data[0].lname,
                mobile:response.data[0].mobile,
                dob:response.data[0].dob,
                role:response.data[0].role,
                gender:response.data[0].gender,
                enroll_no:response.data[0].enroll_no
            };
            localStorage.setItem('stu_email',JSON.stringify(object)); //to store in string form
		let stu=JSON.parse(localStorage.getItem("stu_email"));
        console.log(response.data);
        setlist1(response.data);

        });
    
      
    },[]);
   
    return(
        <>
        <div class="content-body">
            <div class="container-fluid mt-3">
            <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-1">
                            <div class="card-body">
                                <h3 class="card-title text-white">Reports Submitted</h3>
                                <div class="d-inline-block">
                                    <h2 class="text-white">{num}</h2>
                                    <p class="text-white mb-0">Jan - April 2023</p>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-file-pdf-o"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-2">
                            <div class="card-body">
                                <h3 class="card-title text-white">PPTs</h3>
                                <div class="d-inline-block">
                                    <h2 class="text-white">{num1}</h2>
                                    <p class="text-white mb-0">Jan - April 2023</p>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-file-powerpoint-o"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-3">
                            <div class="card-body">
                                <h3 class="card-title text-white">Scheduled Meetings</h3>
                                <div class="d-inline-block">
                                    <h2 class="text-white">{num2}</h2>
                                    <p class="text-white mb-0">Jan - April 2023</p>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-users"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-4">
                            <div class="card-body">
                                <h3 class="card-title text-white">Announcements</h3>
                                <div class="d-inline-block">
                                    <h2 class="text-white">{num3}</h2>
                                    <p class="text-white mb-0">Jan - April 2023</p>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-bullhorn"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/* <div class="col-lg-13">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <h4>Table Hover</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div> */}
                {/* <div class="col-lg-2">
                    <div class="card">
                        <div class="card-title">
                            <h4 style={{position:"relative",left:"1.5vw",bottom:"-0.5vw"}}>Guides Allocated :</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/8.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Ana Liem</h5>
                                    <p class="m-0">Senior Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/5.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">John Abraham</h5>
                                    <p class="m-0">Store Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/7.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">John Doe</h5>
                                    <p class="m-0">Sales Man</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/1.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Mehedi Titas</h5>
                                    <p class="m-0">Online Marketer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-2">
                    <div class="card">
                        <div class="card-title">
                            <h4 style={{position:"relative",left:"1.5vw",bottom:"-0.5vw"}}>Project Partner :</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/stu_avatar.png" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Ana Liem</h5>
                                    <p class="m-0">Senior Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/5.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">John Abraham</h5>
                                    <p class="m-0">Store Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/7.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">John Doe</h5>
                                    <p class="m-0">Sales Man</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                    <img src="assests/images/users/1.jpg" class="rounded-circle" alt=""/>
                                    <h5 class="mt-3 mb-1">Mehedi Titas</h5>
                                    <p class="m-0">Online Marketer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
                <div class="card">
                <div class="card-body">
                    <div class="media media-reply">
                        {/* <img class="mr-3 circle-rounded" src="assests/images/avatar/3.png" width="50" height="50" alt="Generic placeholder image"/> */}
                        <div class="media-body">
                            <div class="d-sm-flex justify-content-between mb-2">
                                <h5 class="mb-sm-0">Announcements <small class="text-muted ml-3"></small></h5>
                                {/* <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Dropdown button</button> */}
                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Link 1</a> <a class="dropdown-item" href="#">Link 2</a> <a class="dropdown-item" href="#">Link 3</a>
                                </div>
                            </div>
                            
                            
                            {/* <ul>
                                <li class="d-inline-block"><img class="rounded" width="60" height="60" src="assests/images/avatar/1.png" alt=""/></li>
                                <li class="d-inline-block"><img class="rounded" width="60" height="60" src="assests/images/avatar/2.png" alt=""/></li>
                                <li class="d-inline-block"><img class="rounded" width="60" height="60" src="assests/images/avatar/4.png" alt=""/></li>
                                <li class="d-inline-block"><img class="rounded" width="60" height="60" src="assests/images/avatar/5.png" alt=""/></li>
                            </ul> */}
                        {list.map((val)=>{
                        return(
                            <>

                        <div class="media mt-3">
                            <img class="mr-3 circle-rounded circle-rounded" src="assests/images/pc_avatar.jpg" width="50" height="50" alt="Generic placeholder image"/>
                            <div class="media-body">
                                <div class="d-sm-flex justify-content-between mb-2">
                                    <h5 class="mb-sm-0"><small class="text-muted ml-3"> {val.date_of_announcement}</small></h5>
                                    <div class="media-reply__link">
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-up"></i></button>
                                        <button class="btn btn-transparent p-0 mr-3"><i class="fa fa-thumbs-down"></i></button>
                                        {/* <button class="btn btn-transparent p-0 ml-3 font-weight-bold">Reply</button> */}
                                    </div>
                                </div>
                                <p>{val.announcement}</p>
                            </div>
                        </div>
                        </>
            )})}
                    </div>
                </div>
                
                

               
            </div>
            </div>
            


              


            </div>
        </div>
        </>
    );
}

export default Dashboard;