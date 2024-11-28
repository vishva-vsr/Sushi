import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import order from "../../assets/order12.png"
import "./Order.css"
import crdimg from "../../assets/food-tray.png"
import crdimg2 from "../../assets/fast-delivery.png"
import crdimg3 from "../../assets/wallet.png"
import oderend from '../../assets/oderpsd.png'


function Order() {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,  
  });

  const { ref: endRef, inView: endInView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,     
  });

    const orderpage=`Indulge in a diverse array of meticulously crafted Japanese
delicacies at {TAKEAWAY NAME) in {TAKEAWAY TOWN). From
fresh sashimi and sushi rolls to hearty bowls of ramen, our
menu showcases the finest ingredients and flavours. Immerse
yourself in the world of culinary delight.`
  return (
    <>
    <div className='bg-order'>
        <div className="col d-flex justify-content-center">
        <motion.img
            ref={ref}  
            src={order}
            alt="Order Demo"
            id='Order-demo'
            initial={{ x: '50%' }}  
            animate={inView ? { x: '0%' } : {}}  
            transition={{ duration: 1, type: 'spring', stiffness: 50 }} 
          />
        </div>

        <div class="card-container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
                <div class="card">
      <div class="card-icon">
        <img src={crdimg} alt="Pick a Dish"/>
      </div>
      <h3 class="card-title">PICK A DISH</h3>
      <p class="card-description">Choose your favourite dish from our delectable menu.</p>
    </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
                <div class="card">
      <div class="card-icon">
        <img src={crdimg3} alt="Make a Payment" />
      </div>
      <h3 class="card-title">MAKE A PAYMENT</h3>
      <p class="card-description">Online payment is simple and convenient.</p>
    </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
                <div class="card">
      <div class="card-icon">
        <img src={crdimg2} alt="Receive Your Food"/>
      </div>
      <h3 class="card-title">RECEIVE YOUR FOOD</h3>
      <p class="card-description">We will deliver hot food right to your door.</p>
    </div>
                </div>
            </div>

  </div>

<div className="container">
  <div className="row mt-5">
    <div className="col d-flex justify-content-center flex-column">
    <TypeAnimation
                sequence={[
                  `Japanese Culinary
     Extravaganza`, 1000,
                ]}
                wrapper="p"
                cursor={true}
                speed={50}
                className='oderpgh1'
                
              />
     <span>
        <p>{orderpage}</p>
       
     </span>
     <button class="button-12 " role="button">ORDER NOW</button>
    </div>
    <div className="col d-flex justify-content-center flex-column">
    <motion.img
                ref={endRef}  
                src={oderend}
                alt="End Image"
                id='endimg'
                initial={{ x: '50%' }} 
                animate={endInView ? { x: '0%' } : {}}  
                transition={{ duration: 1, type: 'spring', stiffness: 50 }}  
              />
    </div>
  </div>
  </div>
        </div>
       
    </>
  )
}

export default Order