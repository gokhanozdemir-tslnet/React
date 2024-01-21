"use client";
import { Provider } from "react-redux";
import Header from "../components/heaeder.component";
import Products from "../components/products.component";
import store from "./store";

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
export default Providers;
