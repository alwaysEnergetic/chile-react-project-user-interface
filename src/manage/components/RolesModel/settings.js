import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { buttonGroup } from "../../resources/assets";
import IconButton from "../IconButton";

const Setting = ({ profileClick, settingClick, logoutClick }) => {
  return (
    <div className="flex px-40 justify-between">
      <div className="flex">
        <div className="rounded-full w-36 h-36 flex items-center justify-center bg-lightGray">
          <FontAwesomeIcon icon={faUser} size="5x" color = "#313131"/>
        </div>
        <div className="px-12 py-3">
          <div className="font-sans text-4xl font-black"> Bienvendio </div>
          <div className="font-sans text-2xl"> Alonso Diaz </div>
        </div>
      </div>
      <div className="flex items-end">
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
