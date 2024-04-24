import styles from "../style"

import { arrow_down, menu, close } from "../assets"
import { navLinks, information } from "../constants"
import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return(
    <nav id="home" className='w-full flex py-2 justify-between items-center'>
      <div className="font-montseratt font-semibold text-[40px] text-white ">
        <a href={`#home`}>
          <div className="">
            MotoDrive
          </div>
        </a>
      </div>
      <div className="md:flex flex-row hidden ">
        <div className="flex flex-row cursor-pointer mr-10">
          <p className="font-montseratt font-semibold text-[16px] text-white">
            Ещё
          </p>
          <img src={arrow_down} alt="" className=""/>
        </div>

        <ul className='list-none flex justify-end items-center flex-1'>
          {navLinks.map((nav, index)=>(
            <li key={nav.id} className={`cursor-pointer font-montseratt font-semibold text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
              <a href={`#${nav.id}`}>
                <div className="">
                  {nav.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center ">

        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

        <div className={`bg-main ${toggle ? 'flex' : 'hidden'}  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1000]`}>

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className={`cursor-pointer text-[16px] text-white font-semibold`}>
                <a href={`#${nav.id}`}>
                  <div className="">
                    {nav.title}
                  </div>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
      
      <div className="sm:flex flex-col justify-center items-center hidden px-4">
        {information.map((inf) => (
          <p key={inf.id} className={`font-montseratt text-white ${inf.id === "numberphone" ? 'font-semibold' : 'font-normal'} ${inf.id === "address" ? 'hidden' : 'block'}`}>
            {inf.title}
          </p>
        ))}
      </div>
    </nav>
  )
}

export default Navbar