import React from "react";
import  Link,{Components,useState}  from "react-router-dom";
import swal from 'sweetalert';

function Header(){
    let stu=JSON.parse(localStorage.getItem("stu_email"));
    
    const logout=() =>
  {
    swal({
      title: "Are you sure?",
      text: "You want to logout!?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((logout) => {
      if (logout) {
        let stu=JSON.parse(localStorage.getItem("stu_email"));
        localStorage.clear();
        window.location.replace("http://localhost:3002?id="+stu.email);
      } 
      else {
      }
    });
    
  }
    return(
        <>
        <div class="header">    
            <div class="header-content clearfix">
                
                {/* <div class="nav-control">
                    <div class="hamburger">
                        <span class="toggle-icon"><i class="icon-menu"></i></span>
                    </div>
                </div> */}
                
                <div class="header-left">
                    {/* <div class="input-group icons">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="search" class="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard"/>
                        <div class="drop-down animated flipInX d-md-none">
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Search"/>
                            </form>
                        </div>
                    </div> */}
                </div>
                <div class="header-right">
                    
                    <ul class="clearfix">
                        {/* <li class="icons dropdown"><a href="javascript:void(0)" data-toggle="dropdown">
                                <i class="mdi mdi-email-outline"></i>
                                <span class="badge badge-pill gradient-1">3</span>
                            </a>
                            <div class="drop-down animated fadeIn dropdown-menu">
                                <div class="dropdown-content-heading d-flex justify-content-between">
                                    <span class="">3 New Messages</span>  
                                    <a href="javascript:void()" class="d-inline-block">
                                        <span class="badge badge-pill gradient-1">3</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="icons dropdown"><a href="javascript:void(0)" data-toggle="dropdown">
                                <i class="mdi mdi-bell-outline"></i>
                                <span class="badge badge-pill gradient-2">3</span>
                            </a>
                            <div class="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                                <div class="dropdown-content-heading d-flex justify-content-between">
                                    <span class="">2 New Notifications</span>  
                                    <a href="javascript:void()" class="d-inline-block">
                                        <span class="badge badge-pill gradient-2">5</span>
                                    </a>
                                </div>
                            </div>
                        </li> */}
                        
                        <li class="icons dropdown">
                            <div class="user-img c-pointer position-relative"   data-toggle="dropdown">
                                <span class="activity active"></span>
                                <span>{stu.fname} &nbsp; {stu.lname}</span>&nbsp; &nbsp;
                                <img src="assests/images/stu_avatar.png" height="40" width="40" alt=""/>
                            </div>
                             
                            <div class="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                <div class="dropdown-content-body">
                                    <ul>
                                        
                                        {/* <li>
                                            <span>{stu.fname} &nbsp; {stu.lname}</span>
                                        </li> */}
                                        {/* <hr class="my-2"/> */}
                                        {/* <li>
                                            <a href="/Profile"><i class="icon-user"></i> <span>Profile</span></a>
                                        </li> */}
                                        <li><a href="#" onClick={()=>logout()}><i class="icon-key"></i> <span>Logout</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;