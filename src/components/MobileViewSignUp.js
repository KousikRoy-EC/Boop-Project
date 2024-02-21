import React, { useState } from "react";
import nameIcon from "../assets/nameIcon.png";
import Video from "../assets/Video.mp4";
import { Checkbox } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChevronLeft } from "@mui/icons-material";
import stopwatch from "../assets/stopwatch.png";
import ProfileCreation from "./ProfileCreation";

const MobileViewSignUp = () => {
  const [step, setStep] = useState(1); // To keep track of sign-up steps

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    zipCode: "",
    state: "",
    city: "",
    countryCode: "+91",
    phoneNumber: "",
    emergencyPhoneNumber: "",
    email: "",
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

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Perform form validation here before sending data to the API
    if (!formData.termsChecked || !formData.legalTermsChecked) {
      alert("Please agree to terms and conditions.");
      return;
    }

    // Send formData to API endpoint for profile creation
    // Example fetch request:
    fetch("https://example.com/api/create-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response from API
        console.log("Profile created successfully:", data);
        // Optionally, you can navigate to the next page or show a success message
      })
      .catch((error) => {
        // Handle error response from API
        console.error("Error creating profile:", error);
        // Optionally, show an error message to the user
      });
  };

  return (
    <div className="overflow-hidden flex justify-center items-center h-screen relative">
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

      {/* <div className=" w-full m-4 py-12 px-4 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
        <div className="justify-center flex">
          <img src={nameIcon} className="w-48 h-28" alt="Name Icon" />
        </div>
      
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="text-gray-800 font-poppins text-4xl font-medium leading-8 tracking-wide">
              Create your account
            </p>
            {step === 1 && (
              <span className="flex justify-center items-center flex-col gap-1">
                {" "}
                <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
                  Step 1 : Enter your name and email
                </p>
                <svg
                  width="43"
                  height="6"
                  viewBox="0 0 43 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="13" height="6" rx="3" fill="white" />
                  <circle cx="25" cy="3" r="3" fill="#9E9E9E" />
                  <circle cx="40" cy="3" r="3" fill="#9E9E9E" />
                </svg>
              </span>
            )}
            {step === 2 && (
              <span className="flex justify-center items-center flex-col gap-1">
                <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
                  Step 2 : Enter your Address and details
                </p>
                <svg
                  width="43"
                  height="6"
                  viewBox="0 0 43 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#9E9E9E" />
                  <rect x="15" width="13" height="6" rx="3" fill="white" />
                  <circle cx="40" cy="3" r="3" fill="#9E9E9E" />
                </svg>
              </span>
            )}
            {step === 3 && (
              <span className="flex justify-center items-center flex-col gap-1">
                <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
                  Step 3 : Verification
                </p>
                <svg
                  width="43"
                  height="6"
                  viewBox="0 0 43 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#9E9E9E" />
                  <circle cx="18" cy="3" r="3" fill="#9E9E9E" />
                  <rect x="30" width="13" height="6" rx="3" fill="white" />
                </svg>
              </span>
            )}
          </div>

          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2">
                <input
                  onChange={handleChange}
                  name="firstName"
                  value={formData.firstName}
                  type="text"
                  className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={formData.lastName}
                  type="text"
                  className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className=" h-[38px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Email"
              />
              <button
                className="bg-borderColor h-[52px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2">
                <input
                  onChange={handleChange}
                  name="address1"
                  value={formData.address1}
                  type="text"
                  className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="Address 1"
                />
                <input
                  onChange={handleChange}
                  name="address2"
                  value={formData.address2}
                  type="text"
                  className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="Address 2"
                />
              </div>

              <div className="flex justify-between items-center gap-2">
                <input
                  onChange={handleChange}
                  name="zipCode"
                  value={formData.zipCode}
                  type="text"
                  className="border w-6/12 h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="Zip Code"
                />
                <input
                  onChange={handleChange}
                  name="state"
                  value={formData.state}
                  type="text"
                  className="border w-6/12 h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                  placeholder="State"
                />
              </div>
              <input
                onChange={handleChange}
                name="city"
                value={formData.city}
                type="text"
                className="border  h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="City"
              />

              <div className="flex justify-between items-center gap-2">
                <input
                  onChange={handleChange}
                  name="countryCode"
                  value={formData.countryCode}
                  type="text"
                  className="w-2/12 h-[39px]  border border-borderColor rounded-xl bg-white  px-2 text-center text-xs focus:outline-none"
                  placeholder="+91"
                />
                <input
                  onChange={handleChange}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  type="text"
                  className="w-10/12 h-[39px]  border border-borderColor rounded-xl bg-white px-4 pr-40 text-xs focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex justify-between items-center gap-2">
                <button
                  className="bg-white w-2/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
                  onClick={handlePrevious}
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  className="bg-borderColor w-10/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4">
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className=" h-[38px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Email"
              />
              <div className="flex justify-between">
                <div className="pr-2 flex border border-borderColor rounded-xl w-fit items-center gap-1 focus:outline-none">
                  <input
                    onChange={handleChange}
                    name="otp"
                    value={formData.otp}
                    type="text"
                    className=" w-[83px] h-[38px] border border-borderColor rounded-xl bg-white  px-4 text-lg focus:outline-none"
                    placeholder="OTP"
                  />

                  <p>Resend OTP ?</p>
                </div>
                <div className="relative w-[58px] h-[58px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 92 78"
                    fill="none"
                  >
                    <path
                      d="M90.56 40.4142C89.6617 43.5854 87.8652 46.3338 85.5054 48.1505C83.6208 49.6034 81.4809 50.3634 79.3762 50.3634C78.5836 50.3634 77.8087 50.2576 77.0426 50.0411C74.2599 49.2449 72.0054 47.0347 70.8607 43.9753C69.8127 41.1864 69.7422 37.9051 70.6406 34.733C71.5475 31.5618 73.3439 28.8134 75.6952 26.9967C78.2844 25.0014 81.3665 24.3117 84.158 25.1062C86.9409 25.9023 89.204 28.1126 90.3489 31.172C91.3878 33.9611 91.4669 37.2421 90.56 40.4142ZM31.6814 32.3988C34.9927 32.3988 38.1541 30.5557 40.3556 27.3397C42.3545 24.4239 43.4553 20.6047 43.4553 16.5837C43.4553 12.5592 42.3545 8.74006 40.3556 5.82425C38.1539 2.60918 34.9925 0.765869 31.6814 0.765869C28.3614 0.765869 25.2001 2.60899 22.9985 5.82425C21.0084 8.74006 19.9076 12.5592 19.9076 16.5837C19.9076 20.6047 21.0084 24.4239 22.9985 27.3397C25.2001 30.5557 28.3616 32.3988 31.6814 32.3988ZM60.3194 32.3988C63.6395 32.3988 66.8007 30.5557 69.0024 27.3397C70.9925 24.4239 72.0933 20.6047 72.0933 16.5837C72.0933 12.5592 70.9925 8.74006 69.0024 5.82425C66.8007 2.60918 63.6393 0.765869 60.3194 0.765869C57.0082 0.765869 53.8467 2.60899 51.6453 5.82425C49.6464 8.74006 48.5456 12.5592 48.5456 16.5837C48.5456 20.6047 49.6464 24.4239 51.6453 27.3397C53.8467 30.5557 57.0082 32.3988 60.3194 32.3988ZM21.3605 34.7351C20.4536 31.5622 18.6571 28.8138 16.3057 26.9969C13.7167 25.0016 10.6346 24.3119 7.84287 25.1064C5.05137 25.9025 2.79687 28.1127 1.65199 31.1722C0.612867 33.9611 0.533742 37.2423 1.44068 40.4144C2.33899 43.5856 4.13543 46.334 6.4953 48.1507C8.37987 49.6036 10.5198 50.3636 12.6245 50.3636C13.4082 50.3636 14.192 50.2578 14.9493 50.0412C17.7408 49.2451 19.9953 47.0349 21.14 43.9754C22.1883 41.1866 22.2588 37.9053 21.3605 34.7351ZM63.2782 42.4679C58.4523 37.3955 52.3231 34.604 46.0004 34.604C39.6776 34.604 33.5396 37.3955 28.7313 42.4679C24.1344 47.3052 20.9291 54.0174 19.6961 61.3713C18.9123 66.0624 20.3388 70.5774 23.6236 73.7574C27.0404 77.0667 31.5052 78.0716 35.8732 76.5181C39.1051 75.3644 42.5131 74.7798 46.0004 74.7798C49.4877 74.7798 52.8957 75.3646 56.1277 76.5181C57.4751 76.9972 58.8312 77.234 60.161 77.234C63.1462 77.234 66.0084 76.0469 68.3682 73.7574C71.6619 70.5776 73.0884 66.0626 72.3046 61.3713C71.0718 54.0172 67.8663 47.3051 63.2782 42.4679Z"
                      fill="#DA9145"
                    />
                  </svg>
                  <img
                    src={stopwatch}
                    className="w-[50px] h-[50px] top-5 absolute"
                  />
                </div>
              </div>

              <div className="flex items-center h-[15px] gap-2">
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
              <div className="flex items-center h-[15px] gap-2">
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
                  Accept{" "}
                  <span className="font-medium underline">Legal Terms</span>
                </p>
              </div>

              <div className="flex justify-between items-center gap-2">
                <button
                  className="bg-white w-2/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
                  onClick={handlePrevious}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="bg-borderColor w-10/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}

      
          <p className="text-center text-gray-900 font-poppins text-xl font-medium leading-6 tracking-wide">
            Already a user?{" "}
            <span className="font-medium underline">Sign in</span>
          </p>
        </div>
     </div> */}


      {/* <div className="w-11/12 sm:w-6/12 m-4 sm:py-12 py-4 px-4 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
      <ProfileCreation />
      </div> */}
    </div>
  );
};

export default MobileViewSignUp;
