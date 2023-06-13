import React from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect} from "react";

function Dashboard(){
	const[num,setnum]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_report1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum(count);
        });
    
      
    },[]);

	const[num1,setnum1]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_external1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum1(count);
        });
    
      
    },[]);

	const[num2,setnum2]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_schedule1').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum2(count);
        });
    
      
    },[]);

    const[num3,setnum3]=useState();
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
            let count = response.data.length;
             //alert(count);
             setnum3(count);
        });
    
      
    },[]);

    return(
<>

<div class="main-container">
		<div class="pd-ltr-20">
			<div class="card-box pd-20 height-100-p mb-30">
				<div class="row align-items-center">
					<div class="col-md-4">
						<img src="assests/images/banner-img.png" alt=""/>
					</div>
					<div class="col-md-8">
						<h4 class="font-20 weight-500 mb-10 text-capitalize">
							Welcome back <div class="weight-600 font-30 text-blue">Project Co-ordinator !</div>
						</h4>
						{/* <p class="font-18 max-width-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non repellendus debitis iure, 
						doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis.</p> */}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-3 mb-30">
					<div class="card-box height-100-p widget-style1">
						<div class="d-flex flex-wrap align-items-center">
                            
							<div class="progress-data">
								<img src="assests/images/file-icon.jpeg" alt="" />
							</div>
							<div class="widget-data">
								<div class="h4 mb-0">{num}</div>
								<div class="weight-600 font-14">Reports</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 mb-30">
					<div class="card-box height-100-p widget-style1">
						<div class="d-flex flex-wrap align-items-center">
							<div class="progress-data">
								<img src="assests/images/ppt.png" alt="" />
							</div>
							<div class="widget-data">
								<div class="h4 mb-0">{num1}</div>
								<div class="weight-600 font-14">PPTs</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 mb-30">
					<div class="card-box height-100-p widget-style1">
						<div class="d-flex flex-wrap align-items-center">
							<div class="progress-data">
								<img src="assests/images/request.png" alt=""/>
							</div>
							<div class="widget-data">
								<div class="h4 mb-0">{num2}</div>
								<div class="weight-600 font-14">Student Requests</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 mb-30">
					<div class="card-box height-100-p widget-style1">
						<div class="d-flex flex-wrap align-items-center">
							<div class="progress-data">
								<img src="assests/images/announce.png" alt="" />
							</div>
							<div class="widget-data">
								<div class="h4 mb-0">{num3}</div>
								<div class="weight-600 font-14">Announcements</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div class="faq-wrap">
					<h4 class="mb-20 h4 text-blue">Accordion example</h4>
					<div id="accordion">
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block" data-toggle="collapse" data-target="#faq1">
									Collapsible Group Item #1
								</button>
							</div>
							<div id="faq1" class="collapse show" data-parent="#accordion">
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq2">
									Collapsible Group Item #2
								</button>
							</div>
							<div id="faq2" class="collapse" data-parent="#accordion">
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq3">
									Collapsible Group Item #3
								</button>
							</div>
							<div id="faq3" class="collapse" data-parent="#accordion">
								<div class="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq4">
									Collapsible Group Item #4
								</button>
							</div>
							<div id="faq4" class="collapse" data-parent="#accordion">
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq5">
									Collapsible Group Item #5
								</button>
							</div>
							<div id="faq5" class="collapse" data-parent="#accordion">
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header">
								<button class="btn btn-block collapsed" data-toggle="collapse" data-target="#faq6">
									Collapsible Group Item #6
								</button>
							</div>
							<div id="faq6" class="collapse" data-parent="#accordion">
								<div class="card-body">
									<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
									<p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
								</div>
							</div>
						</div>
					</div>
			</div> */}
			
			<h5 class="h4 text-blue mb-10">List of Faculty</h5>
				<p class="mb-30"> <Link to='/Faculty_List'>See All</Link></p>
				<div class="row clearfix">
					<div class="col-lg-3 col-md-6 col-sm-12 mb-30">
						<div class="da-card">
							<div class="da-card-photo">
								<img src="assests/images/avatar.jpg" alt="" style={{height:"10vw",width:"10vw",position:"relative",left:"3vw"}}/>
								<div class="da-overlay">
									<div class="da-social">
										<ul class="clearfix">
											<li><a href="#"><i class="icon-copy fa fa-phone" aria-hidden="true"></i></a></li>
											<li><a href="#"><span class="icon-copy ti-email"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="da-card-content">
								<h5 class="h5 mb-10">Faculty 1</h5>
								<p class="mb-0">Head of the Department</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-30">
						<div class="da-card">
							<div class="da-card-photo">
								<img src="assests/images/avatar.jpg" alt="" style={{height:"10vw",width:"10vw",position:"relative",left:"3vw"}}/>
								<div class="da-overlay">
									<div class="da-social">
										<ul class="clearfix">
											<li><a href="#"><i class="icon-copy fa fa-phone" aria-hidden="true"></i></a></li>
											<li><a href="#"><span class="icon-copy ti-email"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="da-card-content">
								<h5 class="h5 mb-10">Faculty 2</h5>
								<p class="mb-0">Professor</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-30">
						<div class="da-card">
							<div class="da-card-photo">
								<img src="assests/images/avatar.jpg" alt="" style={{height:"10vw",width:"10vw",position:"relative",left:"3vw"}}/>
								<div class="da-overlay">
									<div class="da-social">
										<ul class="clearfix">
											<li><a href="#"><i class="icon-copy fa fa-phone" aria-hidden="true"></i></a></li>
											<li><a href="#"><span class="icon-copy ti-email"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="da-card-content">
								<h5 class="h5 mb-10">Faculty 3</h5>
								<p class="mb-0">Assistant Professor</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-12 mb-30">
						<div class="da-card">
							<div class="da-card-photo">
								<img src="assests/images/avatar.jpg" alt="" style={{height:"10vw",width:"10vw",position:"relative",left:"3vw"}}/>
								<div class="da-overlay">
									<div class="da-social">
										<ul class="clearfix">
											<li><a href="#"><i class="icon-copy fa fa-phone" aria-hidden="true"></i></a></li>
											<li><a href="#"><span class="icon-copy ti-email"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="da-card-content">
								<h5 class="h5 mb-10">Faculty 4</h5>
								<p class="mb-0">Assistant Professor</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br/>
			
	

</>
    );
}
export default Dashboard;