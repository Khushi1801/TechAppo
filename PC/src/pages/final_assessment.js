import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";

function Final(){
	const layoutRef = useRef(null);
	const handleClick = (ref) => {
   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

	const layoutRef1 = useRef(null);
	const handleClick1 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

		const layoutRef2 = useRef(null);
	const handleClick2 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

		const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_external1').then((response)=>{
            let count = response.data.length;
            setlist(response.data);
        });
    
      
    },[]);

    return(
<>
<div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">

				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Final Assessment</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Presentation PPT & Report Records</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>
				
				
			
				
				<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4">Presentation-1</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick(layoutRef)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
                        <thead>
								<tr>
								<th scope="col">#</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">PPT</th>
									<th scope="col">D</th>
									<th scope="col">Report</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.presentation === "Presentation 1" ?
												<>
													<td>{index+1}</td>
													<td>{val.requested_date}</td>
													<td>{val.ppt}</td>
													<td><a href={"http://localhost:1351/public/"+val.ppt} target="_blank"  >Click</a></td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
													<td>{val.date_of_reply}</td>
													<td>{val.reply}</td>
													<td>
													{val.schedule_status === 1 ?  (
                                                                              
														  <label class="badge badge-primary">Fixed</label>
														):(
															<label class="badge badge-danger">Cancelled</label>
														)
																												 
													}
													</td>
												</>:
												<></>}
									
								</tr>
										</>
									)
								})}
								
								
							</tbody>
						</table>
					</div>
							</code></pre>
						</div>
					</div>
				</div>
               
                <div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4">Presentation-2</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick1(layoutRef1)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef1}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">PPT</th>
									<th scope="col">D</th>
									<th scope="col">Report</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.presentation === "Presentation 2" ?
												<>
													<td>{index+1}</td>
													<td>{val.requested_date}</td>
													<td>{val.ppt}</td>
													<td><a href={"http://localhost:1351/public/"+val.ppt} target="_blank"  >Click</a></td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
													<td>{val.date_of_reply}</td>
													<td>{val.reply}</td>
													<td>
													{val.schedule_status === 1 ?  (
                                                                              
														  <label class="badge badge-primary">Fixed</label>
														):(
															<label class="badge badge-danger">Cancelled</label>
														)
																												 
													}
													</td>
												</>:
												<></>}
									
								</tr>
										</>
									)
								})}
								
								
							</tbody>
						</table>
					</div>
							</code></pre>
						</div>
					</div>
				</div>

				<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4">Final Presentation</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick2(layoutRef2)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef2}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">PPT</th>
									<th scope="col">D</th>
									<th scope="col">Report</th>
									<th scope="col">D</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.presentation === "Final Presentation" ?
												<>
													<td>{index+1}</td>
													<td>{val.requested_date}</td>
													<td>{val.ppt}</td>
													<td><a href={"http://localhost:1351/public/"+val.ppt} target="_blank"  >Click</a></td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
													<td>{val.date_of_reply}</td>
													<td>{val.reply}</td>
													
													
												</>:
												<></>}
									
								</tr>
										</>
									)
								})}
								
								
							</tbody>
						</table>
					</div>
							</code></pre>
						</div>
					</div>
				</div>
				
				
			</div>
			
		</div>
	</div>
		
	

	
	
</>
    );
}
export default Final;