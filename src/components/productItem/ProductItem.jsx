import React from "react";
import "./ProductItem.css";
import { NavLink } from "react-router-dom";
import { addProductToCart} from "../../redux/actions";
import { useDispatch } from "react-redux";

const ProductItem = ({id, name, oldprice, newprice, imgProduct, season, nameCompany, desc}) => {
  
  const qtyProduct = 1
  const dispatch = useDispatch();

  const handleAddToCart = (id,qtyProduct) => {
    dispatch(
      addProductToCart(id, qtyProduct)
    );
    console.log("success");
  };

  return (
    
    <div className="product-item">
      <div className="product-img">
        <NavLink to={`/product/${id}`}>
          <img
            src={imgProduct}
            alt=""
          />
        </NavLink>
        <div className="product-hover-main">
          <div className="product-hover">
            <ul className="hover-icon-list">
              <li>
                <a className="icon-ref" href="wishlist.html">
                  <i className="fa-solid fa-heart icon-1"></i>
                </a>
              </li>
              <li>
                <a className="icon-ref" href="#" tabindex="0">
                  <i className="fa-solid fa-repeat icon-2"></i>
                </a>
              </li>
              <li>
                <NavLink to={`/product/${id}`} className="icon-ref">
                  <i className="fa-solid fa-magnifying-glass icon-3"></i>
                </NavLink>
              </li>
            </ul>
            <button type="button" className="item-cart-btn" tabIndex="0" onClick={() =>handleAddToCart(id,qtyProduct)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-text">
        <div className="product-text">
          <div className="product-rating">
            <i className="fa-solid fa-star color"></i>
            <i className="fa-solid fa-star color"></i>
            <i className="fa-solid fa-star color"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h5>
            <NavLink to={`/product/${id}`}>
              {name}
            </NavLink>
            {/* <a href="shop.html" tabindex="0">
              {name}
            </a> */}
          </h5>
          <div className="pro-price">
            {/* <span className="new-price">$86.00</span>
            <span className="old-price">$92.00</span> */}
            <span className="new-price">${newprice}.00</span>
            <span className="old-price">${oldprice}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
