import { useState } from "react";
import FeedBackForm from "../components/FeedBackForm";
import PreviewProduct from "../components/PreviewProduct";
import { allCategories } from "../data/category";
import CarouselImages from "./../components/CarouselImages";
import Modal from "./../components/Modal";

const Main = () => {
  const [categorys] = useState(allCategories);

  return (
    <div className="md:px-24 bg-gradient-to-b from-gray-800 to-blue-gray-300  ">
      <div className="md:h-screen h-52">
        <CarouselImages />
      </div>

      <div className="flex flex-col items-center justify-center text-white ">
        <div className="p-2">
          <h2 className="text-3xl text-center">О компании</h2>
          <p className=" indent-8 mb-3 text-left text-xl">
            Добро пожаловать на главную страницу ООО Сизспец-трейд, вашего
            надежного дистрибьютора высококачественной одежды для работы.
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Мы специализируемся на предоставлении широкого ассортимента
            продукции СИЗ, одноразовой спец одежды и много другого.
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Мы тесно сотрудничаем с многими производителями СИЗ на территории
            СНГ и не только.
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            В компании Сизспец трейд мы стремимся быть в числе лидеров в отрасли
            спец одежды. Мы постоянно совершенствуем свою продукцию и
            совершенствуем свою работу, чтобы обеспечить нашим клиентам высокое
            качество продукции и лучшие условия для сотрудничества.
          </p>
          <p className=" indent-8 mb-3 text-left text-xl">
            Текст о компании и его функциональности можно найти в разделе "О
            компании". Вы можете найти там всю информацию о компании и ее
            функциональности.Если у вас есть вопросы или вы хотите узнать больше
            информации о нас, вы можете связаться с нами по телефону или
            отправить нам электронное письмо. Мы всегда готовы помочь вам и
            ответить на все ваши вопросы.
          </p>
        </div>
      </div>

      <div className="bg-[url('/assets/img/image.jpg')] bg-no-repeat md:overflow-visible overflow-scroll bg-cover bg-center w-full h-auto">
        <div className="">
          <h2 className="text-4xl text-center text-white box-border">
            Продукция
          </h2>
          <div className="flex flex-row flex-wrap justify-center box-border">
            {categorys.map((category) => (
              <PreviewProduct category={category} key={category.id} />
            ))}
          </div>
        </div>
        <div className="text-center m-5">
          <Modal title="Обратная связь" btnText="Напишите нам">
            <FeedBackForm />
          </Modal>
        </div>
      </div>
      <div>
        <iframe
          title="Карта"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.3068741980014!2d23.833177977003462!3d53.677155949919644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd6301d0d5063%3A0xa095bc957e7e7127!2z0JzQvtC70L7QtNC10LbQvdCw0Y8g0YPQuy4gMywg0JPRgNC-0LTQvdC-LCDQk9GA0L7QtNC90LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sby!4v1751856113887!5m2!1sru!2sby"
          className="border-0 w-full h-[400px] m-0 p-2"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Main;
