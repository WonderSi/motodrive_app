import styles from "./style"

import { Navbar, Hero, Catalog, QuestionsRequirements, Contacts, Footer, Card} from './components'
import { background } from "./assets"

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`bg-main ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexCenter} flex-col`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
      <Card />
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
