import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from 'axios';
import swal from 'sweetalert';


function Guides_Allocation(){

	const cancel=()=>{
		window.location="/Guides_Allocation";
	}

	const onpost=()=>{
		const grp_id=document.getElementById('grp_id').value;
		const guide1=document.getElementById('guide1').value;
		const guide2=document.getElementById('guide2').value;
		Axios.post('http://localhost:1351/api/guide_allocation',{grp_id:grp_id, guide1:guide1,guide2:guide2}).then((response)=>{
      
		//alert(response.data.message);
		if(response.data.message){
        
			swal({
			  title: "Allocated!",
			  //text: "Click ok to refresh the page.",
			  type: "success"
			})
			.then(() => {
			  window.location="/Guides_Allocation";
			});
			
		  }
	});
	}

	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/getdata_facultydata').then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

	// const[de,setlist1]=useState([]);
    // useEffect(()=>{
       
    //     Axios.get('http://localhost:1351/api/get_dis_define').then((response)=>{
    //         setlist1(response.data);
	// 		alert(response.data);
    //     });
    
      
    // },[]);

	const [de, setList1] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:1351/api/get_dis_define').then(response => {
		setList1(response.data);
		//alert(response.data);
		});
	}, []);

	// useEffect(() => {
	// 	Axios.get('http://localhost:1351/api/get_dis_define')
	// 	  .then(response => response.json())
	// 	  .then(data => setList1(data))
	// 	  .catch(error => console.error(error));
		 
	//   }, []);
		
	  

    return(
<>
<div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
            <div class="page-header">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="title">
								<h4 align="left">Guides Allocation</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Guides Allocation</li>
								</ol>
							</nav>
						</div>
					</div>    
				</div>
				


				<div class="pd-20 card-box mb-30">
					<div class="clearfix">
						<div class="pull-left">
							<h4 class="text-blue h4">Allocation of Guides</h4>
							
						</div>
						
					</div>
                    <br/>
					<form>
						{/* <div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Group ID : </label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" type="text" placeholder="ID" id="grp_id"/>
							</div>
						</div> */}

						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Group ID : </label>
							<div class="col-sm-12 col-md-10">
							

								<select id="grp_id" class="custom-select col-12">
									<option>--Select--</option>
									{de.map((de)=>{
									return(
										<>
									<option>{de}</option>
										</>
									)})}
									

									{/* {this.state.de.map(recipdee => {
											return ( <div key={de.group_id}>
													<dt>{de.group_id}</dt>
													<dd>{de.group_id.join(",")}</dd>
													<hr></hr>
													</div>
													)
													
										})
										} */}

											<div>
											{/* <p>Select a group:</p>  */}
										{/* <select>
										{
										de.map(item =>
										( <option key={item} value={item}>{item}</option> )
										)
										} 
										</select> */}

										

											</div>
								</select>
								
							</div>
						</div>
						
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Guide 1 : </label>
							<div class="col-sm-12 col-md-10">
							

								<select id="guide1" class="custom-select col-12">
									<option selected="" >---Select Guide 1---</option>
									{list.map((val)=>{
									return(
										<>
									<option value={val.email}>{val.fname}&nbsp;{val.lname}</option>
										</>
									)})}
								</select>
								
							</div>
						</div>

                        <div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Guide 2 : </label>
							<div class="col-sm-12 col-md-10">
								<select id="guide2" class="custom-select col-12">
									<option selected="" >---Select Guide 2---</option>
									{list.map((val)=>{
									return(
										<>
									<option value={val.email}>{val.fname}&nbsp;{val.lname}</option>
										</>
									)})}
								</select>
							</div>
						</div>

						

						
						
						
						{/* <div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Date</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control date-picker" placeholder="Select Date" type="text"/>
							</div>
						</div> */}
						

                    <button class="btn btn-primary" onClick={onpost}>Submit</button>  <button class="btn btn-danger" onClick={cancel}>Cancel</button>

					</form>
					
				</div>
				


				
			

			</div>
			
		</div>
	</div>
</>
    );
}
export default Guides_Allocation;