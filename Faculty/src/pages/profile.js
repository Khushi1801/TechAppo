import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';
import swal from 'sweetalert';


function Profile(){
    let fac=JSON.parse(localStorage.getItem("fac_email"));

    const onupdate=() =>{
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
    
    return(
        <>
         
        <div class="row">
            <div class="col-lg-4 col-xl-3">
                <div class="card">
                    <div class="card-body">
						<div class="pd-20 card-box height-150-p">
                            <img src='./assets/images/avatar.jpg' style={{width:"9vw",position:"relative",left:"4vw"}}/><br/><br/><br/>
                            <h4 class="text-center h5 mb-0">{fac.fname} &nbsp; {fac.lname}</h4>
							<p class="text-center text-muted font-17">Faculty</p><br/>
                            <h5 class="text-center mb-20 h5 text-blue">Contact Information :-</h5><br/>
                            <ul class="card-profile__info">
                                
                                <li>
                                    <strong class="text-dark mr-4">Email</strong> 
                                    <span>{fac.email}</span>
                                </li>
                                <li class="mb-1">
                                    <strong class="text-dark mr-4">Mobile</strong> 
                                    <span>{fac.mobile}</span>
                                </li>
                                <li class="mb-1">
                                    <strong class="text-dark mr-4">Date of Birth</strong> 
                                    <span>{fac.dob}</span>
                                </li>
                                <li class="mb-1">
                                    <strong class="text-dark mr-4">Gender</strong> 
                                    <span>{fac.gender}</span>
                                </li>
                            </ul>
                            
							 
					    </div>
				    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 mb-30">
                <div class="card">
                    <div class="card-body">
                        <form>
                                                            
                            <h4 class="text-blue h5 mb-20">Personal Information</h4>
                            <div class="row">
                                <input class="form-control form-control-lg" type="text"  hidden defaultValue={fac.id} />
                                
                                <div class="form-group col-md-6">
                                    <label>First Name</label>
                                    <input class="form-control form-control-lg" type="text"  disabled="disable" defaultValue={fac.fname}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Last Name</label>
                                    <input class="form-control form-control-lg" type="text"  disabled="disable" defaultValue={fac.lname}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control form-control-lg" type="email" defaultValue={fac.email} id="email" disabled="disable"/>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input class="form-control form-control-lg" type="text" defaultValue={fac.mobile} id="mobile"/>
                            </div>  
                            {/* <div class="form-group">
                                <label>Change Password</label>
                                <input class="form-control form-control-lg" type="password" id="pwd"/>
                            </div> */}
                            {/* <div class="form-group">
                                <label>Confirm Password</label>
                                <input class="form-control form-control-lg" type="password" id="cpwd"/>
                            </div> */}
                            {/* <div class="form-group">
                                <div class="custom-control custom-checkbox mb-5">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1-1"/>
                                    <label class="custom-control-label weight-400" for="customCheck1-1">I agree to receive notification emails</label>
                                </div>
                            </div> */}
                            {/* <div class="form-group mb-0">
                                <input type="submit" class="btn btn-primary" value="Update Information" onClick={onupdate}/>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
          </div>
          
        </>
    );
}

export default Profile;