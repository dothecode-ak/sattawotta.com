import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Image } from "react-bootstrap";
import banner from "../data";
const Banner = () => {
  return (
    <>
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {banner.map((banner, id = 0) => (
          <div class="item" key={id++}>
            <Image src={banner}></Image>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Banner;
