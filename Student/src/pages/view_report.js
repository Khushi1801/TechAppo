import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';

function View_report(){


    let stu=JSON.parse(localStorage.getItem("stu_email"));
    var enroll_no=stu.enroll_no;


    const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_report',{params:{enroll_no:enroll_no}}).then((response)=>{
            setlist(response.data);
        });
    
      
    },[]);

    const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_reportdata',{id:id}).then((response)=>{
            
            //alert(response.data);

            setlist1(response.data);
        
    });
  };

  const closemodal=(e) =>{
      
    window.location="/View_report";
    
    }
    const onmoreup=(e) =>{
        swal({
            title: "Can't Update any further!",
            text: "Already updated more than 3 reports.",
            type: "success"
          })
          .then(() => {
            window.location="/View_report";
          });
        //window.location="/View_report";
        
        }

    const[A_file,setfilename] = useState("");
    const onupdate=(e) =>{
        e.preventDefault();
        const id=document.getElementById('id').value;
        const newfile=document.getElementById('newfile').value;


        var data = new FormData();
          data.append('rpimage',A_file);
          data.append('id',id);
          data.append('newfile',newfile);
      
      
          var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };
          
        
            Axios.post('http://localhost:1351/api/updated_report',data,config).then((response)=>{

        });
        window.location="/View_report";
        
        };


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
                    <h4 class="card-title">View Weekly Reports</h4>
                    <p class="text-muted">Use the form to  <code>.report </code> your guides</p>
                    <div class="basic-form">
                    {list.slice(0, 1).map((val)=>{
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
                    <div class="card-title">
                        <h4>Reports already Submitted</h4>
                        <p class="text-muted">View <code>.reports</code>  submitted </p>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Group ID</th>
                                    <th>Week</th>
                                    <th>Date of Submission</th>
                                    {/* <th>Start Date </th>
                                    <th>End Date </th> */}
                                    <th>Original File</th>
                                    <th>Updated Versions</th>
                                    
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                            {list.slice(0, 1).map((val)=>{
                                            return(
                                <tr>
                                    <td>{val.group_id}</td>
                                    <td>{val.report_data[0].week}</td>
                                    <td>{val.report_data[0].requested_date}</td>
                                    <td>
                                        <tr>{val.report_data[0].report}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></tr><br/>
                                    
                                    </td>
                                    
                                    <td>
                                        <tr>{val.report_data[0].rep_ver1}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a></tr><br/>
                                        <tr>{val.report_data[0].rep_ver2}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a></tr><br/>
                                        <tr>{val.report_data[0].rep_ver3}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a></tr><br/>
                                    </td>
                                    <td>
                                        
                                            {/* {val.report !== "" ?
                                                <>
                                                    <tr>{val.report}</tr>
                                                    <tr><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></tr><br/>
                                                </>
                                                :
                                                val.rep_ver1 !== "" ? // add an elseif condition here
                                                    <>
                                                        <tr>{val.rep_ver1}</tr>
                                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></tr><br/>
                                                    </>
                                                    :
                                                    <>
                                                        <tr>{val.rep_ver2}</tr>
                                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank">Click</a></tr><br/>
                                                    </>
                                                    :
                                                    <>
                                                        <tr>{val.rep_ver3}</tr>
                                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank">Click</a></tr><br/>
                                                    </>
                                            } */}

{/* {val.report !== "" ?
    <>
        <tr>{val.report}</tr>
        {val.rep_ver1 !== "" ?
            <td>
                <tr><del>{val.report}</del></tr>
                <tr><del><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></del></tr><br/>
            </td>
            : null
        }
        <td>
            <tr>{val.rep_ver1}</tr>
            <tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></tr><br/>
        </td>
        {val.rep_ver2 !== "" ?
            <td>
                <tr><del>{val.rep_ver1}</del></tr>
                <tr><del><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></del></tr><br/>
            </td>
            : null
        }
        <td>
            <tr>{val.rep_ver2}</tr>
            <tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank">Click</a></tr><br/>
        </td>
        {val.rep_ver3 !== "" ?
            <td>
                <tr><del>{val.rep_ver2}</del></tr>
                <tr><del><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank">Click</a></del></tr><br/>
            </td>
            : null
        }
        <td>
            <tr>{val.rep_ver3}</tr>
            <tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank">Click</a></tr><br/>
        </td>
    </>
    : null
} */}

{/* 
{val.report !== "" ?
  <>
    <tr>
      <td>{val.report}</td>
      <td><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></td>
    </tr>
    {val.rep_ver1 !== "" ?
      <tr>
        <td><del>{val.report}</del></td>
        <td><del><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></del></td>
        <td>{val.rep_ver1}</td>
        <td><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></td>
      </tr>
      :
      val.rep_ver2 !== "" ?
        <tr>
          <td><del>{val.report}</del></td>
          <td><del><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></del></td>
          <td><del>{val.rep_ver1}</del></td>
          <td><del><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></del></td>
          <td>{val.rep_ver2}</td>
          <td><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank">Click</a></td>
        </tr>
        :
        val.rep_ver3 !== "" ?
          <tr>
            <td><del>{val.report}</del></td>
            <td><del><a href={"http://localhost:1351/public/"+val.report} target="_blank">Click</a></del></td>
            <td><del>{val.rep_ver1}</del></td>
            <td><del><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank">Click</a></del></td>
            <td><del>{val.rep_ver2}</del></td>
            <td><del><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank">Click</a></del></td>
            <td>{val.rep_ver3}</td>
            <td><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank">Click</a></td>
          </tr>
          :
          null
    }
  </>
  :
  null
} */}






                                        
                                    </td>
                                    <td></td>
                                    <td></td>

                                    <td>
                                        {val.report_data[0].rep_ver3 === "" ?
                                        <>
                                            <span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5" onClick={()=>showDetail(val.group_id)}  data-target="#myModal" data-toggle="modal">
                                            </i> </a> </span>
                                        </>:
                                        <>
                                            <span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5"  onClick={onmoreup}>
                                            </i> </a> </span>
                                        </>
                                        
                                        }
                                        {/* <span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5" onClick={()=>showDetail(val._id)}  data-target="#myModal" data-toggle="modal">
                                            </i> </a> </span> */}
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
            {rs.slice(0,1).map((val1)=>{
                return(
                    <>
                    <div class="card-body">
                            <div class="row">
                            <input type="text" value={val1.group_id} id="id"  hidden/>
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
                                                <input type="file" class="form-control" placeholder="" onChange={(e) => setfilename(e.target.files[0])} id="newfile"/>
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

export default View_report;