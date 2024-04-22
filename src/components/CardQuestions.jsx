import styles from "../style"

import { arrow_down } from "../assets"
import { useState } from "react"

const CardQuestions = ({ name, title }) => {
    const [toggle, setToggle] = useState(false)

    return(
        <div className="relative flex justify-center items-center flex-col my-10 w-[505px] bg-[#E4E4E4] rounded-[28px]">
            <div className="bg-[#F4F4F4] rounded-[50px] w-full h-[55px] flex justify-center items-center shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)] z-[1]">
                <div className="">
                    <h1 className={`${styles.heading2}`}>{name}</h1>
                </div>
                <div className={`bg-main absolute w-[55px] h-[55px] right-0 rounded-[50px] cursor-pointer`} onClick={() => setToggle((prev) => !prev)}>
                    <img src={arrow_down} alt="arrow_down" className={`${toggle ? "rotate-180" : "hover:translate-y-[5px]"} w-full easy-in duration-300`}/>
                </div>
            </div>
            <div className={`${toggle ? "block" : "hidden"} hiddenbg-[#E4E4E4] top-0 z-[0] pt-4 pb-4 px-14 rounded-b-[28px] shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]`}>
                <div className="">
                    <p className={`${styles.paragraph} text-center`}>{title}</p>
                </div>
            </div>
        </div>
    )
}
export default CardQuestions