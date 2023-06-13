import React from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useState,useEffect } from "react";
import swal from 'sweetalert';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Add_report(){

    // const onpost=() =>{
    //     alert("heelo");
    //     const group_id=document.getElementById('group_id').value;
    //     const sd=document.getElementById('sd').value;
    //     const ed=document.getElementById('ed').value;
    //     const file=document.getElementById('file').value;
    //     Axios.post('http://localhost:1351/api/report',{group_id:group_id,sd:sd,ed:ed,file:file}).then((response)=>{
        
    //     alert(response.data.message);
    //     });
        
    //     }

        const[A_file,setfilename] = useState(""); 
 
        const onpost=() =>{
      
            //alert("heelo");
        const group_id=document.getElementById('groupid').value;
        const week=document.getElementById('week').value;
        
     
          var data = new FormData();
          data.append('rpimage',A_file);
          data.append('group_id',group_id);
          data.append('week',week);
        
          var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
          };
          
      
      
          //const date=document.getElementById('{date}').value;
          Axios.post('http://localhost:1351/api/report',data,config).then((response)=>{
          
          ///Response
          //alert(response.data.message);
          if(response.data.message){
      
            swal({
              title: "Submitted Reported!",
              //text: "Click ok to refresh the page.",
              type: "success"
            })
            .then(() => {
              window.location="/Add_report";
            });
            
          }
          
          });
          
          };

          let stu=JSON.parse(localStorage.getItem("stu_email"));
        var enroll_no=stu.enroll_no;

        const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_define',{params:{enroll_no:enroll_no}}).then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

    return(
        <>
            <div class="content-body">

<div class="row page-titles mx-0">
    <div class="col p-md-0">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
            <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
        </ol>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Add Weekly Reports</h4>
                    <p class="text-muted">Use the form to  <code>.report </code> your guides</p>
                    <div class="basic-form">
                    {list.map((val)=>{
                                            return(
                                                <>
                                        <div class="table-responsive">
                                            <table class="table table-stripped">
                                                <thead>
                                                    <tr>
                                                        <th>GROUP ID :- </th>
                                                        <tbody>
                                                            <td>{val.group_id}</td>
                                                        </tbody>
                                                        <th>PROJECT TITLE :- </th>
                                                        <tbody>
                                                            <td>{val.project_title}</td>
                                                        </tbody>
                                                        <th>PROJECT DEFINITION :- </th>
                                                        <tbody>
                                                            <td>{val.project_definition}</td>
                                                        </tbody>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        </>
                                    )})}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        {/* <div class="card-body">
                            <h4 class="card-title"></h4>
                            <h6 class="card-subtitle"></h6>
                            <div class="row form-material">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Start Date</h5>
                                        <input class="form-control input-limit-datepicker" type="date" name="daterange" id="sd"/>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="card-body">
                            <h4 class="card-title"></h4>
                            <h6 class="card-subtitle"></h6>
                            <div class="row form-material">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">End Date</h5>
                                        <input class="form-control input-limit-datepicker" type="date" name="daterange" id="ed"/>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div class="card-body">
                            <h4 class="card-title"></h4>
                            <h6 class="card-subtitle"></h6>
                            {list.map((val)=>{
                                            return(
                                                <>
                                            <div class="form-group" hidden> 
                                            {/* hide after explaination to krup */}
                                                <label>GROUP ID</label>
                                                <input type="text" class="form-control" defaultValue={val.group_id} placeholder="" id="groupid" />
                                            </div>
                                            </>
                                            )})}
                            <div class="row form-material">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Week</h5>
                                        {/* <label class="col-sm-6 col-md-3 col-form-label">Technology Used</label> */}
                            
                                <select id="week" class="custom-select col-12" >
                                    <option selected="" disabled>Choose...</option>
                                    <option>Week 1</option>
                                    <option>Week 2</option>
                                    <option>Week 3</option>
                                    <option>Week 4</option>
                                    <option>Week 5</option>
                                    <option>Week 6</option>
                                    <option>Week 7</option>
                                    <option>Week 8</option>
                                    <option>Week 9</option>
                                    <option>Week 10</option>
                                   
                           
                                </select>
                           
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Upload File</h5>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="form-control" onChange={(e) => setfilename(e.target.files[0])} placeholder="" id="file"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="text-center">
                            <h5 class="box-title m-t-30">Datepicker</h5>
                            <p class="text-muted m-b-20">You can take refernce for scheduling date with your guides.</p>
                            <div>
                                <Calendar/>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <button type="button" class="btn mb-1 btn-rounded btn-success" onClick={onpost}><span class="btn-icon-left"><i class="fa fa-upload color-success"></i> </span>Upload</button>
                </div>
            </div>
        </div>
    </div>
    
    
        
    </div>
</div>
</div>



        
        </>
    );
}

export default Add_report;