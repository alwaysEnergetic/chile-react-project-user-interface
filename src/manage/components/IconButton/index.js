import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ iconName, buttonText, onPress }) => {
  return (
    <div className="flex bg-red-500 items-center cursor-pointer" onClick={onPress}>
      <FontAwesomeIcon icon={iconName} />
      <div className="bg-gray-500 px-2 text-base font-sans">{buttonText}</div>
    </div>
  );
};

export default IconButton;
