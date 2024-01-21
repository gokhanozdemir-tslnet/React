import { useSelector } from "react-redux";
import Card from "./card.component";

const ProductList = () => {
  console.log("/********rendering product*******/");
  const productItems = useSelector((state) => state.product.productItems);

  return <Card card={productItems} />;
};
export default ProductList;
