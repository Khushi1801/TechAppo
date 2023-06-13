import React from "react";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import Axios from 'axios';
import { useRef, useState } from "react";

function Login(){

	var typeid;
  const student=() =>{
    const student=document.getElementById('student').value;
    typeid=student;
  }
  const faculty=() =>{
    const faculty=document.getElementById('faculty').value;
    typeid=faculty;
  }
  const pc=() =>{
    const pc=document.getElementById('pc').value;
    typeid=pc;
  }

	// const handleSubmit = (e) =>{
	// 	e.preventDefault();
	// } 
	
	// const loginButtonRef = useRef(null);

	// const handleKeyPress = (e) =>{
	// 	if (
	// 		e.key==='Enter'
	// 	)
	// 	{loginButtonRef.current.click();}
	// };

  const handleSubmit=(e) =>{

    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('pwd').value;
     const type=typeid;
	
    Axios.post('http://localhost:1351/api/login',{email:email,password:password,type:type}).then((response)=>{
         
   
    if(response.data.message){

      swal("Sorry "+ response.data.message)
      .then(() => {
        window.location = "/" ;
      });
    }
    else{ 
     
    if(type==="student"){

		let obj={email:email,
			fname:response.data[0].fname,
			img:response.data[0].upload_file}; //result array has one output hence index [0]
    
		localStorage.setItem('student',JSON.stringify(obj)); //to store in string form
		let stu=JSON.parse(localStorage.getItem("student"));

			
  swal("HELLO!", "Welcome " +  response.data[0].fname + "!")
  
  //swal("Hello "+ response.data[0].fname)
  .then(() => {
	window.location.replace("http://localhost:3001?id="+stu.email);
  });

 
	}  

	if(type==="pc" )
	{
		if(email=="pc@gmail.com" && password=="pc@1"){
		let obj={email:email,
			fname:response.data[0].fname,
			role:response.data[0].role,
			lname:response.data[0].lname,
            mobile:response.data[0].mobile,
            dob:response.data[0].dob,
            gender:response.data[0].gender,
			img:response.data[0].upload_file}; //result array has one output hence index [0]
    
		localStorage.setItem('pc',JSON.stringify(obj));
		let pc=JSON.parse(localStorage.getItem("pc")); //to store in string form

  swal("HELLO!", "Welcome " +  response.data[0].fname + "!")
  
  //swal("Hello "+ response.data[0].fname)
  .then(() => {
	window.location = "/" ;
  });
		}
		else{
			swal("SORRY!", "Wrong ID or Password!")
			.then(() => {
				window.location = "/" ;
			});
		}

	}


	if(type==="faculty") 
	{


		let obj={email:email,fname:response.data[0].fname,role:response.data[0].role,img:response.data[0].upload_file}; //result array has one output hence index [0]
    
		localStorage.setItem('faculty',JSON.stringify(obj)); //to store in string form
		let fac=JSON.parse(localStorage.getItem("faculty"));

  swal("HELLO!", "Welcome " +  response.data[0].fname + "!")
  
  //swal("Hello "+ response.data[0].fname)
  .then(() => {
	window.location.replace("http://localhost:3004?id="+fac.email);
  });
	}



     





            
    }
    
    });
    
    
    }
    return(
<>

<body class="login-page">
	<div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 col-lg-8">
					<div class="login-box bg-white box-shadow border-radius-4">
						<div class="login-title">
							<h2 class="text-center text-danger">Login To TechAppo</h2>
						</div>
						<div class="col-md-6 col-lg-7">
					
					<img src="assests/images/login.jpg" alt="" style={{position:"relative",left:"6vw"}}/><br/><br/>
				</div>
						<form onSubmit={handleSubmit}>
							<div class="select-role">
								<div class="btn-group btn-group-toggle" data-toggle="buttons">
									<label class="btn active">
										<input type="radio" name="options" id="student" value="student" onClick={student}/>
										<div class="icon">
                                            <img src="assests/images/student-graduating-svgrepo-com.svg" class="svg" alt=""/></div>
										Student
									</label>
									<label class="btn">
										<input type="radio" name="options" id="faculty" value="faculty" onClick={faculty}/>
										<div class="icon"><img src="assests/images/faculty.png" class="svg" alt=""/></div>
										Faculty
									</label>
								
                                    <label class="btn">
										<input type="radio" name="options" id="pc" value="pc" onClick={pc}/>
										<div class="icon"><img src="assests/images/teacher-svgrepo-com.svg" class="svg" alt=""/></div>
										Project Co-ordinator
									</label>
								</div>
							</div>
							<div class="input-group custom">
								<input type="email" class="form-control form-control-lg" placeholder="Username" id="email" required/>
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
								</div>
							</div>
							<div class="input-group custom">
								<input type="password" class="form-control form-control-lg" placeholder="**********" id="pwd" required/>
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>
							
							<div class="row">
								<div class="col-sm-12">
								
									<div class="input-group mb-0">
										{/* <!--
											use code for form submit
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In">
										--> */}
										{/* <a class="btn btn-danger btn-lg btn-block" href="index.html" onClick={onpost} >Login</a> */}
										<button type="submit" class="btn btn-danger btn-lg btn-block">Login</button>
										{/* <div tabIndex="0" onKeyDown={handleKeyPress}></div> */}
									</div>
									<div class="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
									<div class="input-group mb-0">
										<a class="btn btn-outline-danger btn-lg btn-block" href='/Reg'>Register To Create Account</a>
									</div>
									<br/>
									<div class="input-group mb-0">
										<a class="btn btn-outline-danger btn-lg btn-block" href='/FP'>Forgot Password?</a>
									</div>
									<br/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>

</>

    );
}
export default Login;