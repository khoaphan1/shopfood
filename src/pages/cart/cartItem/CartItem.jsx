import React from "react";
import "./CartItem.css";
import { useState } from "react";
import { adjustItemQty, removeFromCart } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState(item.qty); 
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustItemQty(item.id, e.target.value));
    };

    const removeFromCartItem = () => {
      dispatch(removeFromCart(item.id))
    }

  return (
    <>
      <tr>
        <td class="table-remove">
          <button
            onClick={removeFromCartItem}
          >
            <i class="fa fa-trash"></i>
          </button>
        </td>
        <td class="table-image">
          <a href="product-details.html">
            <img src={item.img} alt="" />
          </a>
        </td>
        <td class="table-p-name">
          <a href="product-details.html">{item.name}</a>
        </td>
        <td class="table-p-price">
          <p>${item.price}.00</p>
        </td>
        <td class="table-p-qty">
          <input
            placeholder="1"
            name="cart-qty"
            min="1"
            // max={item.quality}
            value={item.qty}
            onChange={onChangeHandler}
            type="number"
          />
        </td>
        <td class="table-total">
          <p>${(item.price * item.qty)}.00</p>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
