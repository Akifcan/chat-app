import { productsData } from "@/store/features/conversation/conversation.data";
import {
  ProductProps,
  QueryProps,
} from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import Alert from "../../alert/alert";
import ProductCard from "../../product/product.card";
import styled from "styled-components";
import Image from "next/image";
import { parseId } from "@/app/utils";

const ImageCard = styled.div`
  width: 100%;
  height: 200px;
  background: red;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export default function ProductDetailMessage({
  command,
}: Readonly<QueryProps>): JSX.Element {
  const PRODUCT_ID = parseId(command);
  const [product, setProduct] = useState<ProductProps | null>();

  const handleProductDetail = () => {
    const currentProduct = productsData.find(
      (product) => product.id === PRODUCT_ID
    );

    if (!currentProduct) {
      return setProduct(null);
    }
    setProduct(currentProduct);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleProductDetail, []);

  if (product === undefined) {
    return (
      <p>
        <b>Loading product details please wait...</b>
      </p>
    );
  }

  if (product === null) {
    return (
      <Alert type="error">The product you are looking for not found</Alert>
    );
  }

  return (
    <div
      data-testid="product-detail"
      className="flex column"
      style={{ gap: "1rem" }}
    >
      <ProductCard product={product} useRedirectToProductDetail={false} />
      {product.images.map((image, index) => (
        <ImageCard key={index}>
          <Image
            src={image}
            fill
            sizes="100%"
            alt={product.name}
            style={{
              objectFit: "contain",
              background: "var(--color-primary)",
            }}
          />
        </ImageCard>
      ))}
      <ProductCard product={product} useRedirectToProductDetail={false} />
    </div>
  );
}
