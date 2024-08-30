import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);
  if (!mounted) {
    return null;
  }

  return createPortal(children, document.getElementById("portal")!);
}
