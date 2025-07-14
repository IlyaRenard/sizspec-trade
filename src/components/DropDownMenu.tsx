import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { ICategory } from "../models/product";

interface DropDownMenuProps {
  category: ICategory;
}

const DropDownMenu: FC<DropDownMenuProps> = ({ category }) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="m-2 w-full">
      <ul className="flex flex-col mr-4 text-white">
        <NavLink to={`/category/${category.category}`} key={category.id}>
          <li>
            <p
              onClick={clickHandler}
              className="md:text-2xl text-3xl cursor-pointer hover:font-bold hover:text-orange-600 m-1 "
            >
              {category.category}
            </p>
            {open && (
              <ul>
                {category.subCategory?.map((value) => (
                  <NavLink to={`/category/${value}`} key={value}>
                    <li
                      className="md:text-xl text-2xl indent-4 hover:border-b-2 border-orange-600 cursor-pointer w-max"
                      key={value}
                    >
                      {value}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default DropDownMenu;
