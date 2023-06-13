import React, { useState,useEffect } from 'react';
import { useBetween } from "use-between";
import { Link } from "react-router-dom";
import Axios from 'axios';
import swal from 'sweetalert';

function Define(){
  const asteps = ["Home", "Members Info", "Project Details", "Company Details","Overview"];

    var r=true;
    const [step, setStep] = useState(0);

    const cancel = () => {
      window.location="/Define";
    };

    // const handleMember = () => {
    //   const num = parseInt(event.target.value);
    // setNum(num);
    // setInputs([...Array(num)].map(() => ''));

    // };    

    // const handleInputChange = () => {
    //   const newInputs = [...inputs];
    //   newInputs[index] = event.target.value;
    //   setInputs(newInputs);
  
    // };

    const handleNext = () => {
        setStep(step + 1);
      };
    
      const handlePrev = () => {
        setStep(step - 1);
      };
    
      const [role, setRole] = useState('');

      // const [members, setMembers] = useState("");

      const [stu1_id, setStu1id] = useState("");
      const [stu1_name, setStu1name] = useState("");

      const [stu2_id, setStu2id] = useState("");
      const [stu2_name, setStu2name] = useState("");

      const [stu3_id, setStu3id] = useState("");
      const [stu3_name, setStu3name] = useState("");

      const [proj_title, setProjtitle] = useState("");
      const [proj_def, setProjdef] = useState("");
      const [proj_des, setProjdes] = useState("");
      const [tech, setTech] = useState("");

      const [company, setCompany] = useState("");
      const [address, setAddress] = useState("");
      const [iguide, setIguide] = useState("");
      

      





      

      // const handleMembers = (e) => setMembers(e.target.value);

      const handleStu1id = (e) => setStu1id(e.target.value);
      const handleStu1name = (e) => setStu1name(e.target.value);

      const handleStu2id = (e) => setStu2id(e.target.value);
      const handleStu2name = (e) => setStu2name(e.target.value);

      const handleStu3id = (e) => setStu3id(e.target.value);
      const handleStu3name = (e) => setStu3name(e.target.value);

      const handleProjTitle = (e) => setProjtitle(e.target.value);
      const handleProjdef = (e) => setProjdef(e.target.value);
      const handleProjdes = (e) => setProjdes(e.target.value);
      const handleTech = (e) => setTech(e.target.value);

      const handleCompany = (e) => setCompany(e.target.value);
      const handleAddress = (e) => setAddress(e.target.value);
      const handleIguide = (e) => setIguide(e.target.value);
      


      const onpost = (e1) => {
        e1.preventDefault();

        // var data = new FormData();
        // data.append('role',role);
        // data.append('stu1_id',stu1_id);
        // data.append('stu1_name',stu1_name);
        // data.append('stu2_id',stu2_id);
        // data.append('stu2_name',stu2_name);
        // data.append('stu3_id',stu3_id);
        // data.append('stu3_name',stu3_name);
        // data.append('proj_title',proj_title);
        // data.append('proj_def',proj_def);
        // data.append('proj_des',proj_des);
        // data.append('tech',tech);
        // data.append('company',company);
        // data.append('address',address);
        // data.append('iguide',iguide);
        
        // alert(stu1_id);


        // var config = {
        //   headers: {
        //       'Content-Type': 'multipart/form-data'
        //   },
        // };

        console.log(stu1_id);
        console.log(stu2_name);
        console.log(proj_title);

        Axios.post('http://localhost:1351/api/define',{role:role,stu1_id:stu1_id,stu1_name:stu1_name,stu2_id:stu2_id,stu2_name:stu2_name,stu3_id:stu3_id,stu3_name:stu3_name,proj_title:proj_title,proj_def:proj_def,proj_des:proj_des,tech:tech,company:company,address:address,iguide:iguide}).then((response)=>{
        alert(response.data.message);  
        if(response.data.message){
        
            swal({
              title: "Submitted Project Details!",
              //text: "Click ok to refresh the page.",
              type: "success"
            })
            .then(() => {
              window.location="/Define";
            });
            
          }
        });



        window.location="/Define";

        
      };
  


      const handleStepClick = (stepIndex) => {
        setStep(stepIndex);

      };
     return(
         <>
          
 
 
  <div class="main-container">
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
        
            <div class="col-lg-9 col-md-18 col-sm-18 mb-36">
						<div class="pd-20 card-box">
							<h5 class="h4 text-blue mb-20">PROJECT DETAILS</h5>
              <p class="text-muted">Fill the <code>.project Definitions</code></p>
             
            {/* steps */}
              <div className="row steps clearfix" >
        {asteps.map((stepTitle, index) => (
          <button
            key={index}
            className={`btn btn-light ${index === step ? "active" : ""}`}
            onClick={() => handleStepClick(index)}
          >
            {stepTitle}
          </button>
        ))}&nbsp;
      </div>
{/* steps end */}
							<div class="tab">
								

								<div class="tab-content">
                 
									<div class="tab-pane fade show active" id="home2" role="tabpanel">
                  {step === 0 && (
                  <div>
										<div class="pd-20">
                   
											{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
										  <div class="form-group row"></div>
                      <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Are you doing project in Group or Individual ?</label>
    <div class="col-sm-12 col-md-6">
    <div class="custom-control custom-radio mb-5">
										<input type="radio" id="individual" name="customRadio" class="custom-control-input" onChange={(ev) => setRole(ev.target.value)}/>
										<label class="custom-control-label" for="individual">Individual</label>
									</div>
									<div class="custom-control custom-radio mb-5">
										<input type="radio" id="group" name="customRadio" class="custom-control-input" onChange={(ev) => setRole(ev.target.value)}/>
										<label class="custom-control-label" for="group">Group</label>
									</div>
                  </div>
                  </div>
                      <div class="form-group row">
                      <label class="col-sm-6 col-md-3 col-form-label">No. of Members</label>
                      <div class="col-sm-12 col-md-6">
                        <select class="custom-select col-10" id="members" >
                        {/* onChange={handleMember} */}
                          <option selected="">Choose...</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    {/* {inputs.map((input, index) => (
        <div key={index} className="form-group">
          <label>Time Slot {index + 1}</label>
          <input type="time" className="form-control" value={input} onChange={(event) => handleInputChange(event, index)} id="slot" />
        </div>
      ))} */}


                    </div>

                  <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
</div>
                  )}
</div>
                 


									{/* <div class="tab-pane fade" id="members" role="tabpanel"> */}
                  {step === 1 && (
                    <div>
										<div class="pd-20">
                    <div class="form-group row"></div>
											{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Student 1</label>
    <div class="form-row">
      <div class="form-group col-md-4">
          <input type="text" class="form-control" placeholder="Student ID" id="s1_id" onChange={handleStu1id} value={stu1_id}/>
            </div>
          <div class="form-group col-md-8">
            <input type="text" class="form-control" placeholder="Name" id="s1_name" onChange={handleStu1name} value={stu1_name}/>
              </div>
                 </div>
                  </div>

                  <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Student 2</label>
    <div class="form-row">
      <div class="form-group col-md-4">
          <input type="text" class="form-control" placeholder="Student ID" id="s2_id" onChange={handleStu2id} value={stu2_id}/>
            </div>
          <div class="form-group col-md-8">
            <input type="text" class="form-control" placeholder="Name" id="s2_name" onChange={handleStu2name} value={stu2_name}/>
              </div>
                 </div>
                  </div>
   

                  <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Student 3</label>
    <div class="form-row">
      <div class="form-group col-md-4">
          <input type="text" class="form-control" placeholder="Student ID" id="s3_id" onChange={handleStu3id} value={stu3_id}/>
            </div>
          <div class="form-group col-md-8">
            <input type="text" class="form-control" placeholder="Name" id="s3_name" onChange={handleStu3name} value={stu3_name}/>
              </div>
                 </div>
                  </div>
   
                    
                    </div>

                    <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button> &nbsp;
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>

                    </div>
                  )}
									{/* </div> */}



									{/* <div class="tab-pane fade" id="projectdetails" role="tabpanel"> */}
                  {step === 2 && (
                  <div>
										<div class="pd-20">
                    <div class="form-group row"></div>
											{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      
        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Title</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Title" id="proj_title" onChange={handleProjTitle} value={proj_title}/>

    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Definition</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Definition" id="proj_def" onChange={handleProjdef} value={proj_def}/>

    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Description</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Description" id="proj_des" onChange={handleProjdes} value={proj_des}/>

    </div>
        </div>


                      <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Technology Used</label>
		<div class="col-sm-12 col-md-6">
			<select id="tech" class="custom-select col-12" onChange={handleTech} value={tech}>
				<option selected="">Choose...</option>
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
	</div>
                    
                    
                    </div>

                    <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button>&nbsp;
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
</div>
                    )}
									{/* </div> */}

                  {/* <div class="tab-pane fade" id="company" role="tabpanel"> */}
                  {step === 3 && (
                  <div>
										<div class="pd-20">
                    <div class="form-group row"></div>
											{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      
                      <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Company Name</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Company Name" id="" onChange={handleCompany} value={company}/>

    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Company Address</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Address" id="" onChange={handleAddress} value={address}/>

    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Industry Guide</label>
    <div class="col-sm-12 col-md-6">
    <input type="text" class="form-control" placeholder="Guide" id="" onChange={handleIguide} value={iguide}/>

    </div>
        </div>


        {/* <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Joining Letter</label>
    <div class="col-sm-12 col-md-6">
      
      <input type="file" class="btn btn-primary"  onChange={handlefile} />
    </div>
        </div> */}
                    
                    </div>
                    <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button>&nbsp;
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>

                    </div>
                  )}
									{/* </div> */}


                  {/* <div class="tab-pane fade" id="overview" role="tabpanel"> */}
                  {step === 4 && (
                  <div>
                    <div class="pd-20">
                    <div class="form-group row"></div>
											{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Group/Individual : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label"></label>
    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Members : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label"></label>
    </div>
        </div>
        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Members Info : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">
    {stu1_id}-{stu1_name} <br/>
    {stu2_id}-{stu2_name} <br/>
    {stu3_id}-{stu3_name} 
    </label>
    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Title : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{proj_title}</label>
    </div>
        </div>
        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Definition : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{proj_def}</label>
    </div>
        </div>


        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Project Description : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{proj_des}</label>
    </div>
        </div>

        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Technology Used : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{tech}</label>
    </div>
        </div>

        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label"> Company Name : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{company}</label>
    </div>
        </div>

        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Industry Guide : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{iguide}</label>
    </div>
        </div>

        <div class="form-group row">
		<label class="col-sm-6 col-md-3 col-form-label">Industry Guide : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label"></label>
    </div>
        </div>
                    </div>

                    <div className="btn-group">
                    
              <button type="button" className="btn btn-primary" onClick={handlePrev}>
                Previous
              </button>&nbsp;&nbsp;
              <button type="button" className="btn btn-danger" onClick={cancel}>
                Cancel
              </button>&nbsp;&nbsp;
              <button type="button" className="btn btn-success" onClick={onpost}>
                Submit
              </button>
              
             
            </div>
                    </div>
                  )}
									</div>


								</div>
							</div>
						</div>
					</div>
            
             
         </div>
         </div>
 </div></div>
 {/* </div> */}
 
 
         </>
     );
}

export default Define;