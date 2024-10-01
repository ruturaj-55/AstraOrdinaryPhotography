import React from "react";
import "./style.scss";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href="https://www.instagram.com/astraordinaryphotography/">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@AstraordinaryPhotography">
            <FaYoutube />
          </a>
        </li>

        <li>
          <a href="https://x.com/astraordinary_p">
            <FaXTwitter />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
