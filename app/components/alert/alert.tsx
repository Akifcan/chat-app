import { ReactNode } from "react";
import styled from "styled-components";

export type AlertType = "info" | "error";

const Container = styled.div<{ $type: AlertType }>`
  background-color: ${(props) =>
    props.$type === "info" ? "var(--color-primary)" : "crimson"};
  padding: 10px;
  border-radius: 8px;
`;

export default function Alert({
  children,
  type,
}: Readonly<{ type: AlertType; children: ReactNode }>): JSX.Element {
  return (
    <Container data-testid="alert" $type={type}>
      {children}
    </Container>
  );
}
