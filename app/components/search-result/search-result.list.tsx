import { productsData } from "@/store/features/conversation/conversation.data";
import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import SearchIcon from "./icons/search.icon";
import { useAppDispatch } from "@/store";
import { addNewMessage } from "@/store/features/conversation/conversation.slice";

const searchResultInAnim = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border: 1px solid var(--color-primary);
  margin-block-start: 0.3rem;
  border-radius: 8px;
  background-color: white;
  padding: 0.3rem;
  animation: ${searchResultInAnim} 500ms cubic-bezier(0.895, 0.03, 0.685, 0.22)
    forwards;
`;

const SuggesstedItem = styled.button`
  border: none;
  background-color: var(--color-primary);
  padding: 0.4rem;
  font-size: 0.9rem;
  border-radius: 8px;
  text-align: start;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;
  text-transform: capitalize;
  flex-shrink: 0;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
`;

export default function SearchResultList({
  onSuggesstionClick,
  query,
}: Readonly<{ query: string; onSuggesstionClick: () => void }>): JSX.Element {
  const debounceRef = useRef<NodeJS.Timeout>();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const searchResults = productsData.filter((x) => x.name.includes(query));
      setProducts(searchResults);
    }, 500);
  };

  const handleProductDetail = (product: ProductProps) => {
    dispatch(
      addNewMessage({
        from: "bot",
        id: Math.random(),
        action: `/image ${product.id}`,
      })
    );
    onSuggesstionClick();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSearch, [query]);

  if (products.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <b>Search Suggestions</b>
      <div className="flex scroll-x pb-half" style={{ gap: ".4rem" }}>
        {products.map((product) => (
          <SuggesstedItem
            key={product.id}
            onClick={() => handleProductDetail(product)}
          >
            {product.name} <SearchIcon />
          </SuggesstedItem>
        ))}
      </div>
    </Container>
  );
}
