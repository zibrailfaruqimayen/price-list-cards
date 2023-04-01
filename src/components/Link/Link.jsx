import React from "react";

const Link = ({ route }) => {
  return (
    <li className="mr-12 hover:bg-purple-600 rounded">
      <a className="pl-2 md:pr-2" href={route.path}>
        {route.name}
      </a>
      <hr className=" md:hidden" />
    </li>
  );
};

export default Link;
