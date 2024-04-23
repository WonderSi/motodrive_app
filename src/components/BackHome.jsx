import React, { useEffect } from 'react'
import styles from '../style';

import { arrow_down } from '../assets';

const AddLibrary= () => (
  useEffect(() => {
    var oldScrollY = 0;
    const div = document.getElementById("fixedDiv");

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const dY = scrolled - oldScrollY;

      if (dY < 0) {
        div.className = "fixed fixed-bottom";
      } else {
        div.className = "fixed fixed-top";
      }

      oldScrollY = scrolled;
    }

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    }
  }, []))

const BackHome = () => {
  return (
    
    <div id="fixedDiv" className='fixed fixed-bottom'>
        <AddLibrary />
        <a href="#home">
            <div className='flex justify-center items-center cursor-pointer hover:translate-y-[-5px] easy-in duration-300'>
                <img src={arrow_down} alt="arrow_down" className="w-full rotate-180"/>
            </div>   
        </a>
    </div>
  )
}

export default BackHome