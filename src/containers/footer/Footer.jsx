import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content-item">
          <img src={logo} alt="gpt3 logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Links</div>
          <a href="/">Overons</a>
          <a href="/">Social Media</a>
          <a href="/">Counters</a>
          <a href="/">Contact</a>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Company</div>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Legal</a>
          <a href="/">Support</a>
        </div>
        <div className="gpt3__footer-content-item">
          <div className="gpt3__footer-link-title">Get in touch</div>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@gpt3.dummy</p>
        </div>
      </div>
      <div className="gpt3__footer-bottom">
        <p>© {currentYear} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
