export default function NotFoundCommandMessage(): JSX.Element {
  return (
    <div className="flex column" style={{ gap: "1rem" }}>
      <p>
        Sorry I didn&apos;t understand. Please write
        <b className="selectable-text">/help</b> if you need support.
      </p>
    </div>
  );
}
