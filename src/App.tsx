import React from "react";
import "./App.css";
import Product from "./products.json";
import ListProducts from "./components/ListProducts";
import YourCarts from "./components/YourCarts";
import Modal from "./components/Modal";

export default function App() {
  // localStorage.setItem("Products", JSON.stringify(Product));
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ListProducts />
            </div>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <YourCarts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
