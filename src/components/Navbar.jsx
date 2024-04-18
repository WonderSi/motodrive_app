import styles from "../style"

import { arrow_down, menu, close } from "../assets"
import { navLinks, information } from "../constants"
import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return(
    <nav className='bg-main w-full flex py-2 justify-between items-center'>
      <div className="bg-main font-bold text-[40px] text-white ">
        MotoDrive
      </div>
      <div className="bg-main md:flex flex-row hidden ">
        <div className="bg-main flex flex-row cursor-pointer mr-10">
          <p className="bg-main text-[16px] text-white">
            Ещё
          </p>
          <img src={arrow_down} alt="" className="bg-main"/>
        </div>

        <ul className='bg-main list-none flex justify-end items-center flex-1'>
          {navLinks.map((nav, index)=>(
            <li key={nav.id} className={`cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
              <a href={`#${nav.id}`}>
                <div className="bg-main">
                  {nav.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-main md:hidden flex flex-1 justify-end items-center ">

        <img src={toggle ? close : menu} alt="menu" className="bg-main w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

        <div className={`bg-main ${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='bg-main list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className={`cursor-pointer text-[16px] text-white font-semibold`}>
                <a href={`#${nav.id}`}>
                  <div className="bg-main ">
                    {nav.title}
                  </div>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
      
      <div className="bg-main sm:flex flex-col justify-center items-center hidden px-4">
        {information.map((inf) => (
          <p key={inf.id} className={`bg-main text-white ${inf.id === "numberphone" ? 'font-semibold' : 'font-normal'}`}>
            {inf.title}
          </p>
        ))}
      </div>
    </nav>
  )
}

export default Navbar