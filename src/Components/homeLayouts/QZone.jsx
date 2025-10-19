import React from "react";
import SwimmingImg from "../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlayGroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 py-3 px-2 rounded-md">
      <h2 className="font-bold mb-6">QZone</h2>
      <div className="flex flex-col items-center space-y-6">
        <img src={SwimmingImg} alt="" />
        <img src={ClassImg} alt="" />
        <img src={PlayGroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
