import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ATUMA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ATUMA DAVID </small>
      </div>
    </footer>
  );
};

export default Footer;
