import React from "react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex mt-2 items-center">
      <CheckCircleIcon className="h-5 w-5 text-purple-600" />
      <span className=" pl-2">{feature}</span>
    </div>
  );
};

export default Feature;
