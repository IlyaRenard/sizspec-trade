import { ICategory } from "../models/product";

export const eyes_protection: ICategory = {
  id: 0,
  category: "Защита головы и слуха",
  subCategory: ["Очки","Наушники","Беруши","Каски","Шапочки"],
  img: "",
};

export const hand_protection: ICategory = {
  id: 1,
  category: "Перчатки и защита рук",
  subCategory: ["Рабочие перчатки","Рукавицы","Краги", "Нитриловые", "Виниловые", "Полиэтиленовые","Нарукавники"],
  img: "",
};

export const respiratory_protection: ICategory = {
  id: 2,
  category: "Защита дыхания",
  subCategory: ["Респираторы","Маски", "Полумаски","Фильтры"],
  img: "",
};

export const body_protection: ICategory = {
  id: 3,
  category: "Защита тела",
  subCategory: ["Фартуки","Плащи", "Жилеты","Накидки"],
  img: "",
};

export const leg_protection: ICategory = {
  id: 4,
  category: "Защита ног",
  subCategory: ["Бахилы","Комбинезоны", "Накидки", "Фартуки"],
  img: "",
};

export const rags: ICategory = {
  id: 5,
  category: "Ветошь",
  subCategory: [],
  img: "",
};

export const hy_and_ho: ICategory = {
  id: 6,
  category: "Гигиена и бытовые товары",
  subCategory: ["Гигиена","Бытовые товары"],
  img: "",
};

export const additional_products: ICategory = {
  id: 7,
  category: "Доп продукция",
  subCategory: [],
  img: "",
};



export const allCategories = [eyes_protection,hand_protection, respiratory_protection, body_protection,leg_protection,rags,hy_and_ho,additional_products];
