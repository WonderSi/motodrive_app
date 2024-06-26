import { moto01, moto02, moto03, moto04, moto05, moto06, moto07, moto08, moto09, baby, bike, book_open, captions, dollar, graduation, helmet, wallet } from "../assets"

export const navLinks = [
  {
    id: "catalog",
    title: "Каталог",
  },
  {
    id: "questions",
    title: "Вопросы",
  },
  {
    id: "contacts",
    title: "Контакты",
  },
];

export const information = [
  {
    id: "address",
    title: "Кузнецкий проспект, 85",
  },
  {
    id: "numberphone",
    title: "+7 (xxx) xxx-xx-xx",
  },
  {
    id: "schedule",
    title: "c 10:00 до 22:00 (пн-вс)",
  },
];

export const informationMoto = [
  {
    id: "1",
    img: moto01,
    name: "YAMAHA MT-09 2019",
    acceleration: "3.5",
    engine: "845",
    speed: "215",
    day: "8500",
    fullday: "10000",
    night: "65000",
  },
  {
    id: "2",
    img: moto02,
    name: "BMW S1000RR 2015",
    acceleration: "3.1",
    engine: "999",
    speed: "300",
    day: "13000",
    fullday: "15000",
    night: "11000",
  },
  {
    id: "3",
    img: moto03,
    name: "BMW S1000RR 2019",
    acceleration: "3.1",
    engine: "999",
    speed: "307",
    day: "19000",
    fullday: "22000",
    night: "16500",
  },
  {
    id: "4",
    img: moto04,
    name: "BMW S1000RR 2020",
    acceleration: "3.1",
    engine: "999",
    speed: "299",
    day: "19000",
    fullday: "22000",
    night: "16500",
  },
  {
    id: "5",
    img: moto05,
    name: "KAWASAKI ER400 2013",
    acceleration: "4.42",
    engine: "399",
    speed: "170",
    day: "4250",
    fullday: "5000",
    night: "3500",
  },
  {
    id: "6",
    img: moto06,
    name: "KAWASAKI Z800 2013",
    acceleration: "3.3",
    engine: "806",
    speed: "233",
    day: "6800",
    fullday: "8000",
    night: "5100",
  },
  {
    id: "7",
    img: moto07,
    name: "KAWASAKI Z1000 2014",
    acceleration: "3.3",
    engine: "1043",
    speed: "249",
    day: "8500",
    fullday: "10000",
    night: "5000",
  },
  {
    id: "8",
    img: moto08,
    name: "HONDA CBR 1000 RR 2012",
    acceleration: "3.6",
    engine: "999",
    speed: "299",
    day: "10000",
    fullday: "12000",
    night: "8000",
  },
  {
    id: "9",
    img: moto09,
    name: "DUCATI XDiavel 2016",
    acceleration: "3",
    engine: "1262",
    speed: "270",
    day: "13000",
    fullday: "15000",
    night: "11000",
  },
];

export const questions = [
  {
    id: "1",
    name: "Страховой взнос",
    title: "Арендатор платит обязательный страховой взнос, который составляет 20 000 руб., передается в момент заключения договора.",
  },
  {
    id: "2",
    name: "Авария",
    title: "В случае возникновения аварийной ситуации с причинением ущерба транспортному средству, необходимо немедленно известить администратора MotoDrive о случившемся по телефону.",
  },
  {
    id: "3",
    name: "Документы",
    title: 'Арендатор предоставляет паспорт и водительское удостоверение на свое имя на право управления транспортным средством категории "А".',
  },
  {
    id: "4",
    name: "Оплата",
    title: "Арендатор обязан уплатить арендную плату при заключении договора. В случае нарушения сроков аренды ТС, оплатить превышение сроков аренды",
  },
  {
    id: "5",
    name: "Ущерб",
    title: "В случае причинения ущерба ТС по вине арендатора HulkMoto вправе удержать сумму страхового взноса в качестве оплаты за простой транспортного средства на момент ремонта и стоимость поврежденных деталей, и стоимость работ по их замене, исходя из их рыночной стоимости.",
  },
  {
    id: "6",
    name: "ДТП",
    title: "В случае ДТП незамедлительно свяжитесь с нами по телефону, мы поможем Вам разобраться с ситуацией.",
  },
];

export const requirements = [
  {
    name: "Требования",
    elements: [
      {
        id: "1",
        icon: baby,
        title: "Возраст 18+",
      },
      {
        id: "2",
        icon: dollar,
        title: "Залог 2000",
      },
      {
        id: "3",
        icon: captions,
        title: "Паспорт и в/у",
      },
      {
        id: "4",
        icon: wallet,
        title: "Оплата проката сразу",
      },
    ],
  },
  {
    name: "При аренде",
    elements: [
      {
        id: "1",
        icon: bike,
        title: "Обслуженный мото",
      },
      {
        id: "2",
        icon: book_open,
        title: "Открытый полис ОСАГО",
      },
      {
        id: "3",
        icon: helmet,
        title: "Экипировка",
      },
      {
        id: "4",
        icon: graduation,
        title: "Краткий курс по управлению",
      },
    ],
  },
];