import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Assessment(){
  const[list,setlist]=useState([]);
  useEffect(()=>{
     
      Axios.get('http://localhost:1351/api/get_external1').then((response)=>{
          setlist(response.data);
      });
  
    
  },[]);
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Final Assesstments</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      {list.map((val)=>{
                                            return(
                        <tr>
                          <th>Group id : {val.group_id}</th>
                          {/* <th>Project id : </th>
                          <th>Project title : {val.project_title}</th> */}
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
                          <th>PPT name</th>
                          <th>view</th>
                          <th>Report name</th>
                          <th>view</th>
                        </tr>  
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                                            return(
                        <tr>
                            <td>{val.ppt}</td>
                            <td><a href={"http://localhost:1351/public/"+val.ppt} target="_blank"  >View</a></td>
                            <td>{val.report}</td>
                            <td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >View</a></td>
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

export default Assessment;