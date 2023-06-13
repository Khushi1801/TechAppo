import React from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';

function Add_announce(){

	const onpost=()=>{
		//alert("Hello");
		const announcement=document.getElementById('announcement').value;
        Axios.post('http://localhost:1351/api/announcement',{announcement:announcement}).then((response)=>{
        
        //alert(response.data.message);
		if(response.data.message){
        
			swal({
			  title: "Announced!",
			  //text: "Click ok to refresh the page.",
			  type: "success"
			})
			.then(() => {
			  window.location="/Add_announce";
			});
			
		  }
        });
        
	}
    return(

<>
<div class="mobile-menu-overlay"></div>

	<div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Announcement</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Announcement</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>

				<div class="html-editor pd-20 card-box mb-30">
					<h4 align="left" class="h4 text-blue">Add Announcements...</h4>
					
					<textarea class="textarea_editor form-control border-radius-0" placeholder="Enter text ..." id="announcement"></textarea>
					<br/>
					<button class="btn btn-primary" onClick={onpost}>Submit</button>
				</div>

				
			</div>
			
		</div>
	</div>
</>
    );
}

export default Add_announce;