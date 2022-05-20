import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./Pages/Login/Loginpage.js";
import Forgetpage from './Pages/Forget/Forgetpage.js';
function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
    <Route  path="/" element ={<Loginpage/>} />
    <Route path="/Forgetpage" element={<Forgetpage />}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
