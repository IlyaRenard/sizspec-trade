import React, { useMemo, useState } from "react";
import { IonIcon } from "react-ion-icon";
import { NavLink } from "react-router-dom";
import { products } from "../data/products";
import { IProduct } from "../models/product";

const Header = () => {
  const links = [
    { name: "Главная", link: "/" },
    { name: "Католог", link: "/products" },
    { name: "Информация", link: "/info" },
    { name: "О компании", link: "/about" },
    { name: "Контакты", link: "/contacts" },
  ];

  const [open, setOpen] = useState(false);
  const [allProducts] = useState<IProduct[]>(products);
  const [searchQuery, setSearchQuery] = useState("");

  const searchingList = useMemo(
    () => getSearchedList(searchQuery, allProducts),
    [searchQuery, allProducts]
  );

  function getSearchedList(query: string, productList: IProduct[]) {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="relative shadow-md drop-shadow-2xl bg-opacity-90 w-full z-50 ">
      <div className="flex md:items-center md:justify-between content-start bg-gray-800  py-1 md:px-10 px-7 z-50">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="mr-1 pt-1">
            <a href="/">
              <img
                src="/logo.png"
                className="mr-1 max-h-20 w-max-20"
                alt="Sizspec trade"
              />
            </a>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-24" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
              onClick={() => setOpen(false)}
            >
              <NavLink
                to={link.link}
                className="text-white hover:text-orange-600 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <form className="flex items-center relative" onSubmit={clickHandler}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <input
              type="text"
              className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg md:w-full w-[80%] box-border block pl-10 p-2"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={searchHandler}
              required
            />
          </div>
        </form>

        {searchQuery && (
          <div className="absolute top-24 md:right-10 right-[0] rounded-sm bg-gray-800 md:w-[20%] w-[80%]  md:mx-0 mx-1 z-50">
            <ul>
              {searchingList.map((product) => (
                <li
                  key={product.id}
                  className="m-1 p-1 bg-gray-200 rounded-sm"
                  onClick={() => setSearchQuery("")}
                >
                  <NavLink to={`/${product.id}`}>{product.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-7 cursor-pointer md:hidden"
        >
          <IonIcon name={open ? "close" : "menu"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
