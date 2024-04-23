import styles from "./style"

import { Navbar, Hero, Catalog, QuestionsRequirements, Contacts, Footer, CardInfo, BackHome} from './components'

const App = () => (
  <div className=" w-full overflow-hidden">
    <BackHome />
    <div className={`bg-main ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className="bg-cover bg-center bg-hero-pattern">
      <div className="bg-no-repeat bg-[center_bottom] bg-hero-pattern-moto">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexCenter}`}>
      <CardInfo />
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Catalog />
        <QuestionsRequirements />
        <Contacts />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
