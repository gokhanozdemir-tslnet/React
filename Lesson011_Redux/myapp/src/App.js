import { useState } from "react";
import "./App.css";
import CardList from "./components/cardList.component";
import CardAdder from "./components/cardAdd.component";
import ProductList from "./components/product.component";

function App() {
  console.log("/********rendering App*******/");

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <ProductList />
        <div className="col-md-5"></div>
      </div>
      <div className="row">
        <CardAdder />
        <div className="col-md-5"></div>
      </div>
      <div className="row">
        <CardList />
      </div>
      <div className="row">
        <CardList />
      </div>
    </div>
  );
}

export default App;
