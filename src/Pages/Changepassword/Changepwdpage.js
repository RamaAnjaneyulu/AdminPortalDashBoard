import React from 'react';
import Changepwdstyle from "./Changepwdstyle.css";


const Changepwdpage = () => {
    return (
        
<div className='row justify-content-md-center card-height top-pad'>
<div className="card col col-lg-8 ">
  
  <div className="card-body bg-color">
<div className='row'>
<div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputOldPassword" className="col-sm-3 col-form-label">Emai ID</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-topmargn">
    <label for="inputNewPassword" className="col-sm-3 col-form-label">Old Password</label>
    <div className="col-sm-6 txt-margin">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-topmargn">
    <label for="inputNewPassword" className="col-sm-3 col-form-label">New Password</label>
    <div className="col-sm-6 txt-margin">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center txt-topmargn">
    <label for="inputNewPassword" className="col-sm-3 col-form-label">Confirm Password</label>
    <div className="col-sm-6 txt-margin">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>

        </div>
        <div className="mb-12 row justify-content-md-center txt-margin">
        <label for="inputPassword" className="col-sm-1 col-form-label"></label>
        <button type="button" className="btn btn-primary col-lg-3">Submit</button>
    
    </div>
        
  </div>
        
  </div>
</div>

       
    
    );
}

export default Changepwdpage;
