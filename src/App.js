import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./Pages/Login/Loginpage.js";
import Forgetpage from './Pages/Forget/Forgetpage.js';
import NotFoundPage from './Pages/NotFound/NotFoundPage.js';
import Signuppage from './Pages/SignUp/Signuppage.js';
import Changepwdpage from './Pages/Changepassword/Changepwdpage.js';
import Layoutpage from './Pages/Layout/Layoutpage.js';
function App() {
  return (
<<<<<<< HEAD
    <div className='container'>
=======
    <div className='container-fluid'>
    <BrowserRouter>
>>>>>>> f1d0ea0b70b6acf2dc850cb6c6ea8d5c5609061e
    <Routes>
    <Route  path="/" element ={<Loginpage/>} />
    <Route path="/Forgetpage" element={<Forgetpage />}></Route>
    <Route path="/Signuppage" element={<Signuppage />}></Route>
    <Route path="/Changepwdpage" element={<Changepwdpage />}></Route>
    <Route path='/Layoutpage' element={<Layoutpage/>}></Route>
    <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
