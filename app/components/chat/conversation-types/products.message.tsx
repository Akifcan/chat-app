import Image from "next/image";
import styled from "styled-components";

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

export default function ProductsMessage(): JSX.Element {
  return (
    <div className="flex column" style={{ gap: "1rem" }}>
      <ProductWrapper>
        <ProductImage>
          <Image
            src={"/avatars/robot.png"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={"asdf"}
          />
        </ProductImage>
        <ProductMeta>
          <h3>Product title</h3>
          <p>Price is 200₺</p>
        </ProductMeta>
      </ProductWrapper>
    </div>
  );
}
