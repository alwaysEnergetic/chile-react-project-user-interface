import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { buttonGroup } from "../../resources/assets";
import IconButton from "../IconButton";

const Setting = ({ profileClick, settingClick, logoutClick }) => {
  return (
    <div className="flex bg-blue-500 px-40 justify-between">
      <div className="flex">
        <div className="rounded-full w-28 h-28 flex items-center justify-center bg-lightGray">
          <FontAwesomeIcon icon={faUser} size="4x" />
        </div>
        <div className="bg-red-500">
          <div className="font-sans"> textInComponent </div>
          <div className="font-sans"> textInComponent </div>
        </div>
      </div>
      <div className=" flex bg-green-500 items-end">
        {buttonGroup.map((item, index) => {
          return (
            <IconButton
              key={index}
              iconName={item.iconName}
              buttonText={item.buttonText}
              onPress={
                index === 0
                  ? profileClick
                  : index === 1
                  ? settingClick
                  : logoutClick
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Setting;
