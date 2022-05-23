import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./Pages/Login/Loginpage.js";
import Forgetpage from './Pages/Forget/Forgetpage.js';
import NotFoundPage from './Pages/NotFound/NotFoundPage.js';
function App() {
  return (
    <div className='container'>
    <Routes>
    <Route  path="/" element ={<Loginpage/>} />
    <Route path="/Forgetpage" element={<Forgetpage />}></Route>
    <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
