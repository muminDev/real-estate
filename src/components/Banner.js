import React from "react";

//import banner
import Image from "../assets/img/house-banner.png";

//import components
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb24">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px] flex flex-col items-center 
        lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none"> 
            <span className="text-violet-700">Rent</span> Your Dream House With Us
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/*image*/}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="a house" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
