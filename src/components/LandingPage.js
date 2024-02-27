import React from "react";
import Header from "./Header";
import Video from "../assets/Video.mp4";
import Video2 from "../assets/Video2.mp4";
import Card from "./Card";
import { Data, ExpandableData } from "../config/CardData";
import ExpandableCrad from "./ExpandableCrad";
import PetCard from "./cards/PetCard";
import BlogCard from "./cards/BlogCard";
import TestimonialCard from "./cards/TestimonialCard";

const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="flex justify-start items-center h-[833px]   relative">
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

        <div className=" w-6/12  relative z-10 px-20 space-y-8">
          <div className="sm:text-9xl text-4xl text-white font-bold ">
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
          <div className="text-7xl font-bold">Why Boop?</div>
          <div class="h-1 w-2/12 m-auto bg-borderColor"></div>
        </div>
      </div>

      <div className="w-12/12 px-20 bg-cardBg ">
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
          <div className="text-7xl font-semibold">
            {" "}
            <p>Prime attributes of BOOP</p>{" "}
            <div class="h-1 w-12/12 bg-borderColor mt-6"></div>{" "}
          </div>

          <div className="flex justify-center items-center w-10/12 gap-10">
            <div className="flex justify-center items-center w-5/10 flex-col ">
              {ExpandableData.map((item) => (
                <ExpandableCrad data={item} />
              ))}
            </div>
            <div className="flex w-5/10 justify-center items-center h-[569px]">
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

      <div className="w-full bg-cardBg py-40 overflow-hidden">
        <div className="text-7xl font-semibold px-20">Pets at boop</div>
        <div className="text-lg font-light px-20">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div class="h-1 w-1/12 mx-20 bg-borderColor mt-1"></div>{" "}
        <div className="w-full mt-10 bg-cardBg  overflow-y-auto flex px-0  hide-scroll-bar ">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <PetCard key={i} />
          ))}
        </div>
      </div>

      <div className="w-full bg-cardBg py-30 px-20">
        <div className="text-7xl font-semibold text-center">
          {" "}
          <p>Paw Perspectives</p>{" "}
          <div class="h-1 w-2/12 bg-borderColor mt-6 mx-auto"></div>{" "}
        </div>
        <div className=" flex flex-1 justify-center flex-wrap mt-10  gap-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </div>


      <div className="w-full bg-cardBg py-40 overflow-hidden">
        <div className="text-7xl font-semibold px-20">Paw-some Stories</div>
        <div className="text-lg font-light px-20">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div class="h-1 w-1/12 mx-20 bg-borderColor mt-1"></div>{" "}
        <div className="w-full mt-10 bg-cardBg  overflow-y-auto flex px-0  hide-scroll-bar ">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <TestimonialCard key={i} />
          ))}
        </div>
      </div>


    </>
  );
};

export default LandingPage;
