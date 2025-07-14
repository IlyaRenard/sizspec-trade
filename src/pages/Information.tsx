const Information = () => {
  const imgInfo: string = "md:h-96 h-52 object-cover m-5";
  return (
    <div className="h-max bg-gradient-to-b from-gray-800 to-blue-gray-300 text-gray-300 pl-4 pt-2">
      <h1 className="text-2xl text-center font-bold">Информация</h1>
      <h2 className="text-2xl text-center">
        Информация о средствах индивидуальной защиты (СИЗ)
      </h2>
      <h2 className="  text-2xl ">Что такое СИЗ и зачем они нужны</h2>
      <p className=" indent-8 mb-3 text-left text-xl">
        Средства индивидуальной защиты — это специальные изделия, которые
        защищают человека от вредных и опасных факторов на работе. Они сохраняют
        здоровье и предотвращают травмы, ожоги, отравления и другие несчастные
        случаи. Использование правильных СИЗ — обязательное условие безопасного
        труда в любой отрасли.
      </p>
      <h2 className="  text-2xl ">Виды средств индивидуальной защиты</h2>
      <ul className="indent-8 mb-3 text-left text-xl">
        <li>Защита головы: каски, шлемы, козырьки</li>
        <li>Защита органов дыхания: маски, респираторы, противогазы</li>
        <li>Защита глаз и лица: защитные очки, щитки</li>
        <li>
          Защита рук: перчатки разного назначения (одноразовые,
          противораздражающие, термостойкие)
        </li>
        <li>Защита ног: спецобувь, бахилы, галоши</li>
        <li>Защита тела: спецодежда, комбинезоны, фартуки</li>
        <li>Средства спасения: страховочные системы, аварийное освещение</li>
        <li>
          Гигиенические и санитарные средства: мыло, салфетки, марля,
          одноразовые простыни
        </li>
      </ul>
      <h2 className="text-2xl ">Правила использования СИЗ</h2>
      <ul className="indent-8 mb-3 text-left text-xl">
        <li>
          1. Перед использованием обязательно проверьте целостность и срок
          годности изделия.
        </li>
        <li>
          2. Надевайте СИЗ строго согласно инструкции, убедитесь, что они плотно
          прилегают и не ограничивают движения.
        </li>
        <li>
          3. После работы аккуратно снимайте СИЗ, чтобы не загрязнить кожу и
          одежду.
        </li>
        <li>
          4. Для многоразовых изделий соблюдайте меры по очистке и дезинфекции.
        </li>
        <li>
          5. Храните средства индивидуальной защиты в сухом, защищённом от
          загрязнений месте.
        </li>
      </ul>
      <h2 className="text-2xl">Нормативная база и стандарты качества</h2>
      <p className="indent-8 mb-3 text-left text-xl">
        Наши СИЗ соответствуют требованиям ГОСТов и технических регламентов
        Таможенного Союза (ТР ТС), что гарантирует высокое качество и
        безопасность при эксплуатации.
      </p>
      <div className="flex flex-row flex-wrap ">
        <img src="./images/info/1.jpg" alt="1" className={imgInfo} />
        <img src="./images/info/2.jpg" alt="2" className={imgInfo} />
        <img src="./images/info/3.jpg" alt="3" className={imgInfo} />
        <img src="./images/info/4.jpg" alt="4" className={imgInfo} />
        <img src="./images/info/5.jpg" alt="5" className={imgInfo} />
        <img src="./images/info/6.jpg" alt="6" className={imgInfo} />
        <img src="./images/info/7.jpg" alt="7" className={imgInfo} />
        <img src="./images/info/8.jpg" alt="8" className={imgInfo} />
        <img src="./images/info/9.jpg" alt="9" className={imgInfo} />
        <img src="./images/info/10.jpg" alt="10" className={imgInfo} />
      </div>
    </div>
  );
};

export default Information;
