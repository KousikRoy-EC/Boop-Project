import React, { useState } from "react";
import nameIcon from "../assets/nameIcon.png";
import Video from "../assets/Video.mp4";
import { Checkbox } from "@mui/material";
import checkImg from "../assets/checkImg.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    zipCode: "",
    state: "",
    city: "",
    otp: "",
    termsChecked: false,
    legalTermsChecked: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    if (!formData.termsChecked || !formData.legalTermsChecked) {
      alert("Please agree to terms and conditions.");
      return;
    }

    // API Call for creating profiles to be made here
  };

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
        {/* Signup page */}
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="text-gray-800 font-poppins text-4xl font-medium leading-8 tracking-wide">
              Create your account
            </p>
            <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
              Manage your pet service with us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-wrap gap-[10px] justify-evenly">
              <input
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                type="text"
                className="w-[200px] h-[56px] border border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="First Name"
              />
              <input
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                type="text"
                className="w-[200px] h-[56px] border border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="Last Name"
              />
              <input
                onChange={handleChange}
                name="address1"
                value={formData.address1}
                type="text"
                className="w-[200px] h-[56px] border border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="Address 1"
              />
              <input
                onChange={handleChange}
                name="address2"
                value={formData.address2}
                type="text"
                className="w-[200px] h-[56px] border border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="Address 2"
              />
              <div className="flex justify-evenly items-center w-full">
                <input
                  onChange={handleChange}
                  name="countryCode"
                  value={formData.countryCode}
                  type="text"
                  className="w-[74px] h-[56px] border border-borderColor rounded-xl bg-white  px-4 text-xl focus:outline-none"
                  placeholder="+91"
                />

                <input
                  onChange={handleChange}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  type="text"
                  className="w-[339px] h-[56px] border border-borderColor rounded-xl bg-white px-4 pr-40 text-xl focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className="w-[422px] h-[56px] border border-borderColor rounded-xl pr-60 bg-white px-4 text-xl focus:outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-wrap gap-[10px] justify-evenly">
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className="w-[422px] h-[56px] border border-borderColor rounded-xl pr-60 bg-white px-4 text-xl focus:outline-none"
                placeholder="Email"
              />

              <input
                onChange={handleChange}
                name="zipCode"
                value={formData.zipCode}
                type="text"
                className="border w-[142px] h-[56px] border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="Zip Code"
              />
              <input
                onChange={handleChange}
                name="state"
                value={formData.state}
                type="text"
                className="border w-[115px] h-[56px] border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="State"
              />
              <input
                onChange={handleChange}
                name="city"
                value={formData.city}
                type="text"
                className="border w-[115px] h-[56px] border-borderColor rounded-xl bg-white px-4 text-xl focus:outline-none"
                placeholder="City"
              />

              <div className="flex justify-evenly items-center w-full">
                <input
                  onChange={handleChange}
                  name="countryCode"
                  value={formData.countryCode}
                  type="text"
                  className="w-[74px] h-[56px]  border border-borderColor rounded-xl bg-white  px-4 text-xl focus:outline-none"
                  placeholder="+91"
                />

                <input
                  onChange={handleChange}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  type="text"
                  className="w-[339px] h-[56px]  border border-borderColor rounded-xl bg-white px-4 pr-40 text-lg focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <input
                onChange={handleChange}
                name="otp"
                value={formData.otp}
                type="text"
                className=" w-[422px] h-[56px] border border-borderColor rounded-xl bg-white  px-4 pr-60 text-lg focus:outline-none"
                placeholder="OTP"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              onChange={handleCheckboxChange}
              name="termsChecked"
              value={formData.termsChecked}
              sx={{
                color: "#DB9048",
                "&.Mui-checked": {
                  color: "#DB9048",
                },
              }}
            />
            <p className="text-gray-900 font-poppins text-base font-normal leading-6 tracking-wide">
              Agree to{" "}
              <span className="font-medium underline">
                Terms and Conditions
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              onChange={handleCheckboxChange}
              name="legalTermsChecked"
              value={formData.legalTermsChecked}
              sx={{
                color: "#DB9048",
                "&.Mui-checked": {
                  color: "#DB9048",
                },
              }}
            />
            <p className="text-gray-900 font-poppins text-base font-normal leading-6 tracking-wide">
              Accept <span className="font-medium underline">Legal Terms</span>
            </p>
          </div>

          <button
            className="bg-borderColor h-[52px] hover:bg-opacity-75 text-white font-bold text-xl py-2 px-4 rounded-xl"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

      
          <p className="text-center text-gray-900 font-poppins text-xl font-medium leading-6 tracking-wide">
            Already a user?{" "}
            <span className="font-medium underline">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
