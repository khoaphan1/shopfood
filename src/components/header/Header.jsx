import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";
import { removeFromCart, searchChange } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [checkCart, setCheckCart] = useState(false);
  const [checkSetting, setCheckSetting] = useState(false);
  const [checkSearch, setCheckSearch] = useState(false);
  const listCart = useSelector((state) => state.listItemInCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const shipPrice = 5;
  const discount = 15;
  const dispatch = useDispatch();
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        // Show
        document.querySelector(".header_main").classList.add("header_scroll");
      } else {
        // Hide
        document
          .querySelector(".header_main")
          .classList.remove("header_scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // dọn dẹp bộ nhớ trước khi component bị unmounted

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle Scroll to Top web

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const removeFromCartItem = (id) => {
    dispatch(removeFromCart(id))
  }


  //search
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (e) =>{
    setSearchText(e.target.value);
  }

  const handleSearchProduct = () =>{
    dispatch(searchChange(searchText));
    setSearchText("")
    setCheckSearch(false)
  }
  return (
    <div>
      <header className="header_main">
        <div className="py-0 h-full">
          <div className="flex flex-wrap px-12 items-center justify-center h-full">
            <div className="logo flex-auto lg:w-1/6 md:w-1/2 h-full items-center justify-center">
              <div className="text-center h-full flex items-center justify-center ">
                <a href="">
                  <img
                    src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/logo/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="header-top-main flex-auto lg:w-2/3 md:w-full h-full">
              <div className="justify-center flex h-full">
                <nav className="flex justify-center h-full">
                  <ul className="m-0 p-0 list-none h-full flex items-center justify-center">
                    <li className="active float-left mx-5 relative">
                      <NavLink
                        className="nav-link-top"
                        aria-current="page"
                        to="/"
                      >
                        HOME
                        {/* <i className="fa-solid fa-angle-down ml-1"></i> */}
                      </NavLink>
                    </li>
                    <li className="float-left mx-5 relative">
                      <NavLink className="nav-link-top" to="/shop">
                        SHOP
                        {/* <i className="fa-solid fa-angle-down ml-1"></i> */}
                      </NavLink>
                    </li>
                    <li className="float-left mx-5 relative">
                      <NavLink className="nav-link-top" to="/blog">
                        BLOG
                        {/* <i className="fa-solid fa-angle-down ml-1"></i> */}
                      </NavLink>
                    </li>
                    <li className="float-left mx-5 relative">
                      <NavLink className="nav-link-top" to="/about">
                        ABOUT US
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="header-top-right lg:w-1/6 md:w-1/2  flex-auto ">
              <div className="flex items-center justify-center">
                <div className="ml-0 relative">
                  {/* Icon Tim Kiem */}
                  <button onClick={() => setCheckSearch(!checkSearch)}>
                    <i className="fa-solid fa-magnifying-glass text-lg"></i>
                  </button>
                  {/* Chuc nang tim kiem */}
                  {checkSearch && (
                    <form action="#" className="search-form active">
                      <input
                        type="text"
                        placeholder="Search entire store here ..."
                        value={searchText}
                        onChange={handleSearchTextChange}
                      />
                      <NavLink onClick={handleSearchProduct} to="/shop">
                        Search
                        {/* <i className="fa-solid fa-angle-down ml-1"></i> */}
                      </NavLink>
                      {/* <button onClick={handleSearchProduct} type="button">Search</button> */}
                    </form>
                  )}
                </div>
                <div className="ml-12 relative">
                  <button
                    className="relative setting-user"
                    onClick={() => setCheckSetting(!checkSetting)}
                  >
                    <i className="fa-solid fa-gear text-lg"></i>
                    {checkSetting && (
                      <div className="settings-content active">
                        <h4>
                          My Account <i className="fa fa-angle-down"></i>
                        </h4>
                        <ul>
                          <li>
                            {/* <a
                              href="#"
                              className="modal-view button"
                              data-bs-toggle="modal"
                              data-bs-target="#register_box"
                            >
                              Register
                            </a> */}
                            <NavLink
                              to={"/signup"}
                              className="modal-view button"
                            >
                              Register
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/signup"}
                              className="modal-view button"
                            >
                              Log In
                            </NavLink>
                          </li>
                        </ul>
                        <h4>
                          Currency: USD <i className="fa fa-angle-down"></i>
                        </h4>
                        <ul>
                          <li>
                            <a href="#">€ Euro</a>
                          </li>
                          <li>
                            <a href="#">£ Pound Sterling</a>
                          </li>
                          <li>
                            <a href="#">$ Us Dollar</a>
                          </li>
                        </ul>
                        <h4>
                          Language: en-vn <i className="fa fa-angle-down"></i>
                        </h4>
                        <ul>
                          <li>
                            <a href="#">
                              <div className="flex items-center">
                                <img
                                  src="https://seeklogo.com/images/U/United_Kingdom_Flag-logo-418BAEEF32-seeklogo.com.png"
                                  style={{ width: 20 }}
                                  alt=""
                                />
                                <span className="ml-1">English</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="flex items-center">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                                  style={{ width: 20 }}
                                  alt=""
                                />
                                <span className="ml-1">Vietnamese</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
                <div className="ml-12">
                  {/* Icon Gio Hang */}
                  <button
                    onClick={() => setCheckCart(!checkCart)}
                    className="relative pr-4"
                  >
                    <i className="fa-solid fa-cart-shopping text-lg"></i>
                    <span className="numberItem">{totalItems}</span>
                  </button>
                  {/* Gio Hang */}
                  {checkCart && (
                    <div className="cart-item-wrapper ">
                      <div className="scroll-cart">
                        <div className="list-cart-main">
                          {listCart.map((item, index) => (
                            <div className="single-cart-item" key={index}>
                              <div className="cart-img">
                                <a href="cart.html">
                                  <img
                                    className="img-small"
                                    src={item.img}
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="cart-text-btn">
                                <div className="cart-text">
                                  <h5>
                                    <a href="cart.html">{item.name}</a>
                                  </h5>
                                  <span className="cart-qty">×{item.qty}</span>
                                  <span className="cart-price">
                                    ${item.price * item.qty}
                                  </span>
                                </div>
                                <button type="button" onClick={() =>removeFromCartItem(item.id)}>
                                  <i className="fa fa-close"></i>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="cart-price-total">
                        <div className="cart-price-info flex justify-between">
                          <span className="cart-price-info-left">
                            Sub-Total :
                          </span>
                          <span className="cart-price-info-right">
                            {totalPrice}.00$
                          </span>
                        </div>
                        <div className="cart-price-info flex justify-between">
                          <span className="cart-price-info-left">
                            Discount :
                          </span>
                          <span className="cart-price-info-right">
                            {discount}%
                          </span>
                        </div>
                        <div className="cart-price-info flex justify-between">
                          <span className="cart-price-info-left">
                            Shipping :
                          </span>
                          <span className="cart-price-info-right">
                            {shipPrice}.00$
                          </span>
                        </div>
                        <div className="cart-price-info flex justify-between">
                          <span className="cart-price-info-left">Total :</span>
                          <span className="cart-price-info-right">
                            $
                            {(
                              (totalPrice * (100 - discount)) / 100 +
                              shipPrice
                            ).toFixed()}
                            .00
                          </span>
                        </div>
                      </div>
                      <div className="cart-links">
                        <NavLink to={"/cart"} className="modal-view button">
                          View Cart
                        </NavLink>
                        <NavLink to={"/checkout"} className="modal-view button">
                          Check Out
                        </NavLink>
                        {/* <a href="cart.html">View cart</a>
                        <a href="checkout.html">Checkout</a> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default Header;
