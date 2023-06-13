import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <Link to="/Profile" class="nav-link">
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">Profile</span>
            </Link>
          </li>
          <li class="nav-item">
          <Link to="/" class="nav-link" >
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
              </Link>
          </li>
          <li class="nav-item">
          <Link to="/Student_list" class="nav-link" >
          <i class="icon-columns menu-icon"></i>
              <span class="menu-title">List</span>
              </Link>
          </li>
          {/* <li class="nav-item">
          <Link to="/list" class="nav-link" >
          <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Groups</span>
              </Link>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="icon-clock menu-icon"></i>
              <span class="menu-title">Time Table</span>
            </a>
          </li> */}
          <li class="nav-item">
          <Link to="/Announcements" class="nav-link" >
              <i class="icon-microphone menu-icon"></i>
              <span class="menu-title">Announcements</span>
              </Link>
          </li>
          <li class="nav-item">
          <Link to="/Meeting" class="nav-link" >
              <i class="icon-watch menu-icon"></i>
              <span class="menu-title">Meetings</span>
              </Link>
          </li>
          <li class="nav-item">
          <Link to="/Definitions" class="nav-link" >
              <i class="icon-folder menu-icon"></i>
              <span class="menu-title">Definitions</span>
            </Link>
          </li>
          <li class="nav-item">
          <Link to="/Report" class="nav-link" >
              <i class="icon-file menu-icon"></i>
              <span class="menu-title">Reports</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-contract menu-icon"></i>
              <span class="menu-title">Appeal</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <Link to="/Appeal" class="nav-link" >Do Appeal</Link></li>
                <li class="nav-item"> <Link to="/Solution" class="nav-link" >Solution</Link></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
          <Link to="/Assesstment" class="nav-link" >
              <i class="icon-map menu-icon"></i>
              <span class="menu-title">Final Assessment</span>
            </Link>
          </li>
        </ul>
      </nav>
      
        </>
    );
}

export default Sidebar;