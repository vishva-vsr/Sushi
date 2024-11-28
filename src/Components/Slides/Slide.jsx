import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Slide.css';
import dis1 from '../../assets/dish1.png';
import dis2 from '../../assets/dish2.png';
import dis3 from '../../assets/dish3.png';
import dis4 from '../../assets/dish4.png';
import dis5 from '../../assets/dish5.png';
import dis6 from '../../assets/dish6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,

    afterChange: (current) => setCurrentSlide(current), 
    responsive: [
        {
            breakpoint: 1440,
            settings: {
              slidesToShow: 6,
            },
          },
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    { src: dis1, title: 'Sushi' },
    { src: dis2, title: 'Donburi' },
    { src: dis3, title: 'Dim Sim' },
    { src: dis4, title: 'MoMos' },
    { src: dis5, title: 'Prawn Spring Roll' },
    { src: dis6, title: 'Prawn Tempura' },
  ];
  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      sliderRef.current.slickPrev();  
    } else if (e.key === 'ArrowRight') {
      sliderRef.current.slickNext(); 
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
<>
<div id='silde-over'>
    <div className="col d-flex justify-content-center">
      <p id='text-head'>Our Special Dishes</p>
    </div>
    <div className="carousel-container">
    <Slider ref={sliderRef} {...settings}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'zoomed' : ''}`}
              >
                <div className="carousel-content">
                  <img src={item.src} alt={item.title} className="carousel-image" />
                  <p className="carousel-title">{item.title}</p>
                </div>
              </div>
            ))}
          </Slider>

    </div>
    <div className="col d-flex justify-content-center mb-4"> <button className='btn-45'>ORDER NOW</button></div>
   
    </div>
    </>
  );
}

export default Slide;
