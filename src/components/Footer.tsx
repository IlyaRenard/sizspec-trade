const Footer = () => {
  return (
    <footer className="static bottom-0 left-0  w-full flex justify-center bg-gray-900 text-yellow-50">
      <div className="p-10">
        <div className="flex justify-around md:flex-row flex-col ">
          <div className="w-60 text-sm mr-10 md:mb-0 mb-8">
            © ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
            <br />
            «Сизспец-трейд»
          </div>
          <div className="mr-10 md:mb-0 mb-8">
            Контакты: <br />
            230025, г. Гродно , ул. Молодежная 3 пом.22
            <br />
            Тел +375(29)813-16-46, Моб +375(29)863-63-88,
            <br /> sizspectreyd@mail.ru
            <br />
            Почтовый адрес:
            <br />
            230014, г. Гродно, ул. Окрестная, д. 22
          </div>
          <div className="w-80 mr-10 ">
            УНП 591051427 р/с BY94 ALFA 3012 2G04 7100 1027 0000
            <br />
            ЗАО "Альфа-Банк" БИК ALFABY2X Ул. Сурганова, 43-47, 220013 Минск,
            Республика Беларусь
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
