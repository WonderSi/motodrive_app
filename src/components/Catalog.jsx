import styles from "../style"

import Button from "./Button"
import CardMoto from "./CardMoto"
import { informationMoto } from "../constants"

const Catalog = () => (
  <section id="catalog" className='mt-5'>
    <div>
      <h1 className={`${styles.heading1} text-center`}>
        Каталог
      </h1>
    </div>
    <div className="flex flex-wrap justify-center mx-4">
      {informationMoto.map((moto) => (
        <div key={moto.id}>
          <CardMoto 
          img={moto.img}
          name={moto.name}
          acceleration={moto.acceleration}
          engine={moto.engine}
          speed={moto.speed}
          day={moto.day}
          fullday={moto.fullday}
          night={moto.night}
          />
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <Button text="Посмотреть ещё"/>
    </div>
  </section>
)

export default Catalog