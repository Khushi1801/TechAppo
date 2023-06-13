import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import Axios from 'axios';

function Solution(){
  const[list,setlist]=useState([]);
  useEffect(()=>{
     
      Axios.get('http://localhost:1351/api/get_fappeal').then((response)=>{
          setlist(response.data);
      });
  
    
  },[]);

    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Reply from Project Co-ordinator</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      {list.map((val)=>{
                        return(
                        <tr>
                          <th>id : {val.fid}</th>
                          <th>name : {val.f_name}</th>
                        </tr>  
                         )})}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0"></p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        <tr>
                          <th>Request date</th>
                          <th>Appeal</th>
                          <th>Reply</th>
                          <th>Reply date</th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(
                        <tr>
                            <td>{val.requested_date}</td>
                            <td>{val.appeal}</td>
                            <td>{val.reply}</td>
                            <td>{val.date_of_reply}</td>
                            <td>
                                    {val.fappeal_status === 1 ? 
                                     <>
                                                                  
                                    <label class="badge badge-primary">Viewed</label>                                   
                                    
                                    
                                    </>:
                                    <></> }
                                    {val.fappeal_status === 0 ? 
                                    <>
                                    <label class="badge badge-danger">Disregard</label>  
                                    </>:
                                    <></>}
                                    {val.fappeal_status === 2   ? <><label class="badge badge-success">In Progress</label>
                                    </>:
                                    <></>}
                            </td>
                            
                        </tr>
                            )})}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </>
    );
}

export default Solution;