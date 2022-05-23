import React from 'react'
import Layoutstyle from"./Layoutstyle.css"
import Topmenupage from '../Topmenu/Topmenupage'
import Sidemenupage from '../Sidemenubar/Sidemenupage'
import Footerpage from '../Footer/Footerpage'


function Layoutpage() {
  return (
    <div className="">
      <div className='row'>
      <div className="Col-md-9">
      <Topmenupage/>
      </div>
      <div className='col-md-3'>
      <Sidemenupage/>
      </div>
      </div>
       <Footerpage/>
    </div>
   
    
  )
}

export default Layoutpage