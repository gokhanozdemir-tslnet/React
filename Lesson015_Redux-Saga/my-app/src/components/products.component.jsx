"use client";
import { selectProducts } from "@/store/products/product.selector";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./product-item.component";
import { fetchProductsStart } from "@/store/products/product.action";

const Products = () => {
  const productItems = useSelector(selectProducts);
  const dispatch = useDispatch();
  const addItemHandler = () => dispatch(fetchProductsStart());
  // console.log(productItems);
  const { products, error, isLoading } = productItems;

  const onGetData = (e) => {
    addItemHandler();
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <button onClick={onGetData} className="btn btn-primary">
          Data Getir
        </button>
      </div>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default Products;
