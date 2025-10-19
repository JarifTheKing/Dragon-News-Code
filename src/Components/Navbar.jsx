import React from "react";
import { NavLink } from "react-router";
import UserLogo from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>

      <div className="nav flex gap-4 text-accent font-semibold">
        <NavLink to="/category/0">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex items-center gap-4">
        <img src={UserLogo} alt="" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
