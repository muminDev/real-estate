import React from "react";

//import data
import { housesData } from "../data";

//import use params
import { useParams } from "react-router-dom";

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

//import link
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  //get the house id
  const { id } = useParams();
  //get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold">$ {house.price}</div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 mb-6 text-violet-700">
              <div className="flex items-center gap-x-1">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex items-center gap-x-1">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex items-center gap-x-1">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg">
            <div>
              <div>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div>{house.agent.name}</div>
                <Link to={""} className="text-violet-700 text-sm">
                  View listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
