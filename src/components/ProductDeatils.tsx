import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCategories } from "../data/category";
import { products } from "../data/products";
import { ICategory, IProduct } from "../models/product";
import DropDownMenu from "./DropDownMenu";

const ProductDeatils = () => {
  const { id } = useParams();
  const currentProduct = products.find((val) => val.id === id);
  const [categories] = useState<ICategory[]>(allCategories);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setAllProducts(products);
  }, [allProducts]);

  return (
    <div className="flex flex-row h-screen bg-gradient-to-b from-gray-800 to-blue-gray-300 text-gray-300 ">
      <div className="border-r-2 m-2 w-auto md:block hidden">
        <h1 className=" text-2xl border-b-2 border-orange-600 m-2">
          Категории
        </h1>
        {categories.map((category) => (
          <DropDownMenu category={category} key={category.id} />
        ))}
      </div>
      <div className="mt-2">
        <h2 className=" text-2xl m-2 font-bold text-center border-b-2 border-orange-600">
          {currentProduct?.title}
        </h2>
        <div className="flex md:flex-row flex-col">
          <div className="m-2 p-2 bg-gray-400">
            {!currentProduct?.image ? (
              <img
                src="https://cdn2.thecatapi.com/images/qg0_IodJp.png"
                className="rounded-sm  max-w-[300px] h-full object-contain"
                alt="img"
              />
            ) : (
              <img
                src={currentProduct.image}
                className="rounded-sm  max-w-[300px] h-full object-contain"
                alt="img"
              />
            )}
          </div>
          <div className=" p-2">
            <span>{currentProduct?.description}</span>
          </div>
        </div>
        <div className="m-2">
          <span className="font-bold">
            Цена: {currentProduct?.price} бел.руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
