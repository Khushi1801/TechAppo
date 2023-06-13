import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function View_external(){

    let stu=JSON.parse(localStorage.getItem("stu_email"));
    var enroll_no=stu.enroll_no;


    const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_external',{params:{enroll_no:enroll_no}}).then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

    const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_externaldata',{id:id}).then((response)=>{
            
            //alert(response.data);

            setlist1(response.data);
        
    });
  }

  const closemodal=(e) =>{
    window.location="/View_external";
    
    }


    const[A_file,setfilename] = useState(""); 
    const[A_file1,setfilename1] = useState(""); 

    const onupdate=(e) =>{

        e.preventDefault();
        const id=document.getElementById('id').value;
        const newppt=document.getElementById('newppt').value;
        const newreport=document.getElementById('newreport').value;
        

        var data = new FormData();
        data.append('rpimage',A_file);
        data.append('id',id);
        data.append('ureport',A_file1);
        data.append('newppt',newppt);
        data.append('newreport',newreport);
        var config = {
          headers: {
              'Content-Type': 'multipart/form-data'
          },
        };


        Axios.post('http://localhost:1351/api/updated_external',data,config).then((response)=>{

        });
        window.location="/View_external";
        
        }

  


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
                    <div class="card-title">
                        <h4>View </h4>
                        <p class="text-muted">View <code>.final assessment</code>  material</p>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Group ID</th>
                                    <th>Presentation</th>
                                    <th>Date of Submission</th>
                                    <th>PPT</th>
                                    <th>D</th>
                                    <th>REPORT</th>
                                    <th>D</th>
                                    <th>Date of Feedback</th>
                                    <th>Feedback</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {list.slice(0,1).map((val,index)=>{
                                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{val.group_id}</td>
                                    <td>{val.external_data[0].presentation}</td>
                                    <td>{val.external_data[0].requested_date}</td>
                                    <td>{val.external_data[0].ppt}</td>
                                    <td><a href={"http://localhost:1351/public/"+val.ppt} target="_blank"  >Click</a></td>
                                    <td>{val.external_data[0].report}</td>
                                    <td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></td>
                                    <td>{val.external_data[0].date_of_reply}</td>
                                    <td>{val.external_data[0].reply}</td>
                                    {/* <td>
                                    {val.external_data[0].schedule_status === 1 ?  (
                                                                              
                                          <label class="badge badge-primary">Fixed</label>
                                       ):(
                                           <label class="badge badge-danger">Cancelled</label>
                                       )
                                                                             
                                    }
                                    </td> */}
                                    <td><span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5" onClick={()=>showDetail(val.group_id)}  data-target="#myModal" data-toggle="modal">
                                            </i> </a> </span>
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
                   <div class="card-body">
                            <div class="row">
                            <input type="text" value={val1.group_id} id="id"  hidden/>
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Upload PPT</h5>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="form-control" placeholder="" onChange={(e) => setfilename(e.target.files[0])} id="newppt"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class="row">
                            <input type="text" value={val1.group_id} id="id"  hidden/>
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30">Upload Report</h5>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="example">
                                        <h5 class="box-title m-t-30"></h5>
                                        <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="form-control" placeholder="" onChange={(e) => setfilename1(e.target.files[0])} id="newreport"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </>
            )})}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal} >Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate} >Submit</button>
            </div>
          </div>

        </div>
      </div>
        </>
    );
}

export default View_external;