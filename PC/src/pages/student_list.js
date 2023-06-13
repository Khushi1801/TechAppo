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
<div class="main-container">
<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Student List</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Student List</li>
								</ol>
							</nav>
						</div>
					
					</div>
				</div>

				<div class="row clearfix">
				{list.map((val)=>{
                return(
					<>
					{/* {val.role === "student" ? 
                       <> */}
				<div class="col-lg-3 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
							<div class="card">
								<div class="card-header">
									<img src="assests/images/stu_avatar.png" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw",height:"5vw",width:"5vw"}}/><br/><br/>
									<p data-toggle="collapse" data-target="#faq1" style={{position:"relative",left:"1vw",top:"0.5vw",color:"blue"}}>
									{val.fname} &nbsp; {val.lname}
									</p>
								</div>
								<div id="faq1" class="collapse show" data-parent="#accordion">
									<div class="card-body1">
									<h5 class="h5 mb-10">{val.fname} &nbsp; {val.lname}</h5>
									<p class="mb-0">{val.email}</p>
									<p class="mb-0">{val.mobile}</p>
									{/* <p class="mb-0">Lorem ipsum dolor sit amet</p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* </>:
                      <></> } */}
				
				</>
				)})}
				{/* <div class="col-lg-2 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
						<div class="card">
							<div class="card-header">
							<img src="assests/images/users/6.jpg" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw"}}/><br/><br/>
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq2">
								Student 2
								</button>
							</div>
							<div id="faq2" class="collapse" data-parent="#accordion">
								<div class="card-body1">
								<h5 class="h5 mb-10">Don H. Rabon</h5>
								<p class="mb-0">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
						<div class="card">
							<div class="card-header">
							<img src="assests/images/users/2.jpg" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw"}}/><br/><br/>
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq3">
								Student 3
								</button>
							</div>
							<div id="faq3" class="collapse" data-parent="#accordion">
								<div class="card-body1">
								<h5 class="h5 mb-10">Don H. Rabon</h5>
								<p class="mb-0">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
						<div class="card">
							<div class="card-header">
							<img src="assests/images/users/5.jpg" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw"}}/><br/><br/>
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq4">
								Student 4
								</button>
							</div>
							<div id="faq4" class="collapse" data-parent="#accordion">
								<div class="card-body1">
								<h5 class="h5 mb-10">Don H. Rabon</h5>
								<p class="mb-0">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
						<div class="card">
							<div class="card-header">
							<img src="assests/images/users/7.jpg" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw"}}/><br/><br/>
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq5">
								Student 5
								</button>
							</div>
							<div id="faq5" class="collapse" data-parent="#accordion">
								<div class="card-body1">
								<h5 class="h5 mb-10">Don H. Rabon</h5>
								<p class="mb-0">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-12 mb-30">
					<div class="faq-wrap">
						<div id="accordion">
						<div class="card">
							<div class="card-header">
							<img src="assests/images/users/8.jpg" class="rounded-circle" alt="" style={{position:"relative",left:"1vw",top:"1vw"}}/><br/><br/>
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq6">
								Student 6
								</button>
							</div>
							<div id="faq6" class="collapse" data-parent="#accordion">
								<div class="card-body1">
								<h5 class="h5 mb-10">Don H. Rabon</h5>
								<p class="mb-0">Lorem ipsum dolor sit amet</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div> */}
					
			</div>
				</div>

</>
    );
}

export default Student_list;