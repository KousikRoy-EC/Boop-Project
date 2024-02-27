import React from "react";

const Card = ({ title, video, description, imagePosition }) => {
  return (
    <React.Fragment>
      <div className="py-20">
        <div className="flex justify-evenly items-center gap-[10px]">
          {imagePosition === "left" && (
            <div className="w-5/12">
              <div className="text-7xl w-[400px] font-semibold my-6">
                {title}
              </div>
              <div class="h-1 w-2/5  bg-borderColor"></div>
              <div className="text-justify w-3/5 text-xl font-light text-cardTextColor leading-[40px]">
                {description}
              </div>
            </div>
          )}

          <div className="w-5/12 relative">
            <div className="relative flex justify-center items-center h-[563px]">
              <video
                className="videoTag w-full rounded-2xl z-10 h-[563px] object-cover absolute inset-0"
                autoPlay
                loop
                muted
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="bg-white h-[563px] w-full rounded-2xl absolute top-6 left-6 z-0"></div>
          </div>

          {imagePosition === "right" && (
            <div className="w-5/12">
              <div className="text-7xl w-[400px] font-semibold my-6">
                {title}
              </div>
              <div class="h-1 w-2/5  bg-borderColor"></div>
              <div className="text-justify w-3/5 text-xl font-light text-cardTextColor leading-[40px]">
                {description}
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
