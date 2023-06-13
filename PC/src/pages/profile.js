import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from 'axios';

function Profile(){
	let pc=JSON.parse(localStorage.getItem("pc"));
	

    return(
        <>


		<div class="main-container">
<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Profile</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Profile</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>

				<div class="row">
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
						<div class="pd-20 card-box height-100-p">
						<div class="profile-photo">
								<a href="modal" data-toggle="modal" data-target="#modal" class="edit-avatar"><i class="fa fa-pencil"></i></a>
								<img src="assests/images/pc_avatar.jpg" alt="" class="avatar-photo"/>
								<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
											<div class="modal-body pd-5">
												<div class="img-container">
													<img id="image" src="assests/images/avatar.jpg" alt="Picture"/>
												</div>
											</div>
											<div class="modal-footer">
												<input type="submit" value="Update" class="btn btn-primary"/>
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							  <h5 class="text-center h5 mb-0">{pc.fname} &nbsp; {pc.lname}</h5>
							<p class="text-center text-muted font-14">Project Co-Ordinator</p>
							<div class="profile-info">
								<h5 class="mb-20 h5 text-blue">Contact Information</h5>
								<ul>
									<li>
										<span>Email Address:</span>
										{pc.email}
									</li>
									<li>
										<span>Phone Number:</span>
										{pc.mobile}
									</li>
									<li>
										<span>Date of Birth:</span>
										{pc.dob}
									</li>
									<li>
										<span>Gender:</span>
										{pc.gender}
									</li>
								</ul>
							</div>

							
						</div>
					</div>
				
				
				<div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
						
							<div class="profile-tab height-100-p">
								<div class="tab height-100-p">
								<div class="pd-20 card-box mb-30">
					<div class="clearfix">
						<div class="pull-left">
							<h4 class="text-blue h4">Personal Information</h4>
							<p class="mb-30"></p>
						</div>
					</div>
					<form>
						<div class="form-group row">
						<div class="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder=""  id="proj_def" disabled="disable" defaultValue={pc.fname}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" class="form-control" placeholder=""  id="proj_def" disabled="disable" defaultValue={pc.lname}/>
                        </div>
						</div>
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Email</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control"  type="email" defaultValue={pc.email}/>
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Telephone</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control"  type="tel" defaultValue={pc.mobile}/>
							</div>
						</div>
						{/* <div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Password</label>
							<div class="col-sm-12 col-md-10">
							<input type="password" class="form-control" placeholder=""  id="proj_des"/>
							</div>
						</div>
						<button class="btn btn-primary" >Update Information</button> */}
					</form>
					
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