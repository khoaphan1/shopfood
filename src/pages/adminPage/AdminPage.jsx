import React from "react";
import "./AdminPage.css";
import { useState } from "react";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import { listOrderSelector, listUserSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  const listOrder = useSelector(listOrderSelector);
  const listUser = useSelector(listUserSelector);
  const totalBill = listOrder.reduce((total,currentValue) => {
    return total + currentValue.totalBill;
  },0);

  console.log(totalBill)
  
  return (
    <>
      <HeaderAndBarAdmin active="Home" />
      <section id="content">
        <nav>
          <i class="bx fa-solid fa-bars"></i>
          <a href="#" class="nav-link">
            Home
          </a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" class="search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label for="switch-mode" class="switch-mode"></label>
          <a href="#" class="notification">
            <i class="fa-solid fa-bell"></i>
            <span class="num">8</span>
          </a>
          <a href="#" class="profile">
            <img src="https://i.pinimg.com/736x/af/5c/9e/af5c9e4d3073b223d290cf14543e34c0.jpg" />
          </a>
        </nav>

        <main>
        <div class="head-title">
          <div class="left">
            <h1>Dashboard</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i class="bx fa-solid fa-angle-right"></i>
              </li>
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <ul class="box-info">
          <li>
            <i class="bx fa-solid fa-money-bill-1"></i>
            <span class="text">
              <h3>{listOrder.length}</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i class="bx fa-solid fa-users"></i>
            <span class="text">
              <h3>{listUser.length}</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i class="bx fa-solid fa-sack-dollar"></i>
            <span class="text">
              <h3>${totalBill}</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>

        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Recent Orders</h3>
              <i class="bx bx-search"></i>
              <i class="bx bx-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://i.pinimg.com/736x/d3/5d/87/d35d875fca07dd1079d3002d489f39b3.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span class="status completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://i.pinimg.com/736x/d3/5d/87/d35d875fca07dd1079d3002d489f39b3.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://i.pinimg.com/736x/d3/5d/87/d35d875fca07dd1079d3002d489f39b3.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span class="status process">Process</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://i.pinimg.com/736x/d3/5d/87/d35d875fca07dd1079d3002d489f39b3.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="https://i.pinimg.com/736x/d3/5d/87/d35d875fca07dd1079d3002d489f39b3.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2021</td>
                  <td>
                    <span class="status completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="todo">
            <div class="head">
              <h3>Todos</h3>
              <i class="bx bx-plus"></i>
              <i class="bx bx-filter"></i>
            </div>
            <ul class="todo-list">
              <li class="completed">
                <p>Todo List</p>
                <i class="bx bx-dots-vertical-rounded"></i>
              </li>
              <li class="completed">
                <p>Todo List</p>
                <i class="bx bx-dots-vertical-rounded"></i>
              </li>
              <li class="not-completed">
                <p>Todo List</p>
                <i class="bx bx-dots-vertical-rounded"></i>
              </li>
              <li class="completed">
                <p>Todo List</p>
                <i class="bx bx-dots-vertical-rounded"></i>
              </li>
              <li class="not-completed">
                <p>Todo List</p>
                <i class="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
      </section>
     
    </>
  );
};

export default AdminPage;
