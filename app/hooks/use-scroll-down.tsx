export const useScrollDown = (targetElementId: string) => {
  const scrollToBottom = (delay = 0) => {
    const element = document.getElementById(targetElementId);
    if (!element) {
      return console.error("target element not found!");
    }
    setTimeout(() => {
      element.scrollTo({
        behavior: "smooth",
        top: element.scrollHeight * 99999,
      });
    }, delay);
  };

  return {
    scrollToBottom,
  };
};
