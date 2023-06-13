import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';


function Meeting(){
  const closemodal=(e) =>{
     window.location="/Meeting"; 
     }

  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1351/api/get_schedule1').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);

    const[rs,setlist1]=useState([]);
    const showDetail = (id) =>
      {
        
        //alert(id);
          Axios.post('http://localhost:1351/api/getdata_schedule',{id:id}).then((response)=>{

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
      Axios.post('http://localhost:1351/api/meeting_reply',{reply:reply,id:id,status}).then((response)=>{
      
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
      window.location="/Meeting";
    };

  

    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Meetings Pending</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      {list.map((val)=>{
                        return(

                        <tr>
                          <th>Group id : {val.group_id}</th>
                          {/* <th>Project id : {val.proj_id}</th>
                          <th>Project title : {val.proj_title}</th> */}
                        </tr>  
                         )})}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0"></p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                        
                        <tr>
                          <th>Date of Request</th>
                          <th>Purpose</th>
                          <th>Meeting Date</th>
                          <th>Time</th>
                          <th></th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(

                        <tr>
                            <td>{val.requested_date}</td>
                            <td>{val.purpose}</td>
                            <td>{val.request_date}</td>
                            <td>{val.request_time}</td>
                            
                            <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Accept/Decline</button></td>
                             
                            <td>
                                    {val.schedule_status === 1 ? 
                                     <>
                                                                  
                                    <label class="badge badge-primary">Fixed</label>                                   
                                    
                                    
                                    </>:
                                    <></> }
                                    {val.schedule_status === 0 ? 
                                    <>
                                    <label class="badge badge-danger">Cancelled</label>  
                                    </>:
                                    <></>}
                                    {val.schedule_status === 2   ? <><label class="badge badge-success">In Progress</label>
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
            {/* <h1>hello</h1> */}
            {rs.map((val1)=>{
                return(
                    <>
            
            
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title"> <p class="card-description">
                    Request from <code>STUDENTS</code>.
                  </p> </h3>
                  
                  <p>GROUP ID : {val1.group_id}</p>
			            <p>For Purpose :- {val1.purpose}</p>
                  <p>On :-</p>
                  <p>Date : {val1.request_date}</p>
                  <p>Time : {val1.request_time}</p>
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
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={(e)=>reply(e,"0")}>Decline</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={(e)=>reply(e,"1")}>Accept</button>
            </div>
          </div>

        </div>
      </div>
        </>
    );
}

export default Meeting;