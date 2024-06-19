import React from 'react'
import "./MainBoard.css"

function MianBoard() {
  return (
    <div className='main'>
      <div className="boxx">
      <i class="fa-solid fa-magnifying-glass" ></i>
      <input type="text" placeholder='Search'/>
      </div>
    <h6 className='h6'>Categories</h6>
    <div className="container">
      <div className='div '>
        <div className="div3">
      <i class="fa-solid fa-camera"></i>
      <i class="fa-solid fa-star star"></i>
      </div>
      <p className='p g'>Pitures</p>
      <p className='p s'>480 files</p>

      </div>
      <div className='div greens'>
      <i class="fa-solid fa-file green"></i>
      <p className='p g'>Documents</p>
      <p className='p s'>190 files</p>
      </div>
      <div className='div pinks'>
      <i class="fa-solid fa-video pink"></i>
      <p className='p g'>Vidios</p>
      <p className='p s'>30 files</p>
      </div>
      <div className='div blues'>
      <i class="fa-solid fa-microphone blue"></i>
      <p className='p g'>Audio</p>
      <p className='p s'>80 files</p>
      </div>
    </div>


    {/* hrohrgphphprphp */}

    <h6 className='h6'>Files</h6>
    <div className="container">
      <div className='div divxy'>
        <div className="div3">
        <i class="fa-solid fa-briefcase"></i>
      </div>
      <p className='p g'>Work</p>
      <p className='p s'>820 files</p>

      </div>
      <div className='div divxy '>
      <i class="fa-solid fa-user green"></i>
      <p className='p g'>Personal</p>
      <p className='p s'>115 files</p>
      </div>
      <div className='div divxy'>
      <i class="fa-solid fa-graduation-cap pink"></i>
      <p className='p g'>School</p>
      <p className='p s'>65 files</p>
      </div>
      <div className='div divxy '>
      <i class="fa-solid fa-microphone blue"></i>
      <p className='p g'>Archive</p>
      <p className='p s'>21 files</p>
      </div>
      <div className='div divxy flex'>
      <i class="fa-solid fa-plus"></i>
     
      </div>
    </div>
    <h6 className='h6'>Recent Files</h6>
    <div className="maindiv">

    <div className="file">
    <i class="fa-solid fa-camera blue"></i>
    <div className='icon-div'>

    <p className='p1'>IMG_100000</p>
    <p>PNG file</p>
    <p>5 MB</p>
    <i class="fa-solid fa-share-nodes" id='icons'></i>
    <i class="fa-solid fa-ellipsis icons" id='icons'></i>
    </div>
    </div>
    <div className="file">
    <i class="fa-solid fa-video pinkss"></i>
    <div className='icon-div'>

    <p>Startup pitch</p>
    <p>AVI file</p>
    <p>109 MB</p>
    <i class="fa-solid fa-share-nodes" id='icons'></i>
    <i class="fa-solid fa-ellipsis icons" id='icons'></i>
    </div>
    </div>
    <div className="file">
    <i class="fa-solid fa-microphone lightblue "></i>
    <div className='icon-div'>

    <p>IMG_100000</p>
    <p>PNG file</p>
    <p>5 MB</p>
    <i class="fa-solid fa-share-nodes" id='icons'></i>
    <i class="fa-solid fa-ellipsis icons" id='icons'></i>
    </div>
    </div>
    <div className="file">
    <i class="fa-solid fa-file greenss "></i>
    <div className='icon-div'>

    <p>IMG_100000</p>
    <p>PNG file</p>
    <p>5 MB</p>
    <i class="fa-solid fa-share-nodes" id='icons'></i>
    <i class="fa-solid fa-ellipsis icons" id='icons'></i>
    </div>
    </div>
    </div>
    </div>
  )
}

export default MianBoard