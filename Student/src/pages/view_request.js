import React from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useState, useEffect } from "react";

function View_request(){

    let stu=JSON.parse(localStorage.getItem("stu_email"));
    var enroll_no=stu.enroll_no;


    const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_schedule',{params:{enroll_no:enroll_no}}).then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

    return(
        <>
            <div class="content-body">

<div class="row page-titles mx-0">
    <div class="col p-md-0">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
            <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
        </ol>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h4>Meetings already Scheduled</h4>
                        <p class="text-muted">View <code>.scheduled</code>  Meetings</p>
                        
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

                            {list.slice(0,1).map((val,index)=>{
                                            return(


                                <tr>
                                    <th>{index+1}</th>
                                    {/* {list1.map((val1,index)=>{
                                            return( */}
                                    <th>{val.group_id}</th>
                                            {/* )})} */}
                                    <td>{val.schedule_data[0].requested_date}</td>
                                    <td>{val.schedule_data[0].purpose}</td>
                                    <td>{val.schedule_data[0].request_date}</td>
                                    <td>{val.schedule_data[0].request_time}</td>
                                    {/* <td>
                                    {val.schedule_status === 1 ?  (
                                                                              
                                           <label class="badge badge-success">Fixed</label>
                                        ):(
                                            <label class="badge badge-danger">Cancelled</label>
                                        )
                                                                              
                                    }
                                    </td> */}
                                    <td>{val.schedule_data[0].schedule_status === 1 ? 
                                     <>
                                                                  
                                    <label class="badge badge-primary">Fixed</label>                                   
                                    
                                    
                                    </>:
                                    <></> }
                                    {val.schedule_data[0].schedule_status === 0 ? 
                                    <>
                                    <label class="badge badge-danger">Cancelled</label>  
                                    </>:
                                    <></>}
                                    {val.schedule_data[0].schedule_status === 2   ? <><label class="badge badge-success">In Progress</label>
                                    </>:
                                    <></>}
                                    </td>
                                    <td>{val.schedule_data[0].reply}</td>
                                    
                                </tr>

                                )})}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div> 
        </div>
    </div>
</div>
</div>
        </>
    );
}

export default View_request;