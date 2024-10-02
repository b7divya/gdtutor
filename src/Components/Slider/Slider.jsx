import React from 'react'
import './Slider.css'
import Menubar from '../Menubar/Menubar';


const Slider = () => {

  const text = `Personalized Home Tutions For The Bright Future`;
  return ( 
    <div className='slider'>
      <div className='slider-menu'>
        <Menubar />
      </div>
      <div className='slider-container'>
        <div className='slider-container-left'>
          <div className='slider-container-left-heading'>
            <h2>G.D. HOME TUTOR </h2>
          </div>
          <div className='slider-container-left-desc'>
            <h5>Empowering students through personalized tutoring that strengthens understanding, builds self-confidence, and drives success across all subjects.</h5>
          </div>
          <div className='slider-container-left-button'>
            <button className='slider-btn'>Enquire Now</button>
          </div>
        </div>
        <div className='slider-container-right'>
              
        </div>
      </div>
    </div>
  )
}

export default Slider