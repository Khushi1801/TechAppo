import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';

function Check_list(){
	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_allocation_record').then((response)=>{
			//alert(response.data);
            setlist(response.data);
        });
    
      
    },[]);

	const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_allocation_data',{id:id}).then((response)=>{
            
            //alert(response.data);

            setlist1(response.data);
        
    });
  }

  const ondelete = (id) =>{
	
var id=document.getElementById('id').value;
	
	swal({
	  title: "Are you sure?",
	  text: "You want to delete the allocation??",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((ondelete) => {
	  if (ondelete) {
		Axios.post('http://localhost:1351/api/delete_allocation',{id:id}).then((response)=>{
		  if(response.data.message){

			swal("Deleted!","success");
			
		  }
		  
	});

	window.location="/Check_list";
	  } 
	  else {
		window.location="/Check_list";
	  }
	});
	//const id=document.getElementById('id').value;
	//alert(id);
	}
 
	const closemodal=(e) =>{
	window.location="/Check_list";
	
	}


	// const onclick = () =>{
	// 	Axios.get('http://localhost:1351/api/grpdetails').then((response)=>{
    //         setlist(response.data);
	// 		alert("hello");
	// 		alert(response.data);
    //     });
	// }
    return(

<>
<div class="main-container">
<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Allocation List</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Allocation List</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>

<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4"><code> Guides Allocation List</code></h4>
							
						</div>
						
					</div>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Group ID</th>
                                    <th scope="col">Project Title</th>
                                    <th scope="col">Members</th>
                                    <th scope="col">Guide 1</th>
                                    <th scope="col">Guide 2</th>
									
								</tr>
							</thead>
							<tbody>
							{list.map((val)=>{
                                            return(
								<tr>
									<th scope="row">{val.group_id}</th>
									<td>{val.project_title}</td>
									<td>{val.stu_name}</td>
                                    <td>{val.allocate_data[0].guide1}</td>
                                    <td>{val.allocate_data[0].guide2}</td>
									<td><span><a href="#" data-toggle="tooltip" data-placement="top" title="Delete" >
										<i class="fa fa-trash color-muted m-r-5" onClick={()=>showDetail(val._id)}  data-target="#myModal" data-toggle="modal"></i> 
										</a> 
										</span>
									</td>
								</tr>

							)})}
							</tbody>

						{/* <tbody>
                            {list.map((val)=>{
                                            return(
                                <tr>
                                    <th scope="row">{val.group_id}</th>
                                    <td>{val.project_title}</td>
                                    <td>{val.stu_name}</td>
                                    <td>{val.define_data[0].guide1}</td>
                                    <td>{val.define_data[0].guide2}</td>
                                    <td><span><a href="#" data-toggle="tooltip" data-placement="top" title="Delete" >
                                        <i class="fa fa-trash color-muted m-r-5" onClick={()=>showDetail(val._id)}  data-target="#myModal" data-toggle="modal"></i> 
                                        </a> 
                                        </span>
                                    </td>
                                    <td><button class="btn btn-primary" onClick={onclick}>Click</button></td> 
                                </tr>
									
                            )})}
                            </tbody> */}

						</table>
					</div>
				</div>
				</div>




      {/* model */}

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">


          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <div class="modal-body"> 
            {rs.map((val1)=>{
                return(
                    <>
            
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Are you sure?</h4>
                  <p class="card-description">
                    You want to <code>DELETE</code> the allocation?
                  </p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden />
                                 
                </div>
              </div>
              
              
            </form>
                  
                  </div>
                </div>
              
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closemodal}>No</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={ondelete}>Yes</button>
            </div>
          </div>

        </div>
      </div>

</>
    );
}

export default Check_list;