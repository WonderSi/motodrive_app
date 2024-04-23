import styles from "../style"
import { layout } from "../style"

import CardQuestions from "./CardQuestions"
import CardRequirements from "./CardRequirements"
import { questions, requirements } from "../constants"

const QuestionsRequirements = () => (
  <section id="questions" className=" sm:px-24 px-0 mt-10">
    <div className="">
      <div className="md:px-8 px-0">
        <h1 className={`${styles.heading1}`}>Условия и <br className="md:block hidden"/> 
часто задаваемые вопросы</h1>
        <p className={`${styles.paragraph}`}>В случае любой нестандартной ситуации, включая ДТП, можете рассчитывать на нашу помощь.<br className="md:block hidden"/> Мы своих в беде не бросаем!</p>
      </div>
      <div className={`flex lg:flex-row md:justify-between flex-col-reverse`}>
        <div className={`flex flex-col`}>
          {questions.map((card)=>(
            <div key={card.id} className="flex justify-center"> 
              <CardQuestions 
              name={card.name} 
              title={card.title}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-center">
          {requirements.map((requirements) => (
            <div key={requirements.name} className="max-w-[505px] bg-[rgb(244,244,244)] rounded-[25px] mt-5 shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]">
              <div className="w-full h-[55px] bg-main flex items-center rounded-t-[25px]">
                <h1 className={`${styles.heading2} text-center text-white`}>{requirements.name}</h1>
              </div>
              <div className="flex flex-wrap justify-center">
                {requirements.elements.map((elements) => (
                  <div key={elements.id} className="w-[252.5px] h-[75px] flex flex-row justify-center items-center group">
                    <img src={elements.icon} alt="icon" className="w-[32px] h-[32px] ml-4 group-hover:translate-y-[-5px] easy-in duration-300"/>
                    <p className="font-montseratt font-semibold text-[16px] text-center flex-1 px-4">{elements.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default QuestionsRequirements