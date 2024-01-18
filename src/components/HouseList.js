import React, { useContext } from "react";

//import context
import { HouseContext } from "./HouseContext";

//import components
import House from "./House";

//import link
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  if (houses.length < 1) {
    return (
      <div className="text-center text-3x1 text-gray-400 mt-48">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="m-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
