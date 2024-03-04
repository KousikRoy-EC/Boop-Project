import React from "react";
import nameIcon from "../../assets/nameIcon.png";
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="flex bg-btnColor justify-between items-center py-4 px-6 sm:px-12 lg:px-20">
      <div>
        <img src={nameIcon} alt="img" className="w-[100px] h-[50px]  hover:cursor-pointer"/>
      </div>
      <div className="hidden lg:flex space-x-20 text-sm font-semibold hover:cursor-pointer">
        <div>Services
        <KeyboardArrowDown />
        </div>
        <div>Our Pets</div>
        <div>Features</div>
        <div>Blogs</div>
        <div>Contact Us</div>
      </div>
      <div className="flex justify-center  hover:cursor-pointer">
       
        <div className="border-black border text-sm font-bold px-4 py-2 rounded-3xl ml-4">Join as a Service Provider</div>
      </div>
    </div>
  );
};

export default Header;
