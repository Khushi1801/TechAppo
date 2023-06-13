import React from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect } from "react";

function Schedule(){
	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_schedule1').then((response)=>{
            console.log(response.data);
            setlist(response.data);

        });
    
      
    },[]);
    return(

<>
<div class="main-container">
<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Project Definition</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Project Definition</li>
								</ol>
							</nav>
						</div>
					
					</div>
				</div>

<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4"><code> schedule Details</code></h4>
							
						</div>
						
					</div>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
                                <th>SR No.</th>
                                    <th>Group ID</th>
                                    <th>Date of Request</th>
                                    <th>Purpose</th>
                                    <th>Request for Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Reply</th>
									
								</tr>
							</thead>
							<tbody>

                            {list.map((val,index)=>{
                                            return(


                                <tr>
                                    <th>{index+1}</th>
                                    <th>{val.group_id}</th>
                                    <td>{val.requested_date}</td>
                                    <td>{val.purpose}</td>
                                    <td>{val.request_date}</td>
                                    <td>{val.request_time}</td>
                                    {/* <td>
                                    {val.schedule_status === 1 ?  (
                                                                              
                                           <label class="badge badge-success">Fixed</label>
                                        ):(
                                            <label class="badge badge-danger">Cancelled</label>
                                        )
                                                                              
                                    }
                                    </td> */}
                                    <td>{val.schedule_status === 1 ? 
                                     <>
                                                                  
                                    <label class="badge badge-primary">Fixed</label>                                   
                                    
                                    
                                    </>:
                                    <></> }
                                    {val.schedule_status === 0 ? 
                                    <>
                                    <label class="badge badge-danger">Cancelled</label>  
                                    </>:
                                    <></>}
                                    {val.schedule_status === 2   ? <><label class="badge badge-success">In Progress</label>
                                    </>:
                                    <></>}
                                    </td>
                                    <td>{val.reply}</td>
                                    
                                </tr>

                                )})}

                            </tbody>
						</table>
					</div>
					<div class="collapse collapse-box" id="responsive-table">
						<div class="code-box">
							<div class="clearfix">
								<a href="javascript:;" class="btn btn-primary btn-sm code-copy pull-left"  data-clipboard-target="#responsive-table-code"><i class="fa fa-clipboard"></i> Copy Code</a>
								<a href="#responsive-table" class="btn btn-primary btn-sm pull-right" rel="content-y"  data-toggle="collapse" role="button"><i class="fa fa-eye-slash"></i> Hide Code</a>
							</div>
							<pre><code class="xml copy-pre" id="responsive-table-code">

							</code></pre>
						</div>
					</div>
				</div>
				</div>

</>
    );
}

export default Schedule;