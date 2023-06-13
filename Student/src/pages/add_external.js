import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState,useEffect } from "react";
import swal from 'sweetalert'

function Add_external(){

    // const onpost=() =>{
    //     alert("heelo");
    //     const groupid=document.getElementById('groupid').value;
    //     const ppt=document.getElementById('ppt').value;
    //     const report=document.getElementById('report').value;
    //     Axios.post('http://localhost:1351/api/external',{groupid:groupid,ppt:ppt,report:report}).then((response)=>{
        
    //     alert(response.data.message);
    //     });
        
    //     }


    const[A_file,setfilename] = useState(""); 
    const[A_file1,setfilename1] = useState(""); 
  
    const onpost=() =>{
  
             alert("heelo");
             
        const groupid=document.getElementById('groupid').value;
        const presentation=document.getElementById('presentation').value;

      var data = new FormData();
      data.append('rpimage',A_file);
      data.append('groupid',groupid);
      data.append('presentation',presentation);
      data.append('ureport',A_file1);
        
  
        alert(presentation);
  
  
      
      var config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
      };
  
      Axios.post('http://localhost:1351/api/external',data,config).then((response)=>{
      
      ///Response
      alert(response.data.message);
      if(response.data.message){
  
        swal({
          title: "Submitted External Exam Details!",
          //text: "Click ok to refresh the page.",
          type: "success"
        })
        .then(() => {
          window.location="/Add_external";
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
                    <h4 class="card-title">Final Assessment</h4>
                    <p class="text-muted">Use the form to  <code>.submit assessment material </code> .</p>
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
                    <h4 class="card-title"></h4>
                    <div class="basic-form">
                    <div class="card-body">
                            <div class="row">
                            {list.map((val)=>{
                                            return(
                                                <>
                                <div class="col-md-12">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3" hidden>
                                            <div class="custom-file">
                                                <input type="text" class="form-control" defaultValue={val.group_id} id="groupid"/>
                                                {/*hide above*/ }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )})}
                                
                            </div>
                        </div>
                   
                        <div class="card-body">
                            <div class="row">
                                
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Presentation</h5>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                        
                                <select id="presentation" class="custom-select col-12" >
                                    <option selected="" disabled>Choose...</option>
                                    <option>Presentation 1</option>
                                    <option>Presentation 2</option>
                                    <option>Final Presentation</option>     
                                </select>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Upload PPT</h5>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="form-control" onChange={(e) => setfilename(e.target.files[0])} placeholder="" id="ppt"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Upload Report</h5>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="form-control" onChange={(e) => setfilename1(e.target.files[0])} placeholder="" id="report"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-group-append">
                                    <button type="submit" class="btn mb-1 btn-rounded btn-success" onClick={onpost}><span class="btn-icon-left"><i class="fa fa-upload color-success"></i> </span>Upload</button>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>
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

export default Add_external;