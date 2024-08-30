import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import ProductCard from "../../product/product.card";
import {
  categoriesData,
  productsData,
} from "@/store/features/conversation/conversation.data";
import { useScrollDown } from "@/app/hooks/use-scroll-down";

export default function SuggestedProductsMessage(): JSX.Element {
  const [products, setProducts] = useState<ProductProps[]>();
  const { scrollToBottom } = useScrollDown("conversation-list");

  const handleSuggestions = () => {
    const productList: ProductProps[] = [];
    const productIds = categoriesData.map((category) => category.id);

    for (const id in productIds) {
      const currentProduct = productsData?.find(
        (x) => x.categoryId === Number(id)
      );
      if (currentProduct) {
        productList.push(currentProduct);
      }
    }

    setProducts(productList);
    scrollToBottom(200);
  };

  useEffect(handleSuggestions, []);

  if (!products) {
    return (
      <p>
        <b>Please wait your suggestions loading...</b>
      </p>
    );
  }

  return (
    <div className="flex column" style={{ gap: "1rem" }}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
