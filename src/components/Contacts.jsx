import styles from "../style"

import { clock,phone } from "../assets"
import { information } from "../constants"

const Contacts = () => (
  <section id="contacts" className=" sm:px-24 px-0 mt-16">
    <div className="">
      <div className="md:px-8 px-0">
        <h1 className={`${styles.heading1}`}>Контакты</h1>
        <p className={`${styles.paragraph}`}>Адрес и другая доступная информация, чтобы вы могли связаться с нами!</p>
      </div>
      <div className="flex flex-row justify-center mt-8 rounded-[30px] shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]">
        <div className="">
          <div className="w-[300px] h-[400px] bg-[#F4F4F4] rounded-l-[30px]">
            <div className="bg-main w-[300px] h-[75px] flex justify-center items-center rounded-tl-[30px]"><p className={`text-[36px] font-montseratt text-white font-semibold`}>Кемерово</p></div>
              <div>
              <div className="flex justify-center items-center flex-col mt-5 px-4">
                <div className="">
                  {information.map((inf) => (
                    <div className="flex flex-row justify-center">
                      <img src={phone} alt="" className={`${inf.id === "numberphone" ? 'block' : 'hidden'}`}/>
                      <img src={clock} alt="" className={`${inf.id === "schedule" ? 'block' : 'hidden'}`}/>
                      <p key={inf.id} className={`${inf.id === "address" ? 'text-[16px] font-montseratt font-semibold' : (inf.id === "numberphone" ? 'text-[16px] font-montseratt font-normal mt-2 ml-1' : (inf.id === "schedule" ? 'text-[16px] font-montseratt font-normal mt-2 ml-1' : ''))}`}>
                        {inf.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <p className={`${styles.paragraph} text-center`}>Планируя поездку к нам, уточните наличие желаемого байка по телефону или оформив бронь через форму на сайте. Не забудьте паспорт и водительское удостоверение для заключения договора аренды. Мы ждём вас!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] rounded-r-[30px]">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc30ba78b0de68dec5a09403c4fce0e10ac5abcf4adc9fe5d15b5fcb514cf051&amp;source=constructor" width="798" height="400" frameborder="0" className="rounded-r-[30px]"></iframe>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts