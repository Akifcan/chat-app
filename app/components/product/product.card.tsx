import styled from "styled-components";
import Image from "next/image";
import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useAppDispatch } from "@/store";
import { addNewMessage } from "@/store/features/conversation/conversation.slice";

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
  transition: background-color 400ms linear;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    background-color: var(--color-secondary);
  }
`;

const ProductImage = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  border-radius: 8px;
  overflow: hidden;
`;

export default function ProductCard({
  useRedirectToProductDetail = true,
  product,
}: Readonly<{
  product: ProductProps;
  useRedirectToProductDetail?: boolean;
}>): JSX.Element {
  const dispatch = useAppDispatch();

  const handleProductCardClick = () => {
    if (!useRedirectToProductDetail) {
      return;
    }
    dispatch(
      addNewMessage({
        from: "bot",
        id: Math.random(),
        action: `/image ${product.id}`,
      })
    );
  };

  return (
    <ProductWrapper data-testid="product-card" onClick={handleProductCardClick}>
      <ProductImage>
        <Image src={product.images[0]} fill sizes="100%" alt={product.name} />
      </ProductImage>
      <ProductMeta>
        <h3>{product.name}</h3>
        <p>Price is {product.price}</p>
      </ProductMeta>
    </ProductWrapper>
  );
}
