import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={assets.logo_dark} alt="Logo" />
          <p>
            Empowering learners worldwide with expert-led online courses,
            interactive lessons, and career-boosting skills.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <p>Copyright 2025 © ElevateX. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
