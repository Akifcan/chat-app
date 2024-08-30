import { productsData } from "@/store/features/conversation/conversation.data";
import { ProductProps } from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import Alert from "../../alert/alert";

export default function ProductDetailMessage({
  command,
}: Readonly<{ command: string }>): JSX.Element {
  const PRODUCT_ID = Number(command.split(" ")[1]);
  const [product, setProduct] = useState<ProductProps | null>();

  const handleProductDetail = () => {
    const currentProduct = productsData.find(
      (product) => product.id === PRODUCT_ID
    );

    if (!currentProduct) {
      return setProduct(null);
    }
    setProduct(currentProduct);
  };

  useEffect(handleProductDetail, []);

  if (product === undefined) {
    return (
      <p>
        <b>Loading product details please wait...</b>
      </p>
    );
  }

  if (product === null) {
    return (
      <Alert type="error">The product you are looking for not found</Alert>
    );
  }

  return <div>{command}</div>;
}
