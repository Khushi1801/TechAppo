import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from 'axios';

function Student_list(){
	
	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/getdata_studentdata').then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

    return(
            <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Student List </p>
                  
                </div>
              </div>
            </div>
            </div>

            <div class="row">
            {list.map((val)=>{
                return(
					<>
                <div class="col-lg-2 col-md-4 col-sm-12 mb-30">
                <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0"></p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
						<div class="card-body1">
            <img src="assets/images/stu_avatar.png" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw",height:"5vw",width:"5vw"}}/><br/><br/>
									<br/>
						<h5 class="h5 mb-10">{val.fname} &nbsp; {val.lname}</h5>
						<p class="mb-0">{val.email}</p>
						<p class="mb-0">{val.mobile}</p>
                        </div>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
                </>
				)})}
            </div>
            </>
    );
}

export default Student_list;