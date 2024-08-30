import { categories } from "@/store/features/conversation/conversation.data";
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
  return (
    <div className="flex column" style={{ gap: ".3rem" }}>
      {categories.map((category) => (
        <SelectItem key={category.id}>{category.name}</SelectItem>
      ))}
    </div>
  );
}
