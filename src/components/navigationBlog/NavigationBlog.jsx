import React from "react";
import "./NavigationBlog.css";

const NavigationBlog = () => {
  return (
    <div className="navigation-blog-main">
      <div className="sidebar-widget sidebar-search-widget">
        <h3>Search</h3>
        <form action="#" className="sidebar-search-box">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="sidebar-widget">
        <h3>Tag</h3>
        <ul className="sidebar-widget-tag">
          <li>
            <a href="#">chilled</a>
          </li>
          <li>
            <a href="#">Dark</a>
          </li>
          <li>
            <a href="#">Euro</a>
          </li>
          <li>
            <a href="#">fashion</a>
          </li>
          <li>
            <a href="#">food</a>
          </li>
          <li>
            <a href="#">hardware</a>
          </li>
          <li>
            <a href="#">hat</a>
          </li>
          <li>
            <a href="#">hipster</a>
          </li>
          <li>
            <a href="#">holidays</a>
          </li>
          <li>
            <a href="#">light</a>
          </li>
          <li>
            <a href="#">cup</a>
          </li>
          <li>
            <a href="#">place</a>
          </li>
          <li>
            <a href="#">t-shirt</a>
          </li>
          <li>
            <a href="#">travel</a>
          </li>
          <li>
            <a href="#">video-2</a>
          </li>
          <li>
            <a href="#">white</a>
          </li>
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3>Find by</h3>
        <div className="find-by-text">
          <span>Most View</span>
          <span>Most Comment</span>
          <span>Recently</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBlog;
