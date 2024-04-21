import styles from "../style"

const CardInfo = () => (
    <section className="w-full gray__gradient">
        <div className="flex justify-center">
            <div className={`${styles.boxWidth}`}>
                <div className="bg-white rounded-[25px] py-5 md:mx-32 mx-5 my-12">
                    <h1   h1 className={`${styles.heading2} text-center sm:px-24 px-10`}>В настоящее время услуга аренда мотоцикла, набирает 
            популярность. Это удобно и просто, особенно для тех, кто пока 
            не определился какой выбрать мотоцикл для личной покупки.</h1>
                    <p className={`${styles.paragraph} text-center sm:px-12 px-10 mt-5`}>Прокат мото, с другой стороны, дает возможность попробовать разнообразные варианты и найти тот, 
            который подходит тебе. Чтобы взять мотоцикл в аренду в Москве, достаточно иметь права категории А, 
            паспорт, выбрать на нашем сайте подходящий для себя и забронировать.</p>
                </div>
            </div>
        </div>
    </section>
)

export default CardInfo