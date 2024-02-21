import React from "react";
import checkImg from "../assets/checkImg.png";
import nameIcon from "../assets/nameIcon.png";
const ProfileCreation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
     <div className="justify-center flex">
          <img src={nameIcon} className="w-48 h-28" alt="Name Icon" />
        </div>
      <div>
        <img src={checkImg} alt="img" className="w-[168px] h-[168px]" />
      </div>
      <div className="flex-col w-12/12 sm:w-6/12 gap-[20px] flex justify-center text-center">
        <div className="font-poppins font-bold leading-10 text-4xl text-center">
          Your Profile has been <br /> Sucessfully Created!
        </div>

        <div className="font-poppins font-normal leading-10 text-xl text-wrap">
          Hooray, Your profile has been successfully created, Your next step is
          to create a pet profile!
        </div>
      </div>
      <div className="flex justify-between gap-[10px] sm:flex-row flex-col">
        <div className="hover:bg-btnColor text-center border-2 hover:cursor-pointer border-borderColor flex justify-center items-cente rounded-[50px] text-black font-normal text-xl leading-40 tracking-wider py-4 px-12">
          Go to Pet profile
        </div>

        <div className="hover:bg-btnColor text-center border-2 hover:cursor-pointer border-borderColor flex justify-center items-center  rounded-[50px] text-black font-normal text-xl leading-40 tracking-wider py-4 px-12">
          Add a pet
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
