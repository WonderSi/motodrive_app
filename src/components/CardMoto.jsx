import styles from "../style"

const CardMoto = ({img,name,acceleration,engine,speed,day,fullday,night}) => {

    const words = name.split(" ");
    const firstWord = words[0];
    const restOfSentence = words.slice(1).join(" ");

    return (
    <section className='w-[300px] h-[437px] bg-[#f4f4f4] rounded-[25px] m-5 mx-[50px] shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]'>
        <div className='w-full h-[178px] bg-[#D3D3D3] rounded-t-[25px] flex justify-center items-end'>
            <img src={img} alt="moto" />
        </div>
        <div>
            <div className="mt-4">
                <p className={`font-montseratt text-[16px] leading-[22px] text-center font-normal`}>
                    <span className="font-semibold">{firstWord}</span> {restOfSentence}    
                </p>
            </div>
            <div className="flex justify-center">
                <div className="w-[150px] border-t-2"/>
            </div>
            <div className="mt-4 mx-3">
                <div className="flex justify-between">
                    <p className={`font-montseratt  font-light text-[15px] leading-[20px]`}>Разгон 0-100 км/ч</p>
                    <p className={`font-montseratt  font-medium text-[15px] leading-[20px]`}>{acceleration} сек</p>
                </div>
                <div className="flex justify-between">
                    <p className={`font-montseratt  font-light text-[15px] leading-[20px]`}>Объем двигателя</p>
                    <p className={`font-montseratt  font-medium text-[15px] leading-[20px]`}>{engine} куб.</p>
                </div>
                <div className="flex justify-between">
                    <p className={`font-montseratt  font-light text-[15px] leading-[20px]`}>Максимальная скорость</p>
                    <p className={`font-montseratt  font-medium text-[15px] leading-[20px]`}>{speed} км/ч</p>
                </div>
            </div>
            <div className="flex justify-between mx-6 mt-4">
                <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-[50px] px-3 border-solid border-2 border-main">
                        <p className="font-montseratt font-semibold text-main text-[16px]">День</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-1">{day} руб</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-main rounded-[50px] px-3">
                        <p className="font-montseratt font-semibold text-white text-[16px]">Сутки</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-2">{fullday} руб</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-[50px] px-3 border-solid border-2 border-main">
                        <p className="font-montseratt font-semibold text-main text-[16px]">Ночь</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-1">{night} руб</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-4">
            <div className="group w-[250px] h-[50px]">
                <button className='easy-out duration-500 bg-main w-full h-full rounded-[50px] border-2 border-[#f4f4f4] group-hover:bg-primary group-hover:border-solid group-hover:border-2 group-hover:border-main'>
                    <p className='easy-out duration-500 font-montseratt text-[16px] font-semibold text-white text-center group-hover:text-main'>Забронировать</p>
                </button>
            </div>
        </div>
    </section>
    )
}

export default CardMoto