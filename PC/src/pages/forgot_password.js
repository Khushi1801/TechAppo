import React from "react";
import Axios from 'axios';
import swal from 'sweetalert';


function FP(){
    const sendmail=() =>{
        const email=document.getElementById('email').value;
        alert(email);
        Axios.post('http://localhost:1351/api/forgot_password',{email:email}).then((response)=>{
        
        alert(response.data.message);
        // if(response.data.message){
        
        //     swal({
        //       title: "Request Sent!",
        //       //text: "Click ok to refresh the page.",
        //       type: "success"
        //     })
        //     .then(() => {
        //       window.location="/Schedule";
        //     });
            
        //   }
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
							<h2 class="text-center text-danger">Forgot Password of TechAppo?</h2>
						</div>
						<div class="col-md-6 col-lg-7">
					
					<img src="assests/images/login.jpg" alt="" style={{position:"relative",left:"6vw"}}/><br/><br/>
				</div>
						<form>
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <div class="input-group custom">
                                        
                                        <input type="text" class="form-control form-control-lg" placeholder="Username" id="email"/>
                                        <div class="input-group-append custom">
                                            <span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
                                        </div>
                                    </div>
									<div class="input-group mb-0">
										<button class="btn btn-danger btn-lg btn-block" onClick={sendmail} >Send Email</button>
									</div>
									<div class="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
									<div class="input-group mb-0">
										<a class="btn btn-outline-danger btn-lg btn-block" href='/'>Login</a>
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
export default FP;