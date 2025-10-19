import React from "react";
import Logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-8">
      <img className="w-[350px]" src={Logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM d, y")}
      </p>
    </div>
  );
};

export default Header;
