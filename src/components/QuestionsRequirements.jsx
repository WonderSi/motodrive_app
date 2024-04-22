import styles from "../style"
import { layout } from "../style"

import CardQuestions from "./CardQuestions"
import CardRequirements from "./CardRequirements"
import { questions } from "../constants"

const QuestionsRequirements = () => (
  <section id="questions" className=" px-24">
    <div className="">
      <div className="px-8">
        <h1 className={`${styles.heading1}`}>Условия и <br className="md:block hidden"/> 
часто задаваемые вопросы</h1>
        <p className={`${styles.paragraph}`}>В случае любой нестандартной ситуации, включая ДТП, можете рассчитывать на нашу помощь.<br className="md:block hidden"/> Мы своих в беде не бросаем!</p>
      </div>
      <div className={`flex md:flex-row md:justify-between flex-col-reverse`}>
        <div className={`flex flex-col`}>
          {questions.map((card)=>(
            <div key={card.id}> 
              <CardQuestions 
              name={card.name} 
              title={card.title}
              />
            </div>
          ))}
        </div>
        <div className={`flex mt-5`}>
          <CardRequirements />
        </div>
      </div>
    </div>
  </section>
)

export default QuestionsRequirements