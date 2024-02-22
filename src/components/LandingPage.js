import React from "react";
import Header from "./Header";
import Video from "../assets/Video.mp4";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-start items-center h-screen relative">
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

        <div className=" w-6/12  relative z-10 px-20 space-y-8">
          <div className="text-9xl text-white font-bold ">
            Pet Care <br /> Simplified.
          </div>

          <div className="text-3xl text-white font-light">
            Your{" "}
            <span className="font-semibold text-borderColor">All-in-One</span>{" "}
            Pet Management Solution.
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-borderColor h-[52px] hover:bg-opacity-75 text-white font-light text-base py-2 px-4 rounded-xl"
              // onClick={handleSubmit}
            >
              Register as a Pet Parent
            </button>

            <p className="text-center text-borderColor font-poppins text-xl font-medium leading-6 tracking-wide">
              Already a user?{" "}
              <span className="font-medium underline">Login</span>
            </p>
          </div>
          <div class="h-1 w-10/12 bg-borderColor"></div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
