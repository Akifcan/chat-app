import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import ProductCard from "../../product/product.card";
import {
  categoriesData,
  productsData,
} from "@/store/features/conversation/conversation.data";

export default function SuggestedProductsMessage(): JSX.Element {
  const [products, setProducts] = useState<ProductProps[]>();

  const handleSuggestions = () => {
    const productList: ProductProps[] = [];
    const categoryIds = categoriesData.map((category) => category.id);

    for (const id in categoryIds) {
      const currentProduct = productsData?.find(
        (x) => x.categoryId === Number(id)
      );
      if (currentProduct) {
        productList.push(currentProduct);
      }
    }

    setProducts(productList);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSuggestions, []);

  if (!products) {
    return (
      <p>
        <b>Please wait your suggestions loading...</b>
      </p>
    );
  }

  return (
    <div
      data-testid="suggested-products"
      className="flex column"
      style={{ gap: "1rem" }}
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
