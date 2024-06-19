import React from 'react'
import "./SecoundBoard.css"
function SecoundBoard() {
  return (
    <>
    <div className="mainDivv">
      <div className="div11">
      <i class="fa-solid fa-upload"></i>
      <p>Add new file</p>
      </div>
      <div className="div22">
        <div className="ff">
          <p id='pp1'>Your storage</p>
          <p id='pp2'>25% left</p>
        </div>
        <p className='ff1'>75 GB of 100GB use</p>
        <div className="outer">
          <div className="inner"></div>
        </div>
        
      </div>
      <div className="div33">
        <p id='pp1'>Your shared files</p>
        <div className="div4" id='zero'>
          <p>Keynote files </p>
          <div id="ps">
            <div className="divn"></div>
            <div className="divm"></div>
          </div>
          
          
        </div>
        <div className="div4" id='first'>
          <p>Vacation photos</p>
          <div id="ps">
            <div className="divn2"></div>
            
          </div>
        </div>
        <div className="div4" id='second'>
          <p>Project reports</p>
          <div id="ps">
            <div className="divx"></div>
            <div className="divy"></div>
          </div>
          
        </div>
        <div className="div4" id='three'>
        <i class="fa-solid fa-plus"><span>add more</span></i>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default SecoundBoard