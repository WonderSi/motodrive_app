import styles from "../style"

import {baby, bike, book_open, captions, dollar, graduation, helmet, wallet} from "../assets"

const CardRequirements = () => (
  <div className="">
    <div className="w-[505px] h-[205px] bg-[#F4F4F4] rounded-[25px] shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]  ">
      <div className="w-full h-[55px] bg-main flex items-center rounded-t-[25px]">
        <h1 className={`${styles.heading2} text-center text-white`}>Требования</h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={baby} alt="baby" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Возраст 18+</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={dollar} alt="dollar" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Залог 20000</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={captions} alt="captions" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Паспорт и в/у</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={wallet} alt="wallet" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Оплата проката сразу</p>  
        </div>
      </div>
    </div>
    <div className="w-[505px] h-[205px] bg-[#F4F4F4] rounded-[25px] mt-5 shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]">
      <div className="w-full h-[55px] bg-main flex items-center rounded-t-[25px]">
        <h1 className={`${styles.heading2} text-center text-white`}>При аренде</h1>
      </div>
      <div className="flex flex-wrap">
      <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={bike} alt="bike" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Обслуженный мото</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={book_open} alt="book_open" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Открытый полис ОСАГО</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={helmet} alt="helmet" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Экипировка</p>  
        </div>
        <div className="w-[252.5px] h-[75px] flex flex-row justify-center items-center">
          <img src={graduation} alt="graduation" className="w-[32px] h-[32px]"/>
          <p className="text-montseratt font-semibold text-[16px] ml-4">Краткий курс<br/> по управлению</p>  
        </div>
      </div>
    </div>
  </div>
)

export default CardRequirements