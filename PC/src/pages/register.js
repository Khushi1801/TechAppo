import React from "react";
import {Link} from 'react-router-dom';

function Register(){

	const myStyle={
        backgroundImage: "url('assests/images/register.png')",
        height:'800px',
        filter:'blur(2px)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return(
<>

	<div class="login-header box-shadow">
		<div class="container-fluid d-flex justify-content-between align-items-center">
			<div class="brand-logo">
				<a href="login.html">
					<img src="assests/images/tech-logo1.jpg" alt=""/>
				</a>
			</div>
			<div class="login-menu">
				<ul>
					<li><a href="login.html">Login</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div style={myStyle}>
	<div class="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6 col-lg-7">
					{/* <img src="assests/images/register.png" alt=""/> */}
				</div>
</div>




				<div class="col-md-6 col-lg-5">
					<div class="register-box bg-white box-shadow border-radius-10">
						<div class="wizard-content">
							<form class="tab-wizard2 wizard-circle wizard">
								<h5>Basic Account Credentials</h5>
								<section>
									<div class="form-wrap max-width-600 mx-auto">
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">Email Address*</label>
											<div class="col-sm-8">
												<input type="email" class="form-control"/>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">Username*</label>
											<div class="col-sm-8">
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">Password*</label>
											<div class="col-sm-8">
												<input type="password" class="form-control"/>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">Confirm Password*</label>
											<div class="col-sm-8">
												<input type="password" class="form-control"/>
											</div>
										</div>
									</div>
								</section>
								{/* <!-- Step 2 --> */}
								<h5>Personal Information</h5>
								<section>
									<div class="form-wrap max-width-600 mx-auto">
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">Full Name*</label>
											<div class="col-sm-8">
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="form-group row align-items-center">
											<label class="col-sm-4 col-form-label">Gender*</label>
											<div class="col-sm-8">
												<div class="custom-control custom-radio custom-control-inline pb-0">
													<input type="radio" id="male" name="gender" class="custom-control-input"/>
													<label class="custom-control-label" for="male">Male</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline pb-0">
													<input type="radio" id="female" name="gender" class="custom-control-input"/>
													<label class="custom-control-label" for="female">Female</label>
												</div>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">City</label>
											<div class="col-sm-8">
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="form-group row">
											<label class="col-sm-4 col-form-label">State</label>
											<div class="col-sm-8">
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
								</section>
								
								{/* <!-- Step 4 --> */}
								<h5>Overview Information</h5>
								<section>
									<div class="form-wrap max-width-600 mx-auto">
										<ul class="register-info">
											<li>
												<div class="row">
													<div class="col-sm-4 weight-600">Email Address</div>
													<div class="col-sm-8">example@abc.com</div>
												</div>
											</li>
											<li>
												<div class="row">
													<div class="col-sm-4 weight-600">Username</div>
													<div class="col-sm-8">Example</div>
												</div>
											</li>
											<li>
												<div class="row">
													<div class="col-sm-4 weight-600">Password</div>
													<div class="col-sm-8">.....000</div>
												</div>
											</li>
											<li>
												<div class="row">
													<div class="col-sm-4 weight-600">Full Name</div>
													<div class="col-sm-8">john smith</div>
												</div>
											</li>
											<li>
												<div class="row">
													<div class="col-sm-4 weight-600">Location</div>
													<div class="col-sm-8">123 Example</div>
												</div>
											</li>
										</ul>
										<div class="custom-control custom-checkbox mt-4">
											<input type="checkbox" class="custom-control-input" id="customCheck1"/>
											<label class="custom-control-label" for="customCheck1">I have read and agreed to the terms of services and privacy policy</label>
										</div>
									</div>
								</section>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- success Popup html Start --> */}
	<button type="button" id="success-modal-btn" hidden data-toggle="modal" data-target="#success-modal" data-backdrop="static">Launch modal</button>
	<div class="modal fade" id="success-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered max-width-400" role="document">
			<div class="modal-content">
				<div class="modal-body text-center font-18">
					<h3 class="mb-20">Form Submitted!</h3>
					<div class="mb-30 text-center"><img src="assests/images/success.png"/></div>
					
				</div>
				<div class="modal-footer justify-content-center">
					<a href="login.html" class="btn btn-primary">Done</a>
				</div>
			</div>
		</div>
	</div>
	
</>
    );
}
export default Register;