import React from "react";
import Header from "../../components/header/Header";
import BannerItem from "../../components/bannerItem/BannerItem";
import Footer from "../../components/footer/Footer";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addNewOrder } from "../../redux/actions";
import { listCartSelector, listOrderSelector } from "../../redux/selector";
import { NavLink } from "react-router-dom";

const Payment = () => {
  const listCart = useSelector(listCartSelector);
  const listOrder = useSelector(listOrderSelector);
  const dispatch = useDispatch();
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  //////////////////////////////////////
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleNote= (e) => {
    setNote(e.target.value)
  }

  const handleAddOrder = () => {
    console.log(
      {
        id: listOrder.length + 2,
        nameReceiver: firstName + ' ' +lastName,
        phone: phone,
        email: email,
        address: address,
        note: note,
        totalBill : ((totalPrice * (100 - discount) / 100) + shipPrice).toFixed(),
        status: "waiting"
      }
    )
    dispatch(
      addNewOrder({
        id: listOrder.length + 1,
        nameReceiver: firstName + ' ' +lastName,
        phone: phone,
        email: email,
        address: address,
        note: note,
        totalBill : Number(((totalPrice * (100 - discount) / 100) + shipPrice).toFixed()),
        status: "waiting"
      })
    )
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setNote("")
  }

  return (
    <div>
      <Header />
      <BannerItem nameItem="Check Out" />
      <div className="payment-area">
        <div className="payment-area-main max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full mt-28">
          <div className="flex">
            <div className="billing-detail w-1/2">
              <h2 className="billing-detail-text">Billing Details</h2>
              <div className="billing-detail-content">
                <h3>First Name</h3>
                <input
                  className="billing-detail-form-input"
                  type="text"
                  name="first-name"
                  value={firstName}
                  onChange={handleFirstName}
                  placeholder="First Name"
                />
              </div>
              <div className="billing-detail-content">
                <h3>Last Name</h3>
                <input
                  className="billing-detail-form-input"
                  type="text"
                  name="last-name"
                  value={lastName}
                  onChange={handleLastName}
                  placeholder="Last Name"
                />
              </div>
              <div className="billing-detail-content">
                <h3>Email</h3>
                <input
                  className="billing-detail-form-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email"
                />
              </div>
              <div className="billing-detail-content">
                <h3>Phone</h3>
                <input
                  className="billing-detail-form-input"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handlePhone}
                  placeholder="Phone"
                />
              </div>
              <div className="billing-detail-content">
                <h3>Your Address</h3>
                <input
                  className="billing-detail-form-input"
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleAddress}
                  placeholder="Your Address"
                />
              </div>
              <div className="billing-detail-content">
                <h3>Order Notes</h3>
                <textarea
                  name="review"
                  id="r-textarea"
                  cols="30"
                  rows="10"
                  value={note}
                  onChange={handleNote}
                  className="text-rating"
                  placeholder="Note something"
                ></textarea>
              </div>
            </div>

            <div className="user-order-area w-1/2">
              <div class="your-order">
                <h3>Your order</h3>
                <div className="flex">
                  <div className="w-3/4">
                    <div className="header-your-order">Product</div>
                    <div className="list-product-order">
                      {listCart.map((item, index) => (
                        <div className="list-product-order-item">
                          <span>
                            {item.name}
                            <span className="quantity-item">x {item.qty}</span>
                          </span>
                        </div>
                      ))}
                      {/* <div className="list-product-order-item">
                        <span>
                          Vestibulum suscipit
                          <span className="quantity-item">x 1</span>
                        </span>
                      </div>
                      <div className="list-product-order-item">
                        <span>
                          Vestibulum suscipit
                          <span className="quantity-item">x 1</span>
                        </span>
                      </div> */}
                    </div>
                    <p className="your-order-subtotal">Cart subtotal</p>
                    <p className="your-order-discount">Discount</p>
                    <p className="your-order-shipping">Shipping</p>
                    <h4 className="order-total">Order Total</h4>
                  </div>
                  <div className="w-1/4">
                    <div className="header-your-order">Total</div>
                    <div className="list-product-order">
                      {listCart.map((item, index) => (
                          <div className="list-product-price-item" key={index}>
                            <span>${(item.price * item.qty)}.00</span>
                          </div>
                      ))}
                      {/* <div className="list-product-price-item">
                        <span>$165.00</span>
                      </div>
                      <div className="list-product-price-item">
                        <span>$50.00</span>
                      </div> */}
                    </div>
                    <p className="your-order-subtotal">{totalPrice}.00$</p>
                    <p className="your-order-discount">{discount}%</p>
                    <p className="your-order-shipping">{shipPrice}.00$</p>
                    <h4 className="order-total order-total-money">${((totalPrice * (100 - discount) / 100) + shipPrice).toFixed()}.00</h4>
                  </div>
                </div>
              </div>
              <button
                class="default-btn order-btn"
                onClick={() => handleAddOrder()}
              >Place order</button>
              <NavLink to='/admin/Order' class="default-btn order-btn">
                  <i className='bx fa-solid fa-comment'></i>
                  <span class="text">  Go to Order Page</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
