import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className=" bg-indigo-400 rounded-md p-5 flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-700 text-5xl font-extrabold">
          ${price.price}
        </span>
        <span className="text-xl font-bold text-gray-200 ">/mon</span>
      </h2>
      <h5 className="text-2xl my-6 font-bold text-center">{price.name} </h5>
      <p className="font-bold text-white underline">Features: </p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="w-full hover:bg-green-700 bg-green-500 py-3 rounded-md text-white font-bold mt-auto">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
