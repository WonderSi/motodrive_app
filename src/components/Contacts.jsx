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
      <div className="max-w-[1098px] flex md:flex-row flex-col justify-center mt-8 rounded-[30px] shadow-[0px_12.5px_10px_-10px_rgba(0,0,0,0.3)]">
        <div className="bg-[#F4F4F4] md:rounded-l-[30px] rounded-t-[30px] flex-auto md:max-w-[300px] w-full">
          <div className="relative bg-main w-full h-[75px] flex justify-center items-center md:rounded-tl-[30px] md:rounded-none rounded-t-[30px]"><p className={`text-[36px] font-montseratt text-white font-semibold`}>Кемерово</p></div>
          <div>
            <div className="flex justify-center items-center flex-col mt-5 px-4">
              <div className="xs:pb-0 pb-5">
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
              <div className="mt-5 pb-5 xs:block hidden">
                 <p className={`${styles.paragraph} text-center`}>Планируя поездку к нам, уточните наличие желаемого байка по телефону или оформив бронь через форму на сайте. Не забудьте паспорт и водительское удостоверение для заключения договора аренды. Мы ждём вас!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] md:rounded-r-[30px] rounded-b-[30px] flex-1">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc30ba78b0de68dec5a09403c4fce0e10ac5abcf4adc9fe5d15b5fcb514cf051&amp;source=constructor" height="400" frameborder="0" className="w-full md:rounded-r-[30px] rounded-b-[30px]"></iframe>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts