import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
        <div class="nk-sidebar">           
            <div class="nk-nav-scroll">
                <ul class="metismenu" id="menu">
                    <li class="nav-label">Dashboard</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Profile">Profile</Link></li>
                            <li><Link to="/">Dashboard</Link></li>
                        </ul>
                    </li>
                    {/* <li class="nav-label">Allocation</li>
                    <li>
                    <ul aria-expanded="false">
                        <Link to="/list">
                            <span class="nav-text">List</span>
                        </Link>
                    </ul>
                        
                    </li> */}
                    <li class="nav-label">Announcements</li>
                    <li>
                    <ul aria-expanded="false">
                        <Link to="/Announcements">
                            <span class="nav-text">Announcements</span>
                        </Link>
                    </ul>
                        
                    </li>
                    <li class="nav-label">Definitions</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Define">Define</Link></li>
                            <li><Link to="/Edit_define">Editing the Definition</Link></li>
                        </ul>
                    </li>
                    <li class="nav-label">Scheduling</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Schedule">Schedule the meet</Link></li>
                            <li><Link to="/View_request">Scheduled Meetings</Link></li>
                        </ul>
                    </li>
                    <li class="nav-label">Report Time</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Add_report" aria-expanded="false">Submit reports</Link></li>
                            <li><Link to="/View_report" aria-expanded="false">Check Submission</Link></li>
                        </ul>
                    </li>
                    <li class="nav-label">Appeal</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Appeal" aria-expanded="false">Appeal</Link></li>
                            <li><Link to="/View_appeal" aria-expanded="false">Solution</Link></li>
                        </ul>
                    </li>
                    <li class="nav-label">Time of Final Exam</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Add_external" aria-expanded="false">Final Submission</Link></li>
                            <li><Link to="/View_external" aria-expanded="false">Check Submission</Link></li>
                        </ul>
                    </li>

                    
                    {/* <li class="nav-label">Feedbacks</li>
                    <li>
                        <ul aria-expanded="false">
                            <li><Link to="/Feedback" aria-expanded="false">Feedbacks</Link></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </div>
        </>
    );
}

export default Sidebar;