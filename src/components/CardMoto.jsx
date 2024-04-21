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
            <div>
                <p className="text-center">
                    <span className="font-semibold">{firstWord}</span> {restOfSentence}    
                </p>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Разгон 0-100 км/ч</p>
                    <p>{acceleration}</p>
                </div>
                <div className="flex justify-between">
                    <p>Объем двигателя</p>
                    <p>{engine}</p>
                </div>
                <div className="flex justify-between">
                    <p>Максимальная скорость</p>
                    <p>{speed}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <div>
                        <p>День</p>
                    </div>
                    <p>{day}</p>
                </div>
                <div>
                    <div>
                        <p>Сутки</p>
                    </div>
                    <p>{fullday}</p>
                </div>
                <div>
                    <div>
                        <p>Ночь</p>
                    </div>
                    <p>{night}</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CardMoto