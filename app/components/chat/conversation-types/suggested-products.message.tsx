import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../../product/product.card";
import {
  categoriesData,
  productsData,
} from "@/store/features/conversation/conversation.data";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  padding: 0.3rem;
  border-radius: 8px;
  color: white;
  flex: 1;
`;

const ProductImage = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: 8px;
`;

export default function SuggestedProductsMessage(): JSX.Element {
  const [products, setProducts] = useState<ProductProps[]>();

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
