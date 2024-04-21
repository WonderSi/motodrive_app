import styles from "../style"

import Button from './Button'
import { background, simplicity, convenience, comfort } from "../assets"

const Hero = () => (
  <section id="home" className="relative">
    {/* <div className="absolute block w-full overflow-hidden z-[1]">
      <img src={background} alt="" className="img-background"/>
    </div> */}
    <div className="relative flex flex-col items-center z-[2]">
      <div className="mt-10">
        <h1 className={`${styles.heading1} text-center px-10`}>Мотопрокат в Кемерово</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        <div className="flex flex-col justify-center items-center sm:mx-10 mx-6 sm:mt-0 mt-3">
          <img src={simplicity} alt="simplicity" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Простота</p>
        </div>
        <div className="flex flex-col justify-center items-center sm:mx-10 mx-6 sm:mt-0 mt-3">
          <img src={convenience} alt="convenience" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Удобство</p>
        </div>
        <div className="flex flex-col justify-center items-center sm:mx-10 mx-6 sm:mt-0 mt-3">
          <img src={comfort} alt="comfort" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Комфорт</p>
        </div>
      </div>
      <div className="sm:my-48 my-36">
        <Button />
      </div>
    </div>    
  </section>
)

export default Hero