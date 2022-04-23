import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-newsletter max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
          <div className="area-newsletter">
            <h2>Subscribe Newsletter.</h2>
            <p>Get e-mail updates about our latest shop and special offers.</p>
            <form action="#" className="search-form-footer">
              <input type="text" placeholder="Search entire store here ..." />
              <button type="button">Search</button>
            </form>
          </div>
          <div className="area-social">
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
        <div className="footer-top-service max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
          <div className="service-content">
            <div className="columns-3">
              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/rocket.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Free delivery</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>

              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/money.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Money Guarantee</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>

              <div className="single-service">
                <div className="service-image">
                  <img src="../../../../assets/image/icon/support.png" alt="" />
                </div>
                <div className="service-text">
                  <h3>Online Support</h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget-area">
          <div className="footer-widget-container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full flex flex-wrap">
            <div className="s-mobile:w-full mobile:w-full sm:w-full md:w-1/2 lg:w-2/6  footer-widget-left">
              <div className="single-footer-widget">
                <div className="footer-logo">
                  <a href="#">
                    <img
                      src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/logo/logo.png"
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum.
                </p>
                <div className="footer-text">
                  <span>
                    <i className="fa-solid fa-map-location-dot"></i>Address : No 40
                    Baria Sreet 133/2, NewYork, USA.
                  </span>
                  <span>
                    <i className="fa-solid fa-phone"></i>Phone : +(1234) 567 890
                  </span>
                  <span>
                    <i className="fa-solid fa-envelope"></i>Email :
                    demo@naturecircle.com
                  </span>
                </div>
              </div>
            </div>

            <div className="s-mobile:w-full mobile:w-full sm:w-full md:w-1/4 lg:w-1/6  footer-widget-left">
              <div className="single-footer-widget">
                <h3>Products</h3>
                <ul className="footer-widget-list">
                  <li>
                    <a href="shop.html">Prices drop</a>
                  </li>
                  <li>
                    <a href="shop.html">New products</a>
                  </li>
                  <li>
                    <a href="shop.html">Best sales</a>
                  </li>
                  <li>
                    <a href="shop.html">Stores</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="s-mobile:w-full mobile:w-full sm:w-full md:w-1/4 lg:w-1/6  footer-widget-left">
              <div className="single-footer-widget">
                <h3>Our Company</h3>
                <ul className="footer-widget-list">
                  <li>
                    <a href="shop.html">Delivery</a>
                  </li>
                  <li>
                    <a href="shop.html">Legi Notice</a>
                  </li>
                  <li>
                    <a href="shop.html">Documentation</a>
                  </li>
                  <li>
                    <a href="shop.html">Secure payment</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Stories</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="s-mobile:w-full mobile:w-full sm:w-full md:w-full lg:w-2/6  footer-widget-left">
              <div className="single-footer-widget">
                <h3>Instagram</h3>
                <div className="list-insta-img ">
                  <div className="md:columns-8 lg:columns-4">
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/1.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/2.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/3.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/4.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/5.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/6.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/7.jpg" alt="" className="img-ins" />
                    </a>
                    <a href="" className="">
                      <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/instagram/8.jpg" alt="" className="img-ins" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
          <div className="columns-2 ">
            <div className="copyright-name">
              <p>
                Copyright © by Phan Duy Khoa
              </p>
            </div>
            <div className="list-payment w-full">
              <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/payment.png" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
