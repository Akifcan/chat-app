export const useScrollDown = (targetElementId: string) => {
  const scrollToBottom = () => {
    const element = document.getElementById("conversation-list");
    if (!element) {
      return console.error("target element not found!");
    }
    setTimeout(() => {
      element.scrollTo({
        behavior: "smooth",
        top: element.scrollHeight * 99999,
      });
    }, 0);
  };

  return {
    scrollToBottom,
  };
};
