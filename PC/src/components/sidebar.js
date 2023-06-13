import React from "react";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function Sidebar(){
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
		  localStorage.clear();
		  window.location ="/";
		} 
		else {
		}
	  });
	  
	};

    return(
<>
<div class="left-side-bar">
		<div class="brand-logo">
			<a href="index.html">
				<img src="assests/images/tech-logo.jpg" alt="" class="dark-logo"/>
				<img src="assests/images/tech-logo.jpg" alt="" class="light-logo"/>
			</a>
			<div class="close-sidebar" data-toggle="left-sidebar-close">
				<i class="ion-close-round"></i>
			</div>
		</div>
		<div class="menu-block customscroll">
			<div class="sidebar-menu">
				<ul id="accordion-menu">
                <li>		
						<Link to="/" class="dropdown-toggle no-arrow"><span class="micon dw dw-house-1"></span><span class="mtext">Dashboard</span></Link>
	
					</li>
                    

                    <li>
						
						<Link to="/Profile" class="dropdown-toggle no-arrow"><i class="micon dw dw-user"></i><span class="mtext">Profile</span></Link>
					
					</li>
                    <li>
						<div class="dropdown-divider"></div>
					</li>

					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-microphone-1"></span><span class="mtext"> Announcements </span>
						</a>
						<ul class="submenu">
							<li><Link to="/Add_announce">Add Announcements</Link></li>
							<li><Link to="/Announce_record">Announcement Record</Link></li>
							
						</ul>
					</li>

					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-file"></span><span class="mtext">Lists</span>
						</a>
						<ul class="submenu">
							<li><Link to="/Faculty_List">Faculty List</Link></li>
							<li><Link to="/Student_list">Student List</Link></li>
							
						</ul>
					</li>
					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-add-file"></span><span class="mtext">Allocation</span>
						</a>
						<ul class="submenu">
							<li><Link to="/Guides_Allocation">Guides Alloctaion</Link></li>
							<li><Link to="/Check_List">Check List</Link></li>
							
						</ul>
					</li>

                    <li>
						<div class="dropdown-divider"></div>
					</li>

                    <li>		
						<Link to="/Definition" class="dropdown-toggle no-arrow"><span class="micon dw dw-pen"></span><span class="mtext">Project Deffinition</span></Link>
	
					</li>

                    

                    <li>		
						<Link to="/Schedule" class="dropdown-toggle no-arrow"><span class="micon dw dw-wall-clock"></span><span class="mtext">Schedule</span></Link>
	
					</li>

                    <li>
						<div class="dropdown-divider"></div>
					</li>

					{/* <li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-edit-1"></span><span class="mtext">Reports</span>
						</a>
						<span class="micon dw dw-edit-1"></span><span class="mtext">Reports</span>
						<ul class="submenu">
							<li><Link to="/Report">Records</Link></li>
							<li><Link to="/Feedback">Feedback</Link></li>
							
						</ul>

					</li> */}

					<li>		
						<Link to="/Report" class="dropdown-toggle no-arrow"><span class="micon dw dw-edit-1"></span><span class="mtext">Records</span></Link>
					</li>
					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-browser2"></span><span class="mtext">Plea</span>
						</a>
						<ul class="submenu">
							<li><Link to="/Plea_faculty">From Faculty</Link></li>
							<li><Link to="/Plea_student">From Student</Link></li>
							
						</ul>
					</li>

					<li>
						<div class="dropdown-divider"></div>
					</li>

					<li>		
						<Link to="/Final" class="dropdown-toggle no-arrow"><span class="micon dw dw-presentation-2"></span><span class="mtext">Final Assessment</span></Link>
					</li>


				
                   
                    <li>
						<div class="dropdown-divider"></div>
					</li>

                    <button class='btn btn-primary' onClick={logout}>Logout</button>

				</ul>
			</div>
		</div>
	</div>
</>
    );
}
export default Sidebar;