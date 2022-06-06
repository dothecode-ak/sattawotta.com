import React from "react";
import "../sass/_footer.scss";
import CopyRight from "./CopyRight";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="linkFooterContainer">
          <div>Home</div>
          <div>About</div>
          <div>Press</div>
          <div>Contact</div>
          <div>Location</div>
        </div>
        <CopyRight />
      </div>
    </>
  );
};

export default Footer;
