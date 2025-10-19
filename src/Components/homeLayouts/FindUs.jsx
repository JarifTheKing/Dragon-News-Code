import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>

      <div className="flex flex-col gap-3 mt-4">
        <div className="join join-vertical w-full ">
          <button className="btn join-item bg-white justify-start">
            <IoLogoFacebook /> FaceBook
          </button>
          <button className="  btn join-item bg-white justify-start">
            <FaTwitter /> Twitter
          </button>
          <button className="btn join-item bg-white justify-start">
            <SiInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
