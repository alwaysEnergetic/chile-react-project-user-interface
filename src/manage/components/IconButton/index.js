import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ iconName, buttonText, onPress }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onPress}>
      <FontAwesomeIcon icon={iconName} size= "1x" />
      <div className="px-3 py-4 text-base font-sans">{buttonText}</div>
    </div>
  );
};

export default IconButton;
