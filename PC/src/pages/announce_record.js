import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

function Announce_record(){
	const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);
	const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_announcement_record',{id:id}).then((response)=>{
            
            //alert(response.data);

            setlist1(response.data);
        
    });
  }
	const closemodal=(e) =>{
        window.location="/Announce_record";
        
        }

        const onupdate=(e) =>{
    
            e.preventDefault();
            const id=document.getElementById('id').value;
            const announcement=document.getElementById('announcement').value;
    Axios.post('http://localhost:1351/api/updated_announcement_record',{id:id,announcement:announcement}).then((response)=>{
    
    
            
            //alert(response.data.message);
            window.location="/Announce_record";
            });
            
            
            }
    return(

<>

				<div class="main-container">
				<div class="page-header">
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="title">
								<h4 align="left">Announcement Records</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Announcement Records</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>



				<div class="pd-20 card-box mb-30">
					<div class="clearfix mb-20">
						<div class="pull-left">
							<h4 class="text-blue h4"><code>Records</code></h4>
							
						</div>
						
					</div>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">Sr. No.</th>
									
									<th scope="col">Date</th>
									<th scope="col">Announcement</th>
									
								</tr>
							</thead>
							<tbody>
							{list.map((val,index)=>{
                                            return(
								<tr>
									
									<th scope="row">{index+1}</th>
									<td>{val.date_of_announcement}</td>
									<td>{val.announcement}</td>
									<td><span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
										<i class="fa fa-pencil color-muted m-r-5" onClick={()=>showDetail(val._id)}  data-target="#myModal" data-toggle="modal"></i> 
										</a> 
										</span>
									</td>
									
								</tr>
								)})}
							</tbody>
						</table>
					</div>
				</div>
				</div>


{/* modal */}
<div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">


          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <div class="modal-body">
                {/* <h1>hello</h1> */}
            {rs.map((val1)=>{
                return(
                    <>
					<input type="text" value={val1._id} id="id" hidden />
                    <div class="html-editor pd-20 card-box mb-30">
					<h4 align="left" class="h4 text-blue">Edit Announcements...</h4>
					
					<textarea class="textarea_editor form-control border-radius-0" defaultValue={val1.announcement} id="announcement"></textarea>
					
				</div>
                            {/* <h1>hello2</h1> */}
                    </>
            )})}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={closemodal} >Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={onupdate} >Submit</button>
            </div>
          </div>

        </div>
      </div>

</>
    );
}


export default Announce_record;