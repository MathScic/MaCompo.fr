import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div>
          <p className="footer-text">
            <i class="fa-regular fa-copyright"></i>Copyright 2024 MaCompo.fr
          </p>
        </div>
        <div className="social-links">
          <a href="mailto:mthscicluna@gmail.com" className="footer-mail">
            <i class="fa-solid fa-envelope"></i>
            <a
              href="https://www.instagram.com/as_coudeville_50/"
              target="blank"
              className=""
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083204738697"
              target="blank"
              className=""
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/"
              target="blank"
              className=""
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
