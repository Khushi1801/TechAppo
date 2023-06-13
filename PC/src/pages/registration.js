import React, { useState } from "react";
import { useBetween } from "use-between";
import './reg.css';
import Axios from 'axios';
import { Link } from "react-router-dom";

// Make a custom hook with your future shared state
const useFormState = () => {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [gender, setGen] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState("");

  return {
    username, setUsername, lastname, setLastname, email, setEmail, dob, setDob, phone, setPhone, pwd, setPwd, cpwd, setCpwd, gender, setGen, role, setRole, img, setImg
  };
};

// Make a custom hook for sharing your form state between any components
const useSharedFormState = () => useBetween(useFormState);

const FirstComponent = () => {
  // Use the shared hook!
  const { username, setUsername, lastname, setLastname, dob, setDob, gender, setGen, role, setRole, img, setImg} = useSharedFormState();
  return (
<>
<div class="main-container1"><br/>
<h2 class="text-center" style={{fontFamily:"cursive",color:"#167495"}}>New Here? Let's get started !!!</h2><br/>
	<img src="assests/images/reg-logo1.jpg" class="reg-img" alt="no image" style={{position:"relative",left:"2vw"}}/><br/><br/>
	
	{/* <h3 class="text-center text-danger">Welcome to</h3> */}
	 {/* <img src="assests/images/reg-logo.png" class="reg-img" alt=""/> */}
	 <div class="form-group row align-items-center">
		<label class="col-sm-4 col-form-label">Role</label>
		<div class="col-sm-8">
			<div class="custom-control custom-radio custom-control-inline pb-0">
				<input type="radio" id="student" name="role" class="custom-control-input" value="student" onChange={(ev) => setRole(ev.target.value)}/>
				<label class="custom-control-label" for="student">Student</label>
			</div>
			<div class="custom-control custom-radio custom-control-inline pb-0">
				<input type="radio" id="faculty" name="role" class="custom-control-input" value="faculty" onChange={(ev) => setRole(ev.target.value)}/>
				<label class="custom-control-label" for="faculty">Faculty</label>
			</div>
            <div class="custom-control custom-radio custom-control-inline pb-0">
				<input type="radio" id="pc" name="role" class="custom-control-input" value="pc" onChange={(ev) => setRole(ev.target.value)}/>
				<label class="custom-control-label" for="pc">Project Coordinator</label>
			</div>
		</div>
	</div>					                          
    <div class="form-group row">
		<label class="col-sm-4 col-form-label">First Name</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" value={username} onChange={(ev) => setUsername(ev.target.value)} />
			</div>
	</div>
	<div class="form-group row">
		<label class="col-sm-4 col-form-label">Last Name</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" value={lastname} onChange={(ev) => setLastname(ev.target.value)}/>
			</div>
	</div>
	<div class="form-group row">
		<label class="col-sm-4 col-form-label">Date of Birth</label>
			<div class="col-sm-8">
				<input type="date" class="form-control" value={dob} onChange={(ev) => setDob(ev.target.value)}/>
			</div>
	</div>
    <div class="form-group row align-items-center">
		<label class="col-sm-4 col-form-label">Gender</label>
		<div class="col-sm-8">
			<div class="custom-control custom-radio custom-control-inline pb-0">
				<input type="radio" id="female" name="gender" value="female" class="custom-control-input" onChange={(ev) => setGen(ev.target.value)}/>
				<label class="custom-control-label" for="female">Female</label>
			</div>
			<div class="custom-control custom-radio custom-control-inline pb-0">
				<input type="radio" id="male" name="gender" value="male" class="custom-control-input" onChange={(ev) => setGen(ev.target.value)}/>
				<label class="custom-control-label" for="male">Male</label>
			</div>
           
		</div>
	</div>

	
		</div>						
	</>							

  );
};

const SecondComponent = () => {
  // Use  the shared hook!
  const { email, setEmail, phone, setPhone } = useSharedFormState();
  return (
<div class="main-container1">
    <img src="assests/images/reg-logo1.jpg" class="reg-img" alt=""/><br/><br/>
	<h2 class="text-center text-info">Contact Details</h2><br/>
   
		<div class="form-wrap max-width-600 mx-auto">
			<div class="form-group row">
				<label class="col-sm-4 col-form-label">Email ID</label>
				<div class="col-sm-8">
					<input type="email" class="form-control" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
				</div>
			</div>
			
			<div class="form-group row">
				<label class="col-sm-4 col-form-label">Phone Number</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" value={phone} onChange={(ev) => setPhone(ev.target.value)}/>
				</div>
			</div>
		
		</div>
		</div>
  );
};

const ThirdComponent = () => {
	// Use  the shared hook!
	const {pwd, setPwd, cpwd, setCpwd} = useSharedFormState();

	return (
  <div class="main-container1">
	  <img src="assests/images/reg-logo1.jpg" class="reg-img" alt=""/> <br/><br/>
	<h2 class="text-center text-info">Password Details</h2><br/>
	<div class="form-wrap max-width-600 mx-auto">
 <div class="form-group row">
	<label class="col-sm-4 col-form-label">Password*</label>
		<div class="col-sm-8">
		<input type="password" class="form-control" value={pwd} onChange={(ev) => setPwd(ev.target.value)}/>
		</div>
	</div> 
	<div class="form-group row">
		<label class="col-sm-4 col-form-label">Confirm Password*</label>
			<div class="col-sm-8">
			<input type="password" class="form-control" value={cpwd} onChange={(ev) => setCpwd(ev.target.value)}/>
			</div>
	</div>
	</div>
	  	  </div>
	);
  };
const FinalComponent = () => {
  // Use shared hook!
  const { email, username, lastname, phone, dob, role, gender, img } = useSharedFormState();

  //alert(email);
  return (
    // <p>
    //   First Name: {username} <br />
	//   Last Name: {lastname} <br />
    //   Email: {email} <br />
	//   Phone Number: {phone} <br />
    // </p>
	//D:\8 Sem Project\TechAppo\New Code\student\server\public\1678958258934-.jpeg
	<div class="main-container1">

{/* <img src={"http://localhost:1351/public/1678958258934-.jpeg"} alt="No preview" style={{height:"400px", width:"400px"}} /><br/><br/> */}
<h2 class="text-center text-info">Overview</h2><br/>

	<div class="form-wrap max-width-600 mx-auto">
		<ul class="register-info">
		<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Email ID</div>
					<div class="col-sm-8">{email}</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Full Name</div>
					<div class="col-sm-8">{username} &nbsp; {lastname}</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Role</div>
					<div class="col-sm-8">{role} </div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Date of birth</div>
					<div class="col-sm-8">{dob}</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Gender</div>
					<div class="col-sm-8">{gender} </div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-sm-4 weight-600">Phone Number</div>
					<div class="col-sm-8">{phone}</div>
				</div>
			</li>

			{/* <li>
				<div class="row">
					<div class="col-sm-4 weight-600">Img</div>
					<div class="col-sm-8">{img}</div>
				</div>
			</li> */}

		</ul>
		{/* <div class="custom-control custom-checkbox mt-4">
			<input type="checkbox" class="custom-control-input" id="customCheck1"/>
			<label class="custom-control-label" for="customCheck1">I have read and agreed to the terms of services and privacy policy</label>
		</div> */}
	</div>
	</div>
							
  );
};


 
export const Reg = () => {

	const { email, username, lastname, phone, dob, role, gender, pwd, cpwd, img } = useSharedFormState();
	
	// var u1=username;
	// var u2=lastname;
	// var u3=email;
	// var u4=phone;
	// var u5=dob;
	// var u6=pwd;
	// var u7=cpwd;
	// var u8=role;
	// var u9=gender;
	// var u10=img;


	
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'My First Step', isDone: true, component: FirstComponent },
    { key: 'secondStep', label: 'My Second Step', isDone: false, component: SecondComponent },
    { key: 'thirdStep', label: 'My Third Step', isDone: false, component: ThirdComponent },
    { key: 'finalStep', label: 'My Final Step', isDone: false, component: FinalComponent },
  ]);

const [activeStep, setActiveStep] = useState(steps[0]);
 
const handleNext = () => {
	if (steps[steps.length - 1].key === activeStep.key) {
		// var data = new FormData();
		
		// data.append('username',username);
		// data.append('lastname',lastname);
		// data.append('email',email);
		// data.append('phone',phone);
		// data.append('dob',dob);
		// data.append('pwd',pwd);
		// data.append('cpwd',cpwd);
		// data.append('role',role);
		// data.append('gender',gender);

	
		// var config = {
		// 	headers: {
		// 		'Content-Type' : 'multipart/form-data'
		// 	},
		// };
		
		alert(username);
		//console.log(data);
		// alert(u2);
		// alert(u3);
		// alert(u4);
		// alert(u5);
		//alert(u6);
		//alert(u7);
		// alert(u8);
		 //alert(u10);
	  alert('You have completed all steps.');
	  Axios.post('http://localhost:1351/api/registration',{username: username,lastname: lastname,email: email,phone: phone,dob: dob,pwd: pwd,cpwd: cpwd,role: role,gender: gender}).then((response)=>{
        
        
        alert(response.data.message);
        window.location="/";
        
        
        });
	  //return;
	}
   
	const index = steps.findIndex(x => x.key === activeStep.key);
	setSteps(prevStep => prevStep.map(x => {
	  if (x.key === activeStep.key) x.isDone = true;
	  return x;
	}))
	setActiveStep(steps[index + 1]);
  }
   
  const handleBack = () => {
	const index = steps.findIndex(x => x.key === activeStep.key);
	if (index === 0) return;
   
	setSteps(prevStep => prevStep.map(x => {
	  if (x.key === activeStep.key) x.isDone = false;
	  return x;
	}))
	setActiveStep(steps[index - 1]);
  }
return(

  <>
   <div class="main-container1">
      {/* <h4>Step wizard in React - <a href="https://www.cluemediator.com" title="Clue Mediator" target="_blank" rel="nofollow noopener noreferrer">Clue Mediator</a></h4> */}
      <div className="box">
        <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                <div>Step {i + 1}<br /><span>{step.label}</span></div>
              </li>
            })}
			<h5 style={{position:"relative",left:"2.5vw",top:"1.5vw",fontFamily:"cursive"}}><a href='/' style={{color:"#167495"}}><u>Back to Login</u></a></h5>
          </ul>
        </div>
        <div className="step-component">
          {activeStep.component()}
        </div>
        <div className="btn-component">
          <input type="button" class="btn btn-danger" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} /> 
          <input type="button" class="btn btn-success"value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
        </div>
      </div>
     
      </div>
   
    </>
);
}
export default Reg;