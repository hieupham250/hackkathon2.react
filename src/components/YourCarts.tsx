import React, { useEffect, useState } from "react";
import YourCartItem from "./YourCartItem";
import Modal from "./Modal";

interface Product {
  id: number;
  img: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export default function YourCart() {
  const [cartsLocal, setCartsLocal] = useState<Product[]>(() => {
    const carts = localStorage.getItem("Carts");
    return carts ? JSON.parse(carts) : [];
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("Carts", JSON.stringify(cartsLocal));
  }, [cartsLocal]);
  const handleDelete = (id: number) => {
    const cartsLocalNew = cartsLocal.filter((item) => item.id !== id);
    setCartsLocal(cartsLocalNew);
    // Hiển thị modal
    setShowModal(true);

    // Ẩn modal sau 1 giây
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  return (
    <>
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "4%" }}>STT</th>
                <th>Name</th>
                <th style={{ width: "15%" }}>Price</th>
                <th style={{ width: "4%" }}>Quantity</th>
                <th style={{ width: "15%" }}>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {cartsLocal.map((item, index) => {
                return (
                  <YourCartItem
                    key={item.id}
                    stt={index + 1}
                    id={item.id}
                    productName={item.productName}
                    price={item.price}
                    quantity={item.quantity}
                    onDelete={() => handleDelete(item.id)}
                  />
                );
              })}
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
                <td colSpan={4}>
                  {cartsLocal.length === 0
                    ? "There are no products in the cart"
                    : `There are ${cartsLocal.length} items in your shopping cart.`}
                </td>
                {cartsLocal.length === 0 ? (
                  ""
                ) : (
                  <td colSpan={2} className="total-price text-left">
                    {cartsLocal.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                    USD
                  </td>
                )}
              </tr>
            </tfoot>
          </table>
          {showModal ? (
            <Modal messenger={"Delete successfully"} type="danger" />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
