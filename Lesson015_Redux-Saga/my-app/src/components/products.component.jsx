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
  // console.log("------start component1*******");
  // console.log(productItems);
  return (
    <div className="row">
      <div className="col-md-12">
        <button onClick={onGetData} className="btn btn-primary">
          Data Getir
        </button>
      </div>
      {/* {products.map((product) => (
        <div key={product.id}>sdf</div>
        // <ProductItem key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Products;
