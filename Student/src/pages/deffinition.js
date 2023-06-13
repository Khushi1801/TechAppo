import React, { useState,useEffect } from 'react';
import { useBetween } from "use-between";
import { Link } from "react-router-dom";
import Axios from 'axios';
import swal from 'sweetalert';
function Define(){
  const asteps = ["Home", "Members Info", "Project Details", "Comapny Details","Overview"];
    var r=true;
    const [step, setStep] = useState(0);
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState("");
    const [filename1, setFilename1] = useState("");
    const cancel = () => {
      window.location="/Define";
    };
    const handleNext = () => {
        setStep(step + 1);
      };
          const handlePrev = () => {
        setStep(step - 1);
      }; 
      const [studentList, setStudentList] = useState([]);
      const [errorMessage, setErrorMessage] = useState('');
      const [numValues, setNumValues] = useState(1);
      const [role, setRole] = useState('');
      const handleNumValuesChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
          setNumValues(value);
          setErrorMessage('');
        } else {
          setErrorMessage('Number of values must be greater than 0.');
        }
      };
      // const [members, setMembers] = useState("");
     
      const [proj_title, setProjtitle] = useState("");
      const [proj_def, setProjdef] = useState("");
      const [proj_des, setProjdes] = useState("");
      const [tech, setTech] = useState("");
      const [company, setCompany] = useState("");
      const [address, setAddress] = useState("");
      const [iguide, setIguide] = useState("");
      // const handleMembers = (e) => setMembers(e.target.value);    
      const handleProjTitle = (e) => setProjtitle(e.target.value);
      const handleProjdef = (e) => setProjdef(e.target.value);
      const handleProjdes = (e) => setProjdes(e.target.value);
      const handleTech = (e) => setTech(e.target.value);
      const handleCompany = (e) => setCompany(e.target.value);
      const handleAddress = (e) => setAddress(e.target.value);
      const handleIguide = (e) => setIguide(e.target.value);
      const handleRadioChange = (e) => {
        setRole(e.target.id);
        
      };

      const handlefile = (event) => {
        const file = event.target.files[0];
        const file4=event.target.files[0];
        const reader = new FileReader();    
        reader.readAsDataURL(file);    
        reader.onload = () => {
          setImage(reader.result);
          setFilename(file.name);
          setFilename1(file4);
        };
      };
      const onpost = (e1) => {
        const studentsData = {};
        e1.preventDefault();
        var data = new FormData();

        alert(filename);
        data.append('role',role);
        data.append('proj_title',proj_title);
        data.append('proj_def',proj_def);
        data.append('proj_des',proj_des);
        data.append('tech',tech);
        data.append('company',company);
        data.append('address',address);
        data.append('iguide',iguide);
        data.append('fileu',filename1);

        studentList.forEach((student, index) => {
          if (student) {
          const keyPrefix = `student_${index}_`;
          studentsData[`${keyPrefix}id`] = student.id;
    studentsData[`${keyPrefix}name`] = student.name;
          //data.append(`${keyPrefix}email`, student.email);
          // add more fields as needed
         
          }});
          
          const studentsDataJSON = JSON.stringify(studentsData);
          data.append('studentsData', studentsDataJSON);
        Axios.post('http://localhost:1351/api/define',data, {
          headers: {"Content-Type":"multipart/form-data"} }).then((response)=>{
        });
      };

      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedList = [...studentList];
        updatedList[index] = {
          ...updatedList[index],
          [name]: value,
        };
        setStudentList(updatedList);
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
                    <input type="radio"  class="custom-control-input" id="Individual" name="role" onChange={handleRadioChange} checked={role === "Individual"}/>
                    <label class="custom-control-label" htmlFor="Individual">Individual</label>
                  </div>
                  <div class="custom-control custom-radio mb-5">
                    <input type="radio"  class="custom-control-input" id="Group" name="role" onChange={handleRadioChange} checked={role === "Group"}/>
                    <label class="custom-control-label" htmlFor="Group">Group</label>
                  </div>
                  </div>
                  </div>
                      <div class="form-group row">
                      <label class="col-sm-6 col-md-3 col-form-label">No. of Members</label>
<input
  type="number"
  id="num-values"
  name="num-values"
  value={numValues}
  onChange={handleNumValuesChange}
/>{errorMessage && <p>{errorMessage}</p>}
                    </div>
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
                      {[...Array(numValues)].map((_, index) => (
  <div key={index}>
        <div class="form-group row">
        <label htmlFor={`value-${index}`}>Student  {index + 1}:</label>&nbsp;
    <div class="form-row">
      <div class="form-group col-md-4">   
      <input
                  type="text"
                  id={`id-${index}`}
                  name="id"
                  className="form-control"
                  placeholder="Student ID"
                  value={studentList[index]?.id || ''}
                  onChange={(e) => handleInputChange(e, index)}
                />
  </div>
  <div class="form-group col-md-8">   
  <input
                  type="text"
                  id={`name-${index}`}
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={studentList[index]?.name || ''}
                  onChange={(e) => handleInputChange(e, index)}
                />
  </div>
   </div></div>
                  </div>
))}
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
        <div class="form-group row">
    <label class="col-sm-6 col-md-3 col-form-label">Joining Letter</label>
    <div class="col-sm-12 col-md-6">
      {/* <button type="file" class="btn btn-primary">Upload File</button> */}
      <input type="file" class="btn btn-primary"  onChange={handlefile}   />
      {filename && <p>Selected file: {filename}</p>}
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
                  {/* <div class="tab-pane fade" id="overview" role="tabpanel"> */}
                  {step === 4 && (
                  <div>
                    <div class="pd-20">
                    <div class="form-group row"></div>
                      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      <div class="form-group row">
    <label class="col-sm-6 col-md-3 col-form-label">Group/Individual : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{role}</label>
    </div>
        </div>
        {/* <div class="form-group row">
    <label class="col-sm-6 col-md-3 col-form-label">Members : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">{role}</label>
    </div>
        </div> */}
        <div class="form-group row">
    <label class="col-sm-6 col-md-3 col-form-label">Members Info : </label>
    <div class="col-sm-12 col-md-6">
    <label class="col-sm-12 col-md-6 col-form-label">
    <ul>
          {studentList.map((student, index) => (
            <li key={index}>
               {student.id}, {student.name}
            </li>
          ))}
        </ul>
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
    <label class="col-sm-6 col-md-3 col-form-label">Joining Letter : </label>
    <div class="col-sm-12 col-md-6">
    <input type="text" value={image} hidden/>
    {filename && <p>{filename}</p>}
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
