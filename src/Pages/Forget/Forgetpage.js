import React from 'react';
import Forgetstyle from "./Forgetstyle.css";


const Forgetpage = () => {
    return (
        
<div className='row justify-content-md-center card-height top-pad'>
<div className="card col col-lg-8 ">
  
  <div className="card-body bg-color">
<div className='row card-top'>
<div className="mb-6 row justify-content-md-center txt-top">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="username"/>
    </div>
  </div>
  <div className="mb-6 row justify-content-md-center">
    <label for="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-6 txt-margin">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>

        </div>
        <div className="mb-12 row justify-content-md-center txt-margin">
        <label for="inputPassword" className="col-sm-1 col-form-label"></label>
        <button type="button" className="btn btn-primary col-lg-3">Login</button>
    
    </div>
        
  </div>
        
  </div>
</div>

       
    
    );
}

export default Forgetpage;
