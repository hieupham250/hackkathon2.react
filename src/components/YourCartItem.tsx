import React from "react";

interface CartItemProps {
  stt: number;
  id: number;
  productName: string;
  price: number;
  quantity: number;
  onDelete: () => void;
}

export default function YourCartItem({
  stt,
  id,
  productName,
  price,
  quantity,
  onDelete,
}: CartItemProps) {
  return (
    <>
      <tr key={id}>
        <th scope="row">{stt}</th>
        <td>{productName}</td>
        <td>{price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            defaultValue={quantity}
          />
        </td>
        <td>
          <a className="label label-info update-cart-item" data-product="">
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            data-product=""
            onClick={onDelete}
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
