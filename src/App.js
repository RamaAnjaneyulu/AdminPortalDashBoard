import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Loginpage.js";
function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
    <Route  path="/" element ={<Login/>} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
