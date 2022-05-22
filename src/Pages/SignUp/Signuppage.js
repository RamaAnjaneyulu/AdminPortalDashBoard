import React from 'react';
import Signupstyle from "./Signupstyle.css";
import { useNavigate,Link } from 'react-router-dom';

const Signuppage = () => {
    return (
        
<div className='row justify-content-md-center card-height top-pad'>
<div className="card col col-lg-8 ">

  <div className="card-body bg-color">
 
<div className='row txt-margin'>
 
<div className="mb-6 row justify-content-md-center txt-top txt-margin">
    <label for="inputUsername" className="col-sm-3 col-form-label">Firs Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="username"/>
    </div>
  </div>
   
  <div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputLastname" className="col-sm-3 col-form-label">Last Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputMnumbe" className="col-sm-3 col-form-label">Mobile Number</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputMnumbe" className="col-sm-3 col-form-label">Email Address</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputConfirmPassword" className="col-sm-3 col-form-label">Confirm</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
        </div>
        <div className="mb-12 row justify-content-md-center txt-margin">
        <label for="inputPassword" className="col-sm-1 col-form-label"></label>
        <button type="submit" id="" className="btn btn-primary col-lg-3">SignUp</button>
    
    </div>
   
       
  </div>
        
  </div>
</div>

       
    
    );
}

export default Signuppage;
