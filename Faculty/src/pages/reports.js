import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import Axios from 'axios';
import { useRef } from 'react';

function Report(){
 
  const [u, setu] = useState('');

  const layoutRef = useRef(null);

  const handleClick = (val) => {
    setu(val.group_id);

    if (layoutRef.current && layoutRef.current.className.includes('show')) {
      layoutRef.current.className = 'collapse collapse-box';
    } else if (layoutRef.current) {
      layoutRef.current.className = 'collapse collapse-box show';
    }
  };

  const[list,setlist]=useState([]);
  useEffect(()=>{
      Axios.get('http://localhost:1351/api/get_report1').then((response)=>{
      console.log(response.data);
      setlist(response.data);

      });
  
    
  },[]);

  const[rs,setlist1]=useState([]);
    const showDetail = (id) =>
      {
        
        alert(id);
          Axios.post('http://localhost:1351/api/getdata_reportdata',{id:id}).then((response)=>{

          //alert(response.data);

          setlist1(response.data);
          
       
  });
};

const[list2,setlist2]=useState([]);
    useEffect(()=>{
       
        Axios.get('http://localhost:1351/api/get_define' ).then((response)=>{
            console.log(response.data);
            setlist2(response.data);

        });
    
      
    },[]);



    return(
        <>
        <div class="combined">
        {list.map((val)=>{
                        return(
                          <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Reports Record</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      
                        <tr>
                          <th>Group id : {val.group_id}</th>
                          <th>Project title : TechAppo</th>
                          <div class="dropdown">
                          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuIconButton6" onClick={() => handleClick(val)}>
                            <i class="ti-file"></i>
                          </button>
                          <div>
                            
                          </div>
                        </div>
                        </tr>  
                         
                      </thead>
                    </table>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div>
           
           {
           u===val.group_id ?
           <>
        <div className={`collapse collapse-box group-${val.group_id}`} ref={layoutRef}>
              
              <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title mb-0"></p>
                    <div class="table-responsive">
                      <table class="table table-striped table-borderless">
                        <thead>
                      
                          <tr>
                            <th>Group ID</th>
                            <th>Week</th>
                            <th>Date of Submission</th>
                            <th>Original Files</th>
                            <th>Updated Versions</th>
                           
                          </tr> 

                        </thead>
                        <tbody>
                        
                          {/* <tr>
                              <td>{val.start_date}</td>
                              <td>{val.end_date}</td>
                              <td>{val.report}</td> 
                              <td><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >View</a>
                              <br/><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >View-Version-1</a></td>
                              <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Give Feedback</button></td>
                              
                          </tr> */}

                                  <tr>
                                    <td>{val.group_id}</td>
                                    <td>{val.week}</td>
                                    <td>{val.requested_date}</td>
                                    <td>
                                        <tr>{val.report}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.report} target="_blank"  >Click</a></tr><br/>
                                    
                                    </td>
                                    
                                    <td>
                                        <tr>{val.rep_ver1}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver1} target="_blank"  >Click</a></tr><br/>
                                        <tr>{val.rep_ver2}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver2} target="_blank"  >Click</a></tr><br/>
                                        <tr>{val.rep_ver3}</tr><br/>
                                        <tr><a href={"http://localhost:1351/public/"+val.rep_ver3} target="_blank"  >Click</a></tr><br/>
                                    </td>
                                    
                                    {/* <td>{val.Feedback_date}</td>
                                    <td>{val.Feedback}</td> */}
                                    {/* <td><a href="">Edit</a></td> */}
                                     
                                  </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            
            </>:<></>
        }
          </div>
          </>
          )})}
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
                    Reply to <code>STUDENTS</code>.
                  </p> </h3>
                  
                  <p>GROUP ID : {val1.group_id}</p>
                  
                  <form class="forms-sample">
                  <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden/>
                <img src={"http://localhost:1351/public/"+val1.report} alt="No preview" style={{height:"400px", width:"400px"}} />
                </div>
              </div>
              

                  <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden/>
                <div class="custom-file">
                  <input type="file" class="form-control"  placeholder="" id="file"/>
                </div>
                
                </div>
              </div>

              

              <div class="form-group row">
                <div class="col-sm-12">
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
              <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" >Submit</button>
            </div>
          </div>

        </div>
      </div>
        </>
    );
}

export default Report;
