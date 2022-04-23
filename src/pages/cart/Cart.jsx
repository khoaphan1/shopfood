import React from "react";
import Header from "../../components/header/Header";
import BannerItem from "../../components/bannerItem/BannerItem";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adjustItemQty } from "../../redux/actions";
import CartItem from "./cartItem/CartItem";

const Cart = () => {
  const listCart = useSelector((state) => state.listItemInCart)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const shipPrice = 5;
  const discount = 15;
  useEffect(() => {
    let items = 0;
    let price = 0;

    listCart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [listCart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <Header />
      <BannerItem nameItem="Your Cart" />
      <div className="cart-area">
        <div className="cart-area-main max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-28">
          <div className="table-in-cart">
            <table class="table product-table text-center">
              <thead>
                <tr>
                  <th class="table-remove">remove</th>
                  <th class="table-image">image</th>
                  <th class="table-p-name">product</th>
                  <th class="table-p-price">price</th>
                  <th class="table-p-qty">quantity</th>
                  <th class="table-total">total</th>
                </tr>
              </thead>
              <tbody>
                {listCart.map((item, index) => (
                    <CartItem item={item}/>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-bottom">
            <div class="table-bottom-wrapper">
              <div class="table-coupon">
                <input type="text" placeholder="Coupon code" />
                <button type="submit">Apply coupon</button>
              </div>
              <div class="table-update">
                <button type="button" disabled="">
                  Update cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-total-area">
          <div className="cart-area-total-main max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-10">
            <div class="table-total-content">
              <h2>Cart totals</h2>
              <div class="table-total-amount">
                <div class="single-total-content">
                  <span>Subtotal</span>
                  <span class="c-total-price">${totalPrice}.00</span>
                </div>
                <div class="single-total-content">
                  <span>Discount</span>
                  <span class="c-total-price">
                    {discount}%
                  </span>
                </div>
                <div class="single-total-content final-single-total-content">
                  <span>Shipping</span>
                  <span class="c-total-price">
                    ${shipPrice}.00
                  </span>
                </div>
                
                <div class="single-total-content">
                  <span>Total</span>
                  <span class="c-total-price">${((totalPrice * (100 - discount) / 100) + shipPrice).toFixed()}.00</span>
                </div>
                <NavLink to={"/checkout"} className="go-to-checkout">
                  Go to checkout page
                </NavLink>
                {/* <a className="go-to-checkout" href="checkout.html">Go to checkout page</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
