import styles from "../style"

import Button from './Button'
import { background, simplicity, convenience, comfort } from "../assets"

const Hero = () => (
  <section id="home" className="">
    <div className="flex flex-col items-center">
      <div className="mt-10">
        <h1 className="sm:text-[48px] text-[32px] font-semibold font-montseratt">Мотопрокат в Кемерово</h1>
      </div>
      <div className="flex flex-row justify-between mt-10 sm:gap-40 gap-16">
        <div className="flex flex-col justify-center items-center">
          <img src={simplicity} alt="simplicity" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Простота</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={convenience} alt="convenience" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Удобство</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={comfort} alt="comfort" className="w-[50px] h-[50px]"/>
          <p className="font-montseratt sm:text-[20px] text-[18px] font-semibold">Комфорт</p>
        </div>
      </div>
      <div className="mt-48">
        <Button />
      </div>
    </div>    
  </section>
)

export default Hero