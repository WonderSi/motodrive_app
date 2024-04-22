import styles from "../style"

import Button from './Button'
import { background, simplicity, convenience, comfort } from "../assets"

const Hero = () => (
  <section className="relative">
    <div className="relative flex flex-col items-center z-[2]">
      <div className="mt-20">
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
      <div className="sm:my-24 sm:mt-48 my-24">
        <Button text="Записаться на катания"/>
      </div>
    </div>    
  </section>
)

export default Hero