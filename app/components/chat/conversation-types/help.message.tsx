export default function HelpMessage(): JSX.Element {
  return (
    <ul>
      <li>
        For view categories please type{" "}
        <b className="selectable-text">/select</b>.
      </li>
      <li>
        For view more product images please type{" "}
        <b className="selectable-text">/image [productid]</b>.
      </li>
      <li>
        Type <b className="selectable-text">/help</b> if you need a help.
      </li>
    </ul>
  );
}
