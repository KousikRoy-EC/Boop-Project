import React from "react";
import nameIcon from "../../assets/nameIcon.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import apple from "../../assets/apple.png";
import Video from "../../assets/Video.mp4"

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <video className='videoTag w-full h-full object-cover' autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>

    <div className="flex flex-col gap-2 px-8 py-8 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
      <div className="justify-center flex">
        <img src={nameIcon} className="w-[245px] h-[142px] shrink-0" />
      </div>
      <div className="flex flex-col gap-[10px]">
<div>
  <p className="text-gray-800 font-poppins text-3xl font-medium leading-8 tracking-wide">
    Welcome Back
  </p>
  <p className="text-black font-poppins text-base font-normal leading-8 tracking-tight">
    Login to your account
  </p>
</div>
<div className="inline-flex ">
  <input
    type="text"
    className="border-borderColor rounded-xl border-t border-b border-l  bg-white h-10 px-5 pr-28 text-sm focus:outline-none"
    placeholder="Email/Mobile"
  />
</div>
<div className="inline-flex ">
  <input
    type="text"
    className="rounded-xl border-t border-b border-l border-borderColor bg-white h-10 px-5 pr-18 text-sm focus:outline-none"
    placeholder="OTP"
  />
</div>
<p className="text-gray-900 font-poppins text-base font-normal leading-40 tracking-wider underline">
  Resend it?
</p>
<div className="bg-borderColor flex justify-center items-center py-[10px] pr-[147px]  pl-[168px] w-[382px] rounded-2xl text-black font-normal text-base leading-40 tracking-wider">
  Log In
</div>
<div className="flex justify-evenly items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="134"
    height="2"
    viewBox="0 0 134 2"
    fill="none"
  >
    <path d="M0 1H133.5" stroke="white" />
  </svg>
  <span className="font-bold">OR</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="134"
    height="2"
    viewBox="0 0 134 2"
    fill="none"
  >
    <path d="M0 1H133.5" stroke="white" />
  </svg>
</div>

<div className="flex justify-evenly items-center">
  <img className="w-[43px] h-[43px] shrink-0" src={google} />
  <img className="w-[43px] h-[43px] shrink-0" src={apple} />
  <img className="w-[43px] h-[43px] shrink-0" src={facebook} />
</div>
<p className="text-center text-gray-900 font-poppins text-lg font-medium leading-10 tracking-wider">
  <span className="font-medium">New here?</span>{" "}
  <span className="font-bold underline">Register Now</span>
</p>
</div>
    </div>
  </div>
  );
};

export default LoginPage;

