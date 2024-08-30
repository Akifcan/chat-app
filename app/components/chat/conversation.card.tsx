import styles from "./chat.module.css";

export default function ConversationCard({
  position,
}: Readonly<{ position: "left" | "right" }>): JSX.Element {
  return (
    <div className={[styles["conversation-card"], styles[position]].join(" ")}>
      <div className={styles["avatar"]}></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        commodi temporibus illo. Doloribus unde ullam veritatis recusandae eaque
        commodi voluptatibus.
      </p>
    </div>
  );
}
