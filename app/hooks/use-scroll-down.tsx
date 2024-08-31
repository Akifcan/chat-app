import { useEffect } from "react";

export const useScrollDown = (targetElementId: string) => {
  const scrollToBottom = (delay = 0) => {
    const element = document.getElementById(targetElementId);
    if (!element) {
      return console.error("target element not found!");
    }
    const offset = element.scrollHeight;
    setTimeout(() => {
      element.scrollTo({
        behavior: "smooth",
        top: offset,
      });
    }, delay);
  };

  return {
    scrollToBottom,
  };
};
