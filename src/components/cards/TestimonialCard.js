import React from "react";
import BlogImg from "../../assets/BlogImg1.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";

const TestimonialCard = () => {
  return (
    <>
      <div className="min-w-[345px] m-4 rounded-xl bg-BlogCardBg overflow-hidden border-none shadow-BlogCardShadow  transition-transform duration-300 transform hover:scale-105">
        <img
          className="w-full p-4  h-auto rounded-[32px]"
          src={BlogImg}
          alt="#img"
        />
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-poppins text-3xl mb-2 font-semibold  text-black">
                Kafia
              </div>
              <div class="h-[2px] w-4/12 bg-borderColor mt-1"></div>
              <div className="text-borderColor text-[10px] font-medium mt-1">
                Golden retriever • Pet of Sanjay
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1">
                <div>@brunothedog</div>
                <div className="flex justify-around items-center">
                  <FacebookIcon />
                  <InstagramIcon />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
          <div class="relative text-justify font-poppins text-xs font-light text-textGrey italic">
            <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 text-5xl opacity-25 tracking-[10px]">
              boop
            </span>
            “Hi there, I'm Bruno, the golden retriever, and Sanjay is my
            incredible pet parent on BOOP! With Sanjay at the helm, BOOP becomes
            our digital haven, where every pawprint and tail wag is treasured.
            Together, we embark on a journey of seamless pet care and boundless
            love, thanks to BOOP's personalized services and a community that
            understands the unique bond between pet parents and their furry
            companions”
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
