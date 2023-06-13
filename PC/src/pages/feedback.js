import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Feedback(){
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
    return(
<>
<div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">

				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Reports Feedback</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page"> Reports Feedback</li>
								</ol>
							</nav>
						</div>
						<div class="col-md-6 col-sm-12 text-right">
							<div class="dropdown">
								<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
									January 2018
								</a>
								
							</div>
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
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
									<th scope="col">Tag</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td><span class="badge badge-primary">Primary</span></td>
								</tr>
								
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
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
									<th scope="col">Tag</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td><span class="badge badge-primary">Primary</span></td>
								</tr>
								
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