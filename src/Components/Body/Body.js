import React from "react";
import Categories from "../Header/category";
import Banner from "./Banner";
import AllProduct from "../Products/AllProduct";
import HomePageDisplayCard from "./HomePageDisplayCard";

const Body = () => {
  return (
    <div>
      <Categories />
      <Banner />
      <AllProduct />
      <HomePageDisplayCard />
    </div>
  );
};

export default Body;
