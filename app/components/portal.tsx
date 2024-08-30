import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("portal")!
  );
};

export default Portal;
