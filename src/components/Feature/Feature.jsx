import React from "react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex mt-2">
      <CheckCircleIcon className="h-6 w-6 text-blue-500" />
      <span className="">{feature}</span>
    </div>
  );
};

export default Feature;
