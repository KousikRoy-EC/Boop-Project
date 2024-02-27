import React from "react";
import BlogImg from "../../assets/BlogImg1.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const BlogCard = () => {
  return (
    <>
      <div className="max-w-[345px] rounded-xl bg-BlogCardBg overflow-hidden border-none shadow-BlogCardShadow ">
        <img className="w-full shadow-BlogImgShandow h-auto rounded-xl " src={BlogImg} alt="#img" />
        <div className="p-4">
          <div className="bg-borderColor font-poppins mb-2 font-medium text-base rounded-3xl inline-block text-white px-4 py-1">
            Boop Picks
          </div>
          <div className="text-2xl font-poppins mt-0 font-bold mb-2">
            Deworming schedule for dogs and cats
          </div>
          <p
            className="text-lg font-medium font-poppins mt-0 mb-2"
            style={{ color: "#BABABA" }}
          >
            By wagr
          </p>
          <div className="flex justify-end items-center">
            <button className="border-borderColor  border-4 font-poppins cursor-pointer py-2 px-4 font-bold hover:text-white text-borderColor hover:bg-borderColor   focus:outline-none rounded-r-3xl rounded-b-3xl  text-lg">
              Read more
              <KeyboardArrowRightIcon  />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
