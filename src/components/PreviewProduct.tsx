import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICategory } from "../models/product";

interface PreviewProductProps {
  category: ICategory;
}

const PreviewProduct: FC<PreviewProductProps> = ({ category }) => {
  return (
    <div
      className="relative rounded-full overflow-x-hidden bg-cover border-2 hover:scale-105 hover:bg-orange-600 
       w-[200px] h-[200px] m-3 bg-gray-800"
      style={{
        backgroundImage: `url(${category.img})`,
      }}
    >
      <NavLink to={`/category/${category.category}`} key={category.id}>
        <div className="flex justify-center items-center w-full h-full">
          <h2
            className="transition  text-gray-400 font-bold text-2xl text-center  
          uppercase hover:scale-110 hover:-translate-y-1 cursor-pointer"
          >
            {category.category}
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default PreviewProduct;
