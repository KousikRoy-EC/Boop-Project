import React from "react";
import nameIcon from "../assets/nameIcon.png";
import Video from "../assets/Video.mp4";
import { Checkbox } from "@mui/material";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="videoTag w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className=" w-[990px]  p-8 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
        <div className="justify-center flex">
          <img src={nameIcon} className="w-48 h-28" alt="Name Icon" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="text-gray-800 font-poppins text-3xl font-medium leading-8 tracking-wide">
              Create your account
            </p>
            <p className="text-black font-poppins text-base font-normal leading-8 tracking-tight">
              Manage your pet service with us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-wrap gap-[10px] justify-evenly">
            <input
              type="text"
              className="border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Address 1"
            />
            <input
              type="text"
              className="border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Address 2"
            />
<div className="flex justify-evenly items-center w-full">
<input
              type="text"
              className="w-[60px] border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="+91"
            />

<input
              type="text"
              className=" border border-borderColor rounded-xl bg-white h-10 px-4 pr-40 text-sm focus:outline-none"
              placeholder="Phone Number"
            />
            </div>
            <input
              type="text"
              className="border border-borderColor rounded-xl pr-60 bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Email"
            />
            </div>

            <div className="flex flex-wrap gap-[10px] justify-evenly">

            <input
              type="text"
              className="border border-borderColor rounded-xl pr-60 bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Email"
            />
    
            <input
              type="text"
              className="border w-[120px] border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="Zip Code"
            />
            <input
              type="text"
              className="border w-[120px] border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="State"
            />
            <input
              type="text"
              className="border w-[120px] border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="City"
            />

<div className="flex justify-evenly items-center w-full">
<input
              type="text"
              className="w-[60px] border border-borderColor rounded-xl bg-white h-10 px-4 text-sm focus:outline-none"
              placeholder="+91"
            />

<input
              type="text"
              className=" border border-borderColor rounded-xl bg-white h-10 px-4 pr-40 text-sm focus:outline-none"
              placeholder="Phone Number"
            />
            </div>
            <input
              type="text"
              className="border border-borderColor rounded-xl bg-white h-10 px-4 pr-60 text-sm focus:outline-none"
              placeholder="OTP"
            />

</div>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              sx={{
                color: "#DB9048",
                "&.Mui-checked": {
                  color: "#DB9048",
                },
              }}
            />
            <p className="text-gray-900 font-poppins text-base font-normal leading-6 tracking-wide">
              Agree to{" "}
              <span className="font-medium underline">Terms and Conditions</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              sx={{
                color: "#DB9048",
                "&.Mui-checked": {
                  color: "#DB9048",
                },
              }}
            />
            <p className="text-gray-900 font-poppins text-base font-normal leading-6 tracking-wide">
              Accept{" "}
              <span className="font-medium underline">Legal Terms</span>
            </p>
          </div>
          <button className="bg-borderColor hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full">
            Sign Up
          </button>
          <p className="text-center text-gray-900 font-poppins text-base font-medium leading-6 tracking-wide">
            Already a user? <span className="font-medium underline">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
