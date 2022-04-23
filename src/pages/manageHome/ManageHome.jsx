import React from "react";

export const ManageHome = () => {
  return (
    <div>
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
            <img src="img/people.png" />
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
        </main>
      </section>
    </div>
  );
};
