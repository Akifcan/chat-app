import { CategoryProps, ProductProps } from "./conversation.types";

export const categoriesData: CategoryProps[] = [
  {
    id: 1,
    name: "Phones",
  },
  {
    id: 2,
    name: "Laptops",
  },
  {
    id: 3,
    name: "Screens",
  },
  {
    id: 4,
    name: "Televisions",
  },
  {
    id: 5,
    name: "Watch",
  },
];

export const productsData: ProductProps[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Oppo Reno11 F 5G 8 GB RAM",
    price: "16.435,99 TL",
    images: [
      "/product-images/oppo1.webp",
      "/product-images/oppo2.webp",
      "/product-images/oppo3.webp",
    ],
  },
  {
    id: 2,
    categoryId: 1,
    name: "Apple iPhone 13 128 GB",
    price: "38.799 TL",
    images: [
      "/product-images/iphone13-1.webp",
      "/product-images/iphone13-2.webp",
      "/product-images/iphone13-3.webp",
    ],
  },
  {
    id: 3,
    categoryId: 1,
    name: "Xiaomi Redmi 13C 8 GB RAM 256 GB",
    price: "7.999 TL",
    images: [
      "/product-images/xiaomi-1.webp",
      "/product-images/xiaomi-2.webp",
      "/product-images/xiaomi-3.webp",
    ],
  },
  {
    id: 4,
    categoryId: 1,
    name: "Apple iPhone 11 128 GB",
    price: "27.999 TL",
    images: [
      "/product-images/iphone11-1.webp",
      "/product-images/iphone11-2.webp",
      "/product-images/iphone11-3.webp",
    ],
  },
  {
    id: 5,
    categoryId: 2,
    name: "Apple Macbook Air M1",
    price: "26.099 TL",
    images: [
      "/product-images/air-1.webp",
      "/product-images/air-1.webp",
      "/product-images/air-1.webp",
    ],
  },
  {
    id: 6,
    categoryId: 2,
    name: "HP 15-FC0060NT AMD Ryzen 5-7520U",
    price: "13.999 TL",
    images: [
      "/product-images/hp-1.webp",
      "/product-images/hp-2.webp",
      "/product-images/hp-3.webp",
    ],
  },
  {
    id: 7,
    categoryId: 2,
    name: "Huawei Matebook D15/ I5-1155g7",
    price: "16.299 TL",
    images: [
      "/product-images/matebook-1.webp",
      "/product-images/matebook-2.webp",
      "/product-images/matebook-3.webp",
    ],
  },
  {
    id: 8,
    categoryId: 2,
    name: "LENOVO Ideapad 1",
    price: "7.985,10 TL",
    images: [
      "/product-images/lenovo-1.webp",
      "/product-images/lenovo-2.webp",
      "/product-images/lenovo-3.webp",
    ],
  },
];
