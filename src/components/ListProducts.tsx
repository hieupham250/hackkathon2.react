import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

interface Product {
  id: number;
  img: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

export default function Listproducts() {
  const [productLocal, setProductLocal] = useState<Product[]>(() => {
    const products = localStorage.getItem("Products");
    return products ? JSON.parse(products) : [];
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [addCart, setAddCart] = useState<Product[]>(() => {
    const cart = localStorage.getItem("Carts");
    return cart ? JSON.parse(cart) : [];
  });

  useEffect(() => {
    localStorage.setItem("Carts", JSON.stringify(addCart));
  }, [addCart]);

  const handleAddproductCart = (product: Product) => {
    const existingProductIndex = addCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...addCart];
      updatedCart[existingProductIndex].quantity += 1;
      setAddCart(updatedCart);
    } else {
      setAddCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
    // Hiển thị modal
    setShowModal(true);

    // Ẩn modal sau 1 giây
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        {showModal ? (
          <Modal messenger={"Add to cart successfully"} type="success" />
        ) : (
          ""
        )}

        <div className="panel-body" id="list-product">
          {productLocal.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              img={item.img}
              productName={item.productName}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              onClickAddCart={() => handleAddproductCart(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
