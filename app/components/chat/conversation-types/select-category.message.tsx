import { useAppDispatch } from "@/store";
import { categoriesData } from "@/store/features/conversation/conversation.data";
import { addNewMessage } from "@/store/features/conversation/conversation.slice";
import { CategoryProps } from "@/store/features/conversation/conversation.types";
import styled from "styled-components";

const SelectItem = styled.button`
  background-color: var(--color-primary);
  padding: 0.3rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 500ms linear;
  border: none;
  font-size: 1rem;
  text-align: start;
  text-transform: capitalize;

  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
`;

export default function SelectCategoryMessage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleListProducts = (category: CategoryProps) => {
    dispatch(
      addNewMessage({
        from: "user",
        id: Math.random(),
        text: `Could you list the <b>${category.name}</b> products for me?`,
      })
    );
    dispatch(
      addNewMessage({
        from: "bot",
        id: Math.random(),
        action: `/product ${category.id}`,
      })
    );
  };

  return (
    <div className="flex column" style={{ gap: ".3rem" }}>
      {categoriesData.map((category) => (
        <SelectItem
          key={category.id}
          onClick={() => handleListProducts(category)}
        >
          {category.name}
        </SelectItem>
      ))}
    </div>
  );
}
