export default function GreetingMessage(): JSX.Element {
  return (
    <div>
      <p>Hello 🙂</p>
      <hr />
      <ul>
        <li>
          For view categories please type <b>/select</b>.
        </li>
        <li>
          For view most demand products please type <b>/product</b>.
        </li>
        <li>
          For view more product images please type <b>/image [id]</b>.
        </li>
        <li>
          Type <b>/help</b> if you need a help.
        </li>
      </ul>
    </div>
  );
}
