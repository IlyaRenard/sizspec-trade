const FeedBackForm = () => {
  const sBord: string = " border-2 border-solid border-gray-300 ";
  return (
    <>
      <form className="min-w-fit h-80 p-3 flex flex-col gap-2 ">
        <div className="flex gap-2 text-gray-300 ">
          <input
            className={sBord + "w-1/2 p-2 outline-0 "}
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className={sBord + "w-1/2 p-2 outline-0"}
            type="email"
            placeholder="Эл. почта"
          />
        </div>
        <textarea
          className={sBord + "p-2 border-2 outline-0 resize-none"}
          placeholder="Сообщение"
          cols={10}
          rows={30}
        ></textarea>
        <button
          className={
            sBord +
            "py-2 px-6 font-semibold hover:border-orange-700 text-gray-500 hover:text-orange-700"
          }
          type="submit"
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default FeedBackForm;
