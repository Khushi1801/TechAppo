import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState,useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';

function Feedback(){
	const layoutRef = useRef(null);
	const handleClick = (ref) => {
   //alert(ref.current.className);
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

		const closemodal=(e) =>{
      
			window.location="/View_report";
			
			}
			const onmoreup=(e) =>{
				swal({
					title: "Can't Update any further!",
					text: "Already updated more than 3 reports.",
					type: "success"
				  })
				  .then(() => {
					window.location="/View_report";
				  });
				//window.location="/View_report";
				
				}

	const layoutRef2 = useRef(null);
	const handleClick2 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};
	
	const layoutRef3 = useRef(null);
	const handleClick3 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

	const layoutRef4 = useRef(null);
	const handleClick4 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

	const layoutRef5 = useRef(null);
	const handleClick5 = (ref) => {
	   
		if (ref?.current?.className.includes('show')) {
		  ref.current.className = 'collapse';
		} else {
		  ref.current.className = 'collapse show';
		}
		};

	const layoutRef6 = useRef(null);
	const handleClick6 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

	const layoutRef7 = useRef(null);
	const handleClick7 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

	const layoutRef8 = useRef(null);
	const handleClick8 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

	const layoutRef9 = useRef(null);
	const handleClick9 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

	const layoutRef10 = useRef(null);
	const handleClick10 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

	const layoutRef11 = useRef(null);
	const handleClick11 = (ref) => {
		   
			if (ref?.current?.className.includes('show')) {
			  ref.current.className = 'collapse';
			} else {
			  ref.current.className = 'collapse show';
			}
			};

			

		const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_report1').then((response)=>{
            let count = response.data.length;
            // alert(count);
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
								<h4 align="left">Reports Records</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page"> Reports Records</li>
								</ol>
							</nav>
						</div>
					
					</div>
				</div>
				
				
			
				
				<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4">Week-1</h4>
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
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">Updated Version</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 1" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
													<td>
														<tr>{val.rep_ver1}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a></tr><br/>
														<tr>{val.rep_ver2}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a></tr><br/>
														<tr>{val.rep_ver3}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a></tr><br/>
													</td>
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-2</h4>
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
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">Updated Version</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 2" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
													<td>
														<tr>{val.rep_ver1}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a></tr><br/>
														<tr>{val.rep_ver2}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a></tr><br/>
														<tr>{val.rep_ver3}</tr><br/>
														<tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a></tr><br/>
													</td>
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-3</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick3(layoutRef3)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef3}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 3" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-4</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick4(layoutRef4)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef4}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 4" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-5</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick5(layoutRef5)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef5}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 5" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-6</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick6(layoutRef6)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef6}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 6" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-7</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick7(layoutRef7)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef7}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 7" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-8</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick8(layoutRef8)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef8}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 8" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-9</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick9(layoutRef9)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef9}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 9" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-10</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick10(layoutRef10)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef10}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 10" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
							<h4 class="text-blue h4">Week-11</h4>
						</div>
						<div class="pull-right">
							<div class="btn btn-primary btn-sm scroll-click" onClick={() => handleClick11(layoutRef11)}> Show Records</div>
						</div>
					</div>
					
					<div class="collapse collapse-box" id="responsive-table" ref={layoutRef11}>
						<div class="code-box">
							
							<pre><code class="xml copy-pre" id="responsive-table-code">
                            <div class="table-responsive">
						<table class="table table-striped">
							<thead>
							<tr>
									<th scope="col">Group ID</th>
									<th scope="col">Date of Submission</th>
									<th scope="col">Original File</th>
									<th scope="col">D</th>
									<th scope="col">Updated Version</th>
									<th scope="col">D</th>
									<th scope="col">Date of Feedback</th>
									<th scope="col">Feedback</th>
								</tr>
							</thead>
							<tbody>
								{list.map((val,index)=>{
									return(
										<>
											<tr>
												{val.week === "Week 11" ?
												<>
													<td>{val.group_id}</td>
													<td>{val.requested_date}</td>
													<td>{val.report}</td>
													<td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>	
													<td>
														{val.rep_ver1}
														{val.rep_ver2}
														{val.rep_ver3}</td>
													
													<td>
														<a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a><br/>
														<a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a><br/>
													</td>
													
													<td></td>
													<td></td>
													
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
export default Feedback;