import React from "react";
import {Link} from 'react-router-dom';
import Axios from "axios";
import { useState, useEffect } from "react";

function Plea_student(){
	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_plea').then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

	const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_plea_data',{id:id}).then((response)=>{

            //alert(response.data);

            setlist1(response.data);
            
         
    });
  }

  function reply(e,name){

    e.preventDefault();
    var status;
    var a=name;
    if(name==="1")
    {
status=1;
//alert(status);
    }
    else{

      status=0;
      //alert(status);
    }
    const reply=document.getElementById('reply').value;
    const id=document.getElementById('id').value;
    Axios.post('http://localhost:1351/api/reply_to_stu',{reply:reply,id:id,status}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    // if(response.data.message){

    //   swal({
    //     title: "Replied!",
    //     //text: "Click ok to refresh the page.",
    //     type: "success"
    //   })
    //   .then(() => {
    //     window.location="/Req_fromstu";
    //   });
      
    // }
    
     
    });
    window.location="/Plea_student";
  };


    return(

<>
<div class="main-container">
<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Request from Student</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Request from Student</li>
								</ol>
							</nav>
						</div>
					
					</div>
				</div>

<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4"><code> Request from Student to Project Co-ordinator</code></h4>
							
						</div>
						
					</div>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Grp ID</th>
									<th scope="col">Student ID</th>
                  
									<th scope="col">Request Date</th>
                  <th scope="col">Request</th>
                  <th scope="col">Reply</th>
									
								</tr>
							</thead>
							<tbody>
							{list.map((val)=>{
                  return(
								<tr>
									<th>{val.group_id}</th>
									<td>{val.stu_id}</td>
									
									<td>{val.requested_date}</td>
									<td>{val.appeal}</td>
                  <td>{val.reply}</td>
									<td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal"> Accept / Decline</button> </td>
                  <td>
                      {val.appeal_status === 1 ? 
                       <>
                                                    
                      <label class="badge badge-primary">Viewed</label>                                   
                      
                      
                      </>:
                      <></> }
                      {val.appeal_status === 0 ?  
                      <>
                      <label class="badge badge-danger">Disregard</label>  
                      </>:
                      <></>}
                      {val.appeal_status === 2   ? <><label class="badge badge-success">In Progress</label>
                      </>:
                      <></>}
                    </td>
								</tr>
								)})}
                                
							</tbody>
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
                  <h3 class="card-title"> <p class="card-description">
                    Request from <code>STUDENTS</code>.
                  </p> </h3>
                  
                  <p>GROUP ID : {val1.group_id}</p>
            <p>Student ID : {val1.stu_id}</p>
			<p>Request : {val1.appeal}</p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden/>
                <textarea class="form-control" id="reply" rows="4" placeholder="Reply"></textarea>
                </div>
              </div>
              
              
            </form>
                  
                  </div>
                </div>
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={(e)=>reply(e,"0")}>Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={(e)=>reply(e,"1")}>We'll See</button>
            </div>
          </div>

        </div>
      </div>

</>
    );
}

export default Plea_student;