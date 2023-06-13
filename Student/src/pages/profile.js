import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from 'axios';

function Profile(){

    let stu=JSON.parse(localStorage.getItem("stu_email"));
   

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
        <div class="col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="media align-items-center mb-4">
                        <img class="mr-3" src="assests/images/stu_avatar.png" width="80" height="80" alt=""/>
                        <div class="media-body">
                            <h3 class="mb-0"></h3>
                        </div>
                    </div>

                    <h4>About Me</h4>
                    <p class="text-muted">Hi, I'm  {stu.fname}, has recently started the journey as Software Developer.</p>
                    <ul class="card-profile__info">
                        <li class="mb-1"><strong class="text-dark mr-4">Mobile</strong> <span>{stu.mobile}</span></li>
                        <li class="mb-1"><strong class="text-dark mr-4">Email</strong> <span>{stu.email}</span></li>
                        <li class="mb-1"><strong class="text-dark mr-4">DOB</strong> <span>{stu.dob}</span></li>
                        <li class="mb-1"><strong class="text-dark mr-4">Gender</strong> <span>{stu.gender}</span></li>
                    </ul>
                </div>
            </div>  
        </div>
        <div class="col-lg-8 col-xl-9">
           

            <div class="card">
                <div class="card-body">
                <div class="basic-form">
                <h4 class="text-blue h5 mb-20">Edit Your Personal Setting</h4>
                                        
                                        
                                        <div class="row">
                                            <div class="form-group col-md-6">
                                                <label>First Name</label>
                                                <input type="text" class="form-control" placeholder="" defaultValue={stu.fname} id="proj_def" disabled="disable"/>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>Last Name</label>
                                                <input type="text" class="form-control" placeholder="" defaultValue={stu.lname} id="proj_def" disabled="disable"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" class="form-control" placeholder="" defaultValue={stu.email} id="proj_def"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input type="textarea" class="form-control" placeholder="" defaultValue={stu.mobile} id="proj_des"/>
                                        </div>
                                        {/* <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder=""  id="proj_des"/>
                                        </div>
                                        <div class="form-group">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary" >Update Information</button>
                                        </div> */}
                                        
                                        
                                  
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

export default Profile;