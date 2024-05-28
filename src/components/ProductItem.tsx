import React from "react";

interface Product {
  id: number;
  img: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
}

interface ProductItemProps {
  id: number;
  img: string;
  productName: string;
  description: string;
  price: number;
  quantity: number;
  onClickAddCart: () => void;
}

export default function ProductItem({
  id,
  img,
  productName,
  description,
  price,
  quantity,
  onClickAddCart,
}: ProductItemProps) {
  return (
    <>
      <div key={id}>
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={img} alt={productName} />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{productName}</h4>
            <p>{description}</p>
            {quantity === 0 ? (
              ""
            ) : (
              <input name="quantity-product-1" type="number" value={1} />
            )}
            {quantity === 0 ? (
              <span className="price"> {price} USD</span>
            ) : (
              <a className="price" onClick={onClickAddCart}>
                {price} USD
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
