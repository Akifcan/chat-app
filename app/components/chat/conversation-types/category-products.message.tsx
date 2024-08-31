import {
  ProductProps,
  QueryProps,
} from "@/store/features/conversation/conversation.types";
import { useEffect, useState } from "react";
import ProductCard from "../../product/product.card";
import {
  categoriesData,
  productsData,
} from "@/store/features/conversation/conversation.data";
import { parseId } from "@/app/utils";
import Alert from "../../alert/alert";

export default function CategoryProductsMessage({
  command,
}: Readonly<QueryProps>): JSX.Element {
  const CATEGORY_ID = parseId(command);

  const [products, setProducts] = useState<ProductProps[]>();

  const handleSuggestions = () => {
    const currentProducts = productsData?.filter(
      (x) => x.categoryId === CATEGORY_ID
    );

    setProducts(currentProducts);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSuggestions, []);

  if (!products) {
    return (
      <p>
        <b>Please wait your suggestions loading...</b>
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <Alert data-testid="alert" type="info">
        Sorry but, no product found for this category
      </Alert>
    );
  }

  return (
    <div
      className="flex column"
      style={{ gap: "1rem" }}
      data-testid="categories-product"
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
