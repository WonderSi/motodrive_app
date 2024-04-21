import styles from "../style"

const CardMoto = ({key,img,name,acceleration,engine,speed,day,fullday,night}) => {

    const words = name.split(" ");
    const firstWord = words[0];
    const restOfSentence = words.slice(1).join(" ");

    return (
    <section className='w-[300px] h-[437px] bg-[#f4f4f4] rounded-[25px] m-5'>
        <div className='w-full h-[178px] bg-[#D3D3D3] rounded-t-[25px] flex justify-center items-end'>
            <img src={img} alt="moto" />
        </div>
        <div>
            <div className="mt-4">
                <p className={`font-montseratt text-[16px] leading-[22px] text-center font-normal`}>
                    <span className="font-semibold">{firstWord}</span> {restOfSentence}    
                </p>
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
                    <div className="bg-main rounded-[50px] px-3">
                        <p className="font-montseratt font-semibold text-white text-[16px]">День</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-1">{day} руб</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-main rounded-[50px] px-3">
                        <p className="font-montseratt font-semibold text-white text-[16px]">Сутки</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-1">{fullday} руб</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-main rounded-[50px] px-3">
                        <p className="font-montseratt font-semibold text-white text-[16px]">Ночь</p>
                    </div>
                    <p className="font-montseratt font-medium text-[14px] mt-1">{night} руб</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-4">
            <div className="w-[250px] h-[50px]">
                <button className='bg-main w-full h-full rounded-[50px]'>
                    <p className='font-montseratt text-[16px] font-semibold text-white text-center'>Забронировать</p>
                </button>
            </div>
        </div>
    </section>
    )
}

export default CardMoto