import React from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function Header(){

  let fac=JSON.parse(localStorage.getItem("fac_email"));

  var logout=() =>
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
        let fac=JSON.parse(localStorage.getItem("fac_email"));
        localStorage.clear();
        window.location.replace("http://localhost:3002?id="+fac.email);
      } 
      else {
      }
    });
    
  }
    return(
        <>
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="assets/images/tech-logo1.jpg" class="mr-2" alt="logo"/></a>
        <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/tech-logo1.jpg" alt="logo"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        {/* <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu"></span>
        </button> */}
        {/* <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span class="input-group-text" id="search">
                  <i class="icon-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul> */}
        <ul class="navbar-nav navbar-nav-right">
          
          <li class="nav-item nav-profile dropdown">
          
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            <span>{fac.fname} &nbsp; {fac.lname}</span> &nbsp;
              <img src="assets/images/avatar.jpg" alt="profile"/>
            </a>
            
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item" href='./Profile'>
                <i class="ti-settings text-primary"></i>
                Profile
              </a>
              <a class="dropdown-item" onClick={logout}>
                <i class="ti-power-off text-primary"></i>
                Logout
              </a>
            </div> 
            
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
    
        </>
    );
}

export default Header;