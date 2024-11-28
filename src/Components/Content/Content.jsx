import React from 'react'
import Tempura from "../../assets/tempura-prawn.jpg";
import rice from "../../assets/fried-rice.jpg";
import roll from "../../assets/spring-roll.jpg";
import "./Content.css"
import { TypeAnimation } from 'react-type-animation';


function Content() {
    const paraContent=`At (TAKEAWAY NAME) in (TAKEAWAY TOWN), our pride lies in
        serving the most exquisite sushi creations. Our skilled sushi
        chefs meticulously craft each roll with precision and passion,
        ensuring an unparallelled dining adventure. Immerse yourself
        in a world of flavours and textures, embarking on a unique
        culinary journey that unveils the essence of Japan's rich
        gastronomic heritage with every bite.`

        const paraContent2=`Creat food and limited time special offers are always available
        at (TAKEAWAY NAME), {TAKEAWAY TOWN}. Feel free to
        browse through our brand new website and place an online
        order.`
  return (
    <>
    <div id='bg-content'>
    <div className="container">
        <div className="row">
            <div className="col flex-column d-flex justify-content-center text-align-center">
            <TypeAnimation
                sequence={[
                  `Savour Authentic
Japanese Flavours`, 1000,
                ]}
                wrapper="p"
                cursor={true}
                speed={50}
                className='Content-heading'
                
              />
    <span className=''>
        <p className='paraContent '>
            {paraContent}<br/>
          <p className='mt-2'>{paraContent2}</p>  
        </p>
    </span>
    <button id='Order-Now-btn' className='btn btn-lg'>
         Order Now  
    </button>
            </div>
            <div className="col">
            <div class="gallery-container">
    <div className="gallery-item">
      <img src={Tempura} alt="Tempura"/>
    </div>
    <div class="gallery-item"id='img-pad'>
      <img src={rice} alt="Fried Rice" />
    </div>
    <div class="gallery-item">
      <img src={roll} alt="Spring Rolls"/>
    </div>
  </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Content