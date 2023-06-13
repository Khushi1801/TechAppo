import React from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useState, useEffect } from "react";
import swal from 'sweetalert';

function Edit_define(){
    const closemodal=(e) =>{
        window.location="/Edit_define";
        
        }

        const onupdate=(e) =>{
    
            e.preventDefault();
            const id=document.getElementById('id').value;
            // const s1id=document.getElementById('s1id').value;
            // const s1name=document.getElementById('s1name').value;
            // const s2id=document.getElementById('s2id').value;
            // const s2name=document.getElementById('s2name').value;
            // const s3id=document.getElementById('s3id').value;
            // const s3name=document.getElementById('s3name').value;
           
            const u_projtitle=document.getElementById('u_projtitle').value;
            const u_projdef=document.getElementById('u_projdef').value;
            const u_projdes=document.getElementById('u_projdes').value;
            const u_techs=document.getElementById('u_techs').value;
    Axios.post('http://localhost:1351/api/updated_define',{u_projtitle:u_projtitle,u_projdef:u_projdef,u_projdes:u_projdes,u_techs:u_techs,id:id}).then((response)=>{
    
    
            
            //alert(response.data.message);
           
            });
            
            window.location="/Edit_define";
            }


    const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          alert(id);
            Axios.post('http://localhost:1351/api/getdata_definedata',{id:id}).then((response)=>{
            
            //alert(response.data);

            setlist1(response.data);
        
    });
  }
  const[member,setmember]=useState([]);
      const showMember = (grpid,stuid) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1351/api/getdata_memberdata',{grpid:grpid,stuid:stuid}).then((response)=>{
            let membercount = response.data.length;
            alert("TOTAL MEMBERS :- " + " " + membercount);
            //alert(response.data);

            setmember(response.data);
        
    });
  }

  let stu=JSON.parse(localStorage.getItem("stu_email"));
  var enroll_no=stu.enroll_no;

    const[list,setlist]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_define' ,{params:{enroll_no:enroll_no}}).then((response)=>{
            console.log(response.data);
            setlist(response.data);

        });
    
      
    },[]);

    const onmoreup=(e) =>{
        swal({
            title: "Can't Update any further!",
            text: "Already updated.",
            type: "success"
          })
          .then(() => {
            window.location="/Edit_define";
          });
        //window.location="/View_report";
        
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


                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">PROJECT DETAILS</h4>
                                <p class="text-muted">View <code>.project Definitions</code></p>
                                <div class="table-responsive">
                                    <table class="table header-border">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>GROUP ID</th>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th>TITLE</th>
                                                <th>DEFINITION</th>
                                                <th>DESCRIPTION</th>
                                                <th>TECHNOLOGY USED</th>
                                                <th>ENTRY DATE</th>
                                                <th>Edit</th>
                                                <th>Members</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            

                                        {list.map((val,index)=>{
                                            return(

                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{val.group_id}</td>
                                                <td>
                                                <tr>{val.stu_id}</tr>
                                                </td>
                                                <td>
                                                <tr>{val.stu_name}</tr>
                                                </td>
                                                <td>{val.project_title}</td>
                                                <td>{val.project_definition}</td>
                                                <td>{val.project_description}</td>
                                                <td>{val.techology_used}</td>
                                                <td>{val.entry_date}</td>
                                                <td>
                                                
                                        {val.u_project_title === "" ?
                                        <>
                                            <span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5" onClick={()=>showDetail(val.group_id)}  data-target="#myModal1" data-toggle="modal">
                                            </i> </a> </span>
                                        </>:
                                        <>
                                            <span><a href="#" data-toggle="tooltip" data-placement="top" title="Edit" >
                                        <i class="fa fa-pencil color-muted m-r-5"  onClick={onmoreup}>
                                            </i> </a> </span>
                                        </>
                                        
                                        }
                                       
                                    </td> 
                                                <td><span><a href="#" data-toggle="tooltip" data-placement="top" title="View Members" ><i class="fa fa-users color-muted m-r-5" onClick={()=>showMember(val.group_id,val.stu_id)}  data-target="#myModal2" data-toggle="modal"></i> </a> </span>
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


{/* modal 1 */}
<div id="myModal1" class="modal fade" role="dialog">
        <div class="modal-dialog">


          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <div class="modal-body">
                {/* <h1>hello</h1> */}
            
                    <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">PROJECT DETAILS</h4>
                                    <p class="text-muted">Fill the <code>.project Definitions</code></p>
                                    <div class="basic-form">
                                    {rs.slice(0, 1).map((val1) => {
                                        return(
                                            <>
                                            <input type="text" value={val1.group_id} id="id"  hidden/>
                                            
                                            <div class="form-group">
                                                <label>PROJECT TITLE</label>
                                                <input type="text" defaultValue={val1.project_title} class="form-control" placeholder="" id="u_projtitle"/>
                                            </div>
                                            <div class="form-group">
                                                <label>DEFINITION</label>
                                                <input type="text" defaultValue={val1.project_definition} class="form-control" placeholder="" id="u_projdef"/>
                                            </div>
                                            <div class="form-group">
                                                <label>DESCRIPTION</label>
                                                <input type="textarea" defaultValue={val1.project_description} class="form-control" placeholder="" id="u_projdes"/>
                                            </div>
                                            <div class="form-row">
                                                    <label>TECHNOLOGY USED</label>
                                                    <select id="u_techs" class="form-control" defaultValue={val1.techology_used}>
                                                        <option selected="selected">Choose...</option>
                                                        <option>MERN STACK</option>
                                                        <option>PHP</option>
                                                        <option>PYTHON</option>
                                                        <option>ANDROID</option>
                                                        <option>.NET</option>
                                                        <option>JAVA</option>
                                                        <option>ORACLE</option>
                                                        <option>LINUX</option>
                                                        <option>MEAN STACK</option>
                                                        <option>IOT</option>
                                                    </select>
                                            </div>
                                            <div class="form-group">
                                            </div>
                                            
                                            </>
                                )})}     
                                      
                                    </div>
                                
                                </div>
                            </div>
                            {/* <h1>hello2</h1> */}
                    
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal} >Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate} >Submit</button>
            </div>
          </div>

        </div>
      </div>



{/* modal 2 */}
<div id="myModal2" class="modal fade" role="dialog">
        <div class="modal-dialog">


          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <div class="modal-body">
                {/* <h1>hello</h1> */}
            
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">GROUP MEMBERS DETAILS</h4>
                            {/* <p class="text-muted">TOTAL MEMBERS :-</p>  */}
                            <p class="text-muted">STUDENT</p> 

                            {member.map((mem)=>{
                                return(
                                    <>
                                        
                                        <li class="mb-1"><strong class="text-dark mr-4">ID:-</strong> <span>{mem.stu_id}</span></li>
                                        <li class="mb-1"><strong class="text-dark mr-4">NAME:-</strong> <span>{mem.stu_name}</span></li>
                                        
                                    </>
                                )})}
                            
                                    
                        </div>
                    </div>
                            {/* <h1>hello2</h1> */}
                    
           
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

export default Edit_define;