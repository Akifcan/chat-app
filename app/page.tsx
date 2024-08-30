"use client";
import Chat from "./components/chat/chat";
import { createPortal } from "react-dom";
import Portal from "./components/portal";

export default function Home() {
  return (
    <main>
      <Chat />
    </main>
  );
}
