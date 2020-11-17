import React from "react";
import Icofont from "react-icofont";

const Footer = () => {
  return (
    <footer className="footer pt-5">
      <p className="copyright">Copyright Hospital Reviews &copy; 2020</p>
      <p className="copy">
        {" "}
        <Icofont icon="hat" className="nav-icons" /> Designed and Built by Keli
        B
      </p>
    </footer>
  );
};

export default Footer;
