import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";
import swal from 'sweetalert';

function Appeal(){

    const onpost=() =>{
        //alert("heelo");
        const sid=document.getElementById('sid').value;
        const groupid=document.getElementById('groupid').value;
        const appeal=document.getElementById('appeal').value;
        Axios.post('http://localhost:1351/api/appeal',{sid: sid,groupid:groupid,appeal:appeal}).then((response)=>{
        
        //alert(response.data.message);
        //alert(response.data.message);
        if(response.data.message){
      
            swal({
              title: "Appealed!",
              //text: "Click ok to refresh the page.",
              type: "success"
            })
            .then(() => {
              window.location="/Appeal";
            });
            
          }


        });
        
        };


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
                    <h4 class="card-title">Appeal Form</h4>
                    <p class="text-muted">use the <code>.form</code> to send request to Project Co-ordinator.</p>
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
                                        
                                    
                            <div class="form-group mb-2">
                               
                                <input type="text" readonly="readonly" class="form-control-plaintext" defaultValue={enroll_no} id="sid" hidden/>
                                {/* hide it */}
                            </div>
                            <div class="form-group mb-2">
                                
                                <input type="text" readonly="readonly" class="form-control-plaintext" defaultValue={val.group_id} id="groupid" hidden/>
                                 {/* hide it */}
                            </div>
                            <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <label class="sr-only">Appeal</label>
                                <input type="text" class="form-control" placeholder="request" id="appeal"/>
                            </div>
                            <button type="submit" class="btn mb-1 btn-secondary" onClick={onpost}>Send Message <span class="btn-icon-right"><i class="fa fa-envelope"></i></span></button>
                        </form>
                        </>
                        )})}
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

export default Appeal;