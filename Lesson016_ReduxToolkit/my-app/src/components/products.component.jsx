"use client";
import { selectProducts } from "@/store/products/product.selector";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./product-item.component";
import { fetchProductsStart1 } from "@/store/products/product.reducer";
import SeedProduct from "@/store/products/product.seed";
// import { fetchProductsStart } from "@/store/products/product.action";

const Products = () => {
  const productItems = useSelector(selectProducts);
  //const productsItems2 = useSelector((state)=>state.products)
  console.log(productItems);
  const dispatch = useDispatch();
  const addItemHandler = () => dispatch(fetchProductsStart1(SeedProduct));
  // console.log(fetchProductsStart1());
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
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
