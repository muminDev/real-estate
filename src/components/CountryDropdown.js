import React, { useState, useEffect, useContext } from "react";

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  console.log(country);
  return (
    <Menu as={"div"} className={"dropdown relative"}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className={"dropdown-btn w-full text-left"}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div>{country}</div>
          <div>Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-primary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-primary" />
          )}
        </div>
      </Menu.Button>
    </Menu>
  );
};

export default CountryDropdown;
