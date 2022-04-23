import React from "react";
import { useState } from "react";
import "./HeaderAndBarAdmin.css";
import { NavLink } from "react-router-dom";
const menus = [
  {
    name: "Home",
    icon: "bx fa-solid fa-house",
  },
  {
    name: "Shop",
    icon: "bx fa-solid fa-shop",
  },
  {
    name: "User",
    icon: "bx fa-solid fa-user-large",
  },
  {
    name: "Category",
    icon: "bx fa-solid fa-dice-d20",
  },
  {
    name: "Comment",
    icon: "bx fa-solid fa-comment",
  },
  {
    name: "Blog",
    icon: "bx fa-brands fa-blogger",
  },
  {
    name: "Order",
    icon: "bx fa-solid fa-money-bill-1-wave",
  },
];

const HeaderAndBarAdmin = ({active}) => {
  const [type, setType] = useState(active);
  return (
    <>
      <>
        <section id="sidebar" className="header-and-bar">
          <a href="#" class="brand">
            <i class="bx bxs-smile"></i>
            <span class="text">NatureCircle</span>
          </a>
          <ul class="side-menu top">
            <li
                onClick={() => setType('Home')}
                className={type === 'Home' ? "active" : ""}
              >
                <NavLink to='/admin/Home'>
                  <i className='bx fa-solid fa-house'></i>
                  <span class="text">Home</span>
                </NavLink>
            </li>
            <li
                onClick={() => setType('Shop')}
                className={type === 'Shop' ? "active" : ""}
              >
                <NavLink to='/admin/Shop' >
                  <i className='bx fa-solid fa-shop'></i>
                  <span class="text">Shop</span>
                </NavLink>
            </li>
            <li
                className={type === 'User' ? "active" : ""}
              >
                <NavLink to='/admin/User' onClick={() => setType('User')}>
                  <i className='bx fa-solid fa-user-large'></i>
                  <span class="text">User</span>
                </NavLink>
            </li>
            <li
                className={type === 'Category' ? "active" : ""}
              >
                <NavLink to='/admin/Category' onClick={() => setType('Category')}>
                  <i className='bx fa-solid fa-dice-d20'></i>
                  <span class="text">Category</span>
                </NavLink>
            </li>
            <li
                className={type === 'Comment' ? "active" : ""}
              >
                <NavLink to='/admin/Comment' onClick={() => setType('Comment')}>
                  <i className='bx fa-solid fa-comment'></i>
                  <span class="text">Comment</span>
                </NavLink>
            </li>
            <li
                className={type === 'Blog' ? "active" : ""}
              >
                <NavLink to='/admin/Blog' onClick={() => setType('Blog')}>
                  <i className='bx fa-brands fa-blogger'></i>
                  <span class="text">Blog</span>
                </NavLink>
            </li>
            <li
                className={type === 'Order' ? "active" : ""}
              >
                <NavLink to='/admin/Order' onClick={() => setType('Order')}>
                  <i className='bx fa-solid fa-money-bill-1-wave'></i>
                  <span class="text">Order</span>
                </NavLink>
            </li>
           
          </ul>
          <ul class="side-menu">
            <li>
              <a href="#">
                <i class="bx fa-solid fa-gear"></i>
                <span class="text">Settings</span>
              </a>
            </li>
            <li>
              <NavLink className="logout" to="/shop">
                <i class="bx fa-solid fa-right-from-bracket"></i>
                <span class="text">Logout</span>
              </NavLink>
            </li>
          </ul>
        </section>

        
      </>
    </>
  );
};

export default HeaderAndBarAdmin;
