import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Loginpage.js";
import Forget from "./Pages/Forget/Forgetpage.js";
function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
    <Route  path="/" element ={<Login/>} />
    <Route path="/Forget" element={<Forget />}></Route>

    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
