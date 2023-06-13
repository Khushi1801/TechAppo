import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function View_appeal(){

    let stu=JSON.parse(localStorage.getItem("stu_email"));
    var enroll_no=stu.enroll_no;


    const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_appeal',{params:{enroll_no:enroll_no}}).then((response)=>{
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
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h4>Solution of Appeals</h4>
                        <p class="text-muted">View <code>.solution</code>  of Appeal</p>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Group ID</th>
                                    <th>Date of Request</th>
                                    <th>Appeal</th>
                                    <th>Reply</th>
                                    <th>Date of Reply</th>
                                    {/* <th>Status</th> */}
                                </tr>
                            </thead>
                            <tbody>

                            {list.slice(0,1).map((val)=>{
                                            return(
                                <tr>
                                    <th>{val.group_id}</th>
                                    <th>{val.appeal_data[0].requested_date}</th>
                                    <td>{val.appeal_data[0].appeal}</td>
                                    <td>{val.appeal_data[0].reply}</td>
                                    <td>{val.appeal_data[0].date_of_reply}</td>
                                    {/* <td>
                                    {val.schedule_status === 1 ?  (
                                                                              
                                        <label class="badge badge-primary">Fixed</label>
                                        ):(
                                            <label class="badge badge-danger">Cancelled</label>
                                        )
                                                                                                                 
                                    }
                                    </td> */}
                                    {/* <td>
                                    {val.appeal_data[0].appeal_status === 1 ? 
                                     <>
                                                                  
                                    <label class="badge badge-primary">Viewed</label>                                   
                                    
                                    
                                    </>:
                                    <></> }
                                    {val.appeal_data[0].appeal_status === 0 ? 
                                    <>
                                    <label class="badge badge-danger">Disregard</label>  
                                    </>:
                                    <></>}
                                    {val.appeal_data[0].appeal_status === 2   ? <><label class="badge badge-success">In Progress</label>
                                    </>:
                                    <></>}
                                    </td> */}
                                        
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

export default View_appeal;