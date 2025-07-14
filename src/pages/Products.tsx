import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DropDownMenu from "../components/DropDownMenu";
import { allCategories } from "../data/category";
import { ICategory, IProduct } from "../models/product";
import ProductItem from "./../components/ProductItem";
import { products } from "./../data/products";
import { IonIcon } from "react-ion-icon";

const Products = () => {
  const [categories] = useState<ICategory[]>(allCategories);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams();
  const mainCategory = allCategories.map((val) => {
    return val.category;
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setAllProducts(products);
  }, []);

  const filteredList = useMemo(getFilteredList, [category, allProducts]);

  function getFilteredList() {
    if (!category) {
      return allProducts;
    }
    if (mainCategory.includes(category)) {
      return allProducts.filter(
        (product) => product.category.category === category
      );
    }
    return allProducts.filter(
      (product) => product.category.subCategory?.toString() === category
    );
  }

  return (
    <div className="h-screen overflow-scroll overflow-x-hidden  z-0 bg-gradient-to-b from-gray-800 to-blue-gray-300 ">
      <div className="flex flex-row mt-5">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-2  cursor-pointer z-10"
        >
          <IonIcon name={open ? "close" : "menu"} />
        </div>
        <div
          className={`border-r-2 m-2 w-auto bg-gray-600 opacity-90 absolute left-0 ${
            open ? "top-24 z-10 left-8" : "left-[-500px]"
          }`}
        >
          <h1 className=" text-2xl text-white font-bold border-b-2 border-orange-600 m-2">
            Категории
          </h1>
          {categories.map((category) => (
            <DropDownMenu category={category} key={category.id} />
          ))}
        </div>

        <div className="w-full">
          {!category ? (
            <h1 className="text-center text-white w-full text-2xl font-bold">
              Все товары
            </h1>
          ) : (
            <h1 className="text-center w-full text-2xl font-bold">
              {category}
            </h1>
          )}

          {!filteredList.length ? (
            <h1 className="text-center text-xl mt-20">Товары не найдены :( </h1>
          ) : (
            <div className="flex md:flex-row flex-col flex-wrap items-center  justify-center">
              {filteredList.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
