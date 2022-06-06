import React from "react";
import Banner from "./Banner";
import NavbarCmp from "./NavbarCmp";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <NavbarCmp />
      <Banner />
      <Product />
    </div>
  );
};

export default Home;
