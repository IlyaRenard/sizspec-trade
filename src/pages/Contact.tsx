import Modal from "../components/Modal";
import FeedBackForm from "../components/FeedBackForm";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-blue-gray-300 text-gray-300 ">
      <h1 className="text-2xl text-center  font-bold">Контакты</h1>
      <div className="ml-4 md:h-screen">
        <div>
          <h1 className="  text-2xl text-center">Свяжитесь с нами</h1>
          <p className="indent-8 mb-3 text-left text-xl">
            Мы готовы ответить на все ваши вопросы и помочь в выборе необходимых
            средств индивидуальной защиты. Свяжитесь с нами по телефону,
            электронной почте или через форму обратной связи на нашем сайте.
          </p>

          <p className=" indent-8 mb-3 text-left text-xl">
            Наши контакты: Телефон: МТС: +375(29)813-16-46 МТС:
            +375(29)863-63-88
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Электронная почта: sizspectreyd@mail.ru
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Юридический адрес: 230025 г. Гродно, ул. Молодежная 3 пом. 22
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Почтовый адрес: 230014, г. Гродно, ул. Окрестная, д. 22
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Реквизиты: Общества с ограниченной ответственностью «Сизспец-трейд»
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            УНП 591051427 ОКПО 509408954000 р/с BY94 ALFA 3012 2G04 7100 1027
            0000 в ЗАО "Альфа-Банк" БИК ALFABY2X Ул. Сурганова, 43-47, 220013
            Минск, Республика Беларусь
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Директор Урбанович Олег Александрович на основании Устава
          </p>
        </div>
        <div className="ml-8">
          <Modal title="Обратная связь" btnText="Напишите нам">
            <FeedBackForm />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
