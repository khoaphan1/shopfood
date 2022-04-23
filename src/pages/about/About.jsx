import React from "react";
import Header from "../../components/header/Header";
import BannerItem from "../../components/bannerItem/BannerItem";
import Footer from "../../components/footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <BannerItem nameItem="About and Contact" />
      <div className="contact-main">
        <div className="message-area w-1/2 pt-28 pl-11 pr-11 h-full">
          <h1 class="contact-title">Take note of your review</h1>
          <div className="contact-form">
            <div className="columns-2">
              <input
                className="contact-form-input"
                type="text"
                name="name"
                id="name"
                placeholder="First Name *"
              />
              <input
                className="contact-form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
              />
              <input
                className="contact-form-input"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name *"
              />
              <input
                className="contact-form-input"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone *"
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message *"
            ></textarea>
          </div>
        </div>
        <div className="contact-area w-1/2 pt-28 pb-28 pl-11 pr-11 h-full">
          <h1 class="contact-title">CONTACT US</h1>
          <div class="contact-info">
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <div class="contact-list-wrapper">
              <div class="contact-list">
                <i class="fa fa-fax"></i>
                <span>Address : 40 Baria Sreet 133/2 NewYork City</span>
              </div>
              <div class="contact-list">
                <i class="fa fa-phone"></i>
                <span>Info@naturecircle.com</span>
              </div>
              <div class="contact-list">
                <i class="fa-solid fa-envelope"></i>
                <span>0(1234) 567 890</span>
              </div>
            </div>
          </div>
          <div class="working-time">
            <h2>Working hours</h2>
            <span>
              <span>Monday – Saturday:</span> 08AM – 22PM
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
