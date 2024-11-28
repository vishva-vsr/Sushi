import React from 'react'
import susi from "../../assets/sushi-001.jpg"
import "./Head.css"

function Head() {
  return (
   <>
   <div className='over-all-bg'>
   <div className="parent-container">
<div id='head-bg'>
<div className="col">
    <div className="row">
        <p id='Headertext' className='d-flex justify-content-center text-center'>A TASTE OF FIREWORKS<br/>
        IN YOUR TASTE BUDS</p>
    </div>
    <div className="row d-flex justify-content-center">
        <img src={susi} alt="" id='img-header'/>
        <button class="button-1 " role="button">ORDER NOW</button>
    </div>

</div>
</div>
</div>
</div>
   </>
  )
}

export default Head