import React from "react";
import "./style.scss";
import { FaYoutube, FaInstagram } from "react-icons/fa";

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
          <a href="https://www.youtube.com/channel/UCoaL6zw0sNyIRmKgCEYKQcw">
            <FaYoutube />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
