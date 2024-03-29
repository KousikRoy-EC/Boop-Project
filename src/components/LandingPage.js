import React, { useState } from "react";
import Header from "./Common/Header";
import Video from "../assets/Video.mp4";
import Video2 from "../assets/Video2.mp4";
import Card from "./cards/Card";
import { Data, ExpandableData } from "../config/CardData";
import ExpandableCrad from "./cards/ExpandableCrad";
import PetCard from "./cards/PetCard";
import BlogCard from "./cards/BlogCard";
import TestimonialCard from "./cards/TestimonialCard";
import Footer from "./Common/Footer";

const LandingPage = () => {
  const [isPaused, setIsPaused] = useState(false);

  const pauseScroll = () => {
    setIsPaused(true);
  };

  const resumeScroll = () => {
    setIsPaused(false);
  };

  return (
    <>
      <Header />

      <div className="flex justify-start items-center h-[833px] font-poppins  relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            className="videoTag w-full h-[833px] object-cover"
            autoPlay
            loop
            muted
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>

        <div className="w-full xl:w-6/12  relative z-10 xl:px-20 px-8 space-y-8">
          <div className="sm:text-9xl text-6xl text-white font-bold ">
            Pet Care <br /> Simplified.
          </div>

          <div className="xl:text-3xl text-base text-white font-light">
            Your{" "}
            <span className="font-semibold text-borderColor">All-in-One</span>{" "}
            Pet Management Solution.
          </div>
          <div className="flex items-start xl:items-center xl:flex-row flex-col gap-4">
            <button
              className="bg-borderColor h-[52px] hover:bg-opacity-75 font-poppins text-white font-light text-base py-2 px-4 rounded-xl"
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

      <div className="relative flex justify-center items-center h-[833px]">
        <video
          className="videoTag w-full h-[833px] object-cover absolute inset-0"
          autoPlay
          loop
          muted
        >
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="absolute z-10 text-center text-borderColor w-full space-y-8">
          <div className="text-5xl xl:text-7xl font-bold">Why Boop?</div>
          <div class="h-1 w-2/12 m-auto bg-borderColor"></div>
        </div>
      </div>

      <div className="w-12/12 xl:px-20 px-8 bg-cardBg ">
        {Data.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            video={data.video}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}

        <div className="flex justify-center items-center flex-col space-y-20">
          <div className="text-4xl xl:text-7xl font-semibold">
            {" "}
            <p>Prime attributes of BOOP</p>{" "}
            <div class="h-1 w-12/12 bg-borderColor mt-6"></div>{" "}
          </div>

          <div className="flex justify-center items-center w-full xl:w-10/12 gap-10">
            <div className="flex justify-center items-center w-full xl:w-5/10 flex-col ">
              {ExpandableData.map((item) => (
                <ExpandableCrad data={item} />
              ))}
            </div>
            <div className=" w-5/10 xl:flex hidden justify-center items-center h-[569px]">
              <video
                className="videoTag w-full object-cover h-[569px] rounded-3xl"
                autoPlay
                loop
                muted
              >
                <source src={Video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-cardBg xl:py-40 py-10 overflow-hidden">
      <div className="px-8 xl:px-0">
        <div className="text-4xl xl:text-7xl font-semibold px-0 xl:px-20">Pets at boop</div>
        <div className="text-lg font-light px-0 xl:px-20">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        </div>
        <div class="h-1 w-4/12 xl:mx-20 mx-8 bg-borderColor mt-1"></div>{" "}
        <div className="w-full mt-10 bg-cardBg  overflow-y-auto flex px-0  hide-scroll-bar ">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <PetCard key={i} />
          ))}
        </div>
      </div>

      <div className="w-full bg-cardBg py-30 xl:px-20 px-8">
        <div className="text-4xl xl:text-7xl font-poppins font-semibold text-center">
          {" "}
          <p>Paw Perspectives</p>{" "}
          <div className="text-xs my-1 text-textGrey font-light px-0 xl:px-20">
          Lorem ipsum dolor sit amet, consectetur
        </div>
          <div class="h-1 w-6/12 bg-borderColor mt-1 mx-auto"></div>{" "}
        </div>
      
        <div className=" flex flex-1 justify-center flex-wrap mt-10  gap-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </div>

      <div className="w-full bg-cardBg py-40 overflow-hidden">
        <div className="text-4xl xl:text-7xl font-semibold xl:px-20 px-8">Paw-some Stories</div>
        <div className="text-xs font-light xl:px-20 px-8 my-1 font-poppins">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div class="h-1 w-6/12 xl:mx-20 mx-8 bg-borderColor mt-1"></div>{" "}
        <div className="w-full mt-10 bg-cardBg overflow-hidden flex px-0 hide-scroll-bar">
          <div
            className="testimonial-container"
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
            id="testimonial-container"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <TestimonialCard key={i} />
            ))}
          </div>
        </div>
      </div>
<div className="bg-cardBg w-full">
      <Footer />
      </div>
    </>
  );
};

export default LandingPage;
