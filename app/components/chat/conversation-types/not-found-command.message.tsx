import styled from "styled-components";

const Alert = styled.div``;

export default function NotFoundCommandMessage(): JSX.Element {
  return (
    <div className="flex column" style={{ gap: "1rem" }}>
      <p>
        Please write <b className="selectable-text">/help</b> if you need
        support.
      </p>
    </div>
  );
}
