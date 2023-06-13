import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import swal from 'sweetalert';
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Schedule(){

    const onpost=() =>{
        const groupid=document.getElementById('groupid').value;
        const purpose=document.getElementById('purpose').value;
        const rdate=document.getElementById('rdate').value;
        const rtime=document.getElementById('rtime').value;
        Axios.post('http://localhost:1351/api/schedule',{groupid:groupid,purpose:purpose,rdate:rdate,rtime:rtime}).then((response)=>{
        
        //alert(response.data.message);
        if(response.data.message){
        
            swal({
              title: "Request Sent!",
              //text: "Click ok to refresh the page.",
              type: "success"
            })
            .then(() => {
              window.location="/Schedule";
            });
            
          }
        });
        
        }

        let stu=JSON.parse(localStorage.getItem("stu_email"));
        var enroll_no=stu.enroll_no;

        const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_define',{params:{enroll_no:enroll_no}}).then((response)=>{
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
                                    <h4 class="card-title">Schedule Meetings</h4>
                                    <p class="text-muted">Use the form to  <code>.schedule meets </code> with your guides</p>
                                    <div class="basic-form">
                                    {list.map((val)=>{
                                            return(
                                                <>
                                        <div class="table-responsive">
                                            <table class="table table-stripped">
                                                <thead>
                                                    <tr>
                                                        <th>GROUP ID :- </th>
                                                        <tbody>
                                                            <td>{val.group_id}</td>
                                                        </tbody>
                                                        <th>PROJECT TITLE :- </th>
                                                        <tbody>
                                                            <td>{val.project_title}</td>
                                                        </tbody>
                                                        <th>PROJECT DEFINITION :- </th>
                                                        <tbody>
                                                            <td>{val.project_definition}</td>
                                                        </tbody>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        </>
                                    )})}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title"></h4>
                                            <h6 class="card-subtitle"></h6>
                                            {list.map((val)=>{
                                            return(
                                                <>
                                            <div class="form-group" hidden> 
                                            {/* hide after explaination to krup */}
                                                <label>GROUP ID</label>
                                                <input type="text" class="form-control" defaultValue={val.group_id} placeholder="" id="groupid"/>
                                            </div>
                                            </>
                                            )})}
                                            <div class="form-group">
                                                <label>Purpose</label>
                                                <input type="text" class="form-control" placeholder="" id="purpose"/>
                                            </div>
                                            <div class="row form-material">
                                                <div class="col-md-6">
                                                    <label class="m-t-20">Request for Date :</label>
                                                    <p class="text-muted m-b-20">just click <code>.mydatepicker</code> to add it.</p>
                                                    <input type="date" class="form-control" placeholder="" id="rdate"/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="m-t-20">Time :</label>
                                                    <p class="text-muted m-b-20">just click <code>.mytimepicker</code> to add it.</p>
                                                    <input type="time" class="form-control" id="rtime" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="text-center">
                                            <h5 class="box-title m-t-10">Datepicker</h5>
                                            <p class="text-muted m-b-20">You can take refernce for scheduling date with your guides.</p>
                                            <div>
                                                <Calendar/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1"></div>
                                    <button type="submit" class="btn btn-primary" onClick={onpost}>Submit</button>
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

export default Schedule;