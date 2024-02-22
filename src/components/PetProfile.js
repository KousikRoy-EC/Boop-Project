// import React from "react";
// import nameIcon from "../assets/nameIcon.png";
// import { Checkbox } from "@mui/material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { ChevronLeft } from "@mui/icons-material";
// import stopwatch from "../assets/stopwatch.png";
// import { useState } from "react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// const PetProfile = () => {
//   const [step, setStep] = useState(1); // To keep track of sign-up steps

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address1: "",
//     address2: "",
//     zipCode: "",
//     state: "",
//     city: "",
//     countryCode: "+91",
//     phoneNumber: "",
//     emergencyPhoneNumber: "",
//     email: "",
//     otp: "",
//     termsChecked: false,
//     legalTermsChecked: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: checked,
//     }));
//   };

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     // Perform form validation here before sending data to the API
//     if (!formData.termsChecked || !formData.legalTermsChecked) {
//       alert("Please agree to terms and conditions.");
//       return;
//     }

//     // Send formData to API endpoint for profile creation
//     // Example fetch request:
//     fetch("https://example.com/api/create-profile", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle success response from API
//         console.log("Profile created successfully:", data);
//         // Optionally, you can navigate to the next page or show a success message
//       })
//       .catch((error) => {
//         // Handle error response from API
//         console.error("Error creating profile:", error);
//         // Optionally, show an error message to the user
//       });
//   };

//   return (
//     <>
//       <div className=" sm:w-full w-10/12 m-4 py-12 px-4 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
//         <div className="justify-center flex">
//           <img src={nameIcon} className="w-48 h-28" alt="Name Icon" />
//         </div>

//         <div className="flex flex-col gap-4">
//           <div className="text-center">
//             <p className="text-gray-800 font-poppins text-4xl font-medium leading-8 tracking-wide">
//               Create your Pet Profile
//             </p>
//             {step === 1 && (
//               <span className="flex justify-center items-center flex-col gap-1">
//                 {" "}
//                 <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
//                   Step 1 : Enter your pet's details
//                 </p>
//                 <svg
//                   width="43"
//                   height="6"
//                   viewBox="0 0 43 6"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect width="13" height="6" rx="3" fill="white" />
//                   <circle cx="25" cy="3" r="3" fill="#9E9E9E" />
//                   {/* <circle cx="40" cy="3" r="3" fill="#9E9E9E" /> */}
//                 </svg>
//               </span>
//             )}
//             {step === 2 && (
//               <span className="flex justify-center items-center flex-col gap-1">
//                 <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
//                   Step 2 : Enter other details of your pet
//                 </p>
//                 <svg
//                   width="43"
//                   height="6"
//                   viewBox="0 0 43 6"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle cx="3" cy="3" r="3" fill="#9E9E9E" />
//                   <rect x="15" width="13" height="6" rx="3" fill="white" />
//                   {/* <circle cx="40" cy="3" r="3" fill="#9E9E9E" /> */}
//                 </svg>
//               </span>
//             )}
//           </div>

//           {step === 1 && (
//             <div className="flex flex-col gap-4">
//               <input
//                 onChange={handleChange}
//                 name="name"
//                 value={formData.name}
//                 type="text"
//                 className=" h-[38px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                 placeholder="Name"
//               />

//               <div className="flex justify-between items-center gap-2">
//                 <input
//                   onChange={handleChange}
//                   name="type"
//                   value={formData.type}
//                   type="text"
//                   className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                   placeholder="Type"
//                 />
//                 <input
//                   onChange={handleChange}
//                   name="breed"
//                   value={formData.breed}
//                   type="text"
//                   className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                   placeholder="Breed"
//                 />
//               </div>

//               <div className="flex items-center justify-start h-[15px] gap-1">
//                 <Checkbox
//                   style={{ padding: "0" }}
//                   onChange={handleCheckboxChange}
//                   name="termsChecked"
//                   value={formData.termsChecked}
//                   sx={{
//                     color: "#DB9048",
//                     "&.Mui-checked": {
//                       color: "#DB9048",
//                     },
//                   }}
//                 />
//                 <p className="text-gray-900 font-poppins text-base font-normal leading-6 tracking-wide">
//                   Neutread or Sprayed
//                 </p>
//               </div>

//               <button
//                 className="bg-borderColor h-[52px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
//                 onClick={handleNext}
//               >
//                 Next
//               </button>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="flex flex-col gap-4">
//               <div className="flex justify-between items-center gap-2">
//                 <input
//                   onChange={handleChange}
//                   name="address1"
//                   value={formData.address1}
//                   type="text"
//                   className="w-4/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                   placeholder="Age*"
//                 />
//                 <input
//                   onChange={handleChange}
//                   name="address2"
//                   value={formData.address2}
//                   type="text"
//                   className="w-3/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                   placeholder="Weight*"
//                 />

//                 <div className="border px-2 flex justify-between items-center h-[39px] w-5/12 text-center  border-borderColor rounded-xl   text-xs focus:outline-none">
//                   <div>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DatePicker
//                         className="text-xs focus:outline-none"
//                         label="Date"
//                         style={{ height: "39px" }}
//                       />
//                     </LocalizationProvider>
//                   </div>
//                   <div>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                     >
//                       <mask
//                         id="mask0_555_820"
//                         maskUnits="userSpaceOnUse"
//                         x="0"
//                         y="0"
//                         width="16"
//                         height="16"
//                       >
//                         <rect width="16" height="16" fill="#D9D9D9" />
//                       </mask>
//                       <g mask="url(#mask0_555_820)">
//                         <path
//                           d="M3.53607 14.6667C3.15454 14.6667 2.82792 14.5362 2.55623 14.275C2.28453 14.0139 2.14868 13.7 2.14868 13.3334V4.00004C2.14868 3.63337 2.28453 3.31949 2.55623 3.05837C2.82792 2.79726 3.15454 2.66671 3.53607 2.66671H4.22976V1.33337H5.61715V2.66671H11.1667V1.33337H12.5541V2.66671H13.2478C13.6293 2.66671 13.9559 2.79726 14.2276 3.05837C14.4993 3.31949 14.6352 3.63337 14.6352 4.00004V13.3334C14.6352 13.7 14.4993 14.0139 14.2276 14.275C13.9559 14.5362 13.6293 14.6667 13.2478 14.6667H3.53607ZM3.53607 13.3334H13.2478V6.66671H3.53607V13.3334ZM3.53607 5.33337H13.2478V4.00004H3.53607V5.33337ZM8.39192 9.33337C8.19538 9.33337 8.03063 9.26948 7.89767 9.14171C7.76471 9.01393 7.69823 8.8556 7.69823 8.66671C7.69823 8.47782 7.76471 8.31949 7.89767 8.19171C8.03063 8.06393 8.19538 8.00004 8.39192 8.00004C8.58847 8.00004 8.75322 8.06393 8.88618 8.19171C9.01914 8.31949 9.08562 8.47782 9.08562 8.66671C9.08562 8.8556 9.01914 9.01393 8.88618 9.14171C8.75322 9.26948 8.58847 9.33337 8.39192 9.33337ZM5.61715 9.33337C5.4206 9.33337 5.25585 9.26948 5.12289 9.14171C4.98994 9.01393 4.92346 8.8556 4.92346 8.66671C4.92346 8.47782 4.98994 8.31949 5.12289 8.19171C5.25585 8.06393 5.4206 8.00004 5.61715 8.00004C5.8137 8.00004 5.97845 8.06393 6.11141 8.19171C6.24436 8.31949 6.31084 8.47782 6.31084 8.66671C6.31084 8.8556 6.24436 9.01393 6.11141 9.14171C5.97845 9.26948 5.8137 9.33337 5.61715 9.33337ZM11.1667 9.33337C10.9702 9.33337 10.8054 9.26948 10.6724 9.14171C10.5395 9.01393 10.473 8.8556 10.473 8.66671C10.473 8.47782 10.5395 8.31949 10.6724 8.19171C10.8054 8.06393 10.9702 8.00004 11.1667 8.00004C11.3632 8.00004 11.528 8.06393 11.661 8.19171C11.7939 8.31949 11.8604 8.47782 11.8604 8.66671C11.8604 8.8556 11.7939 9.01393 11.661 9.14171C11.528 9.26948 11.3632 9.33337 11.1667 9.33337ZM8.39192 12C8.19538 12 8.03063 11.9362 7.89767 11.8084C7.76471 11.6806 7.69823 11.5223 7.69823 11.3334C7.69823 11.1445 7.76471 10.9862 7.89767 10.8584C8.03063 10.7306 8.19538 10.6667 8.39192 10.6667C8.58847 10.6667 8.75322 10.7306 8.88618 10.8584C9.01914 10.9862 9.08562 11.1445 9.08562 11.3334C9.08562 11.5223 9.01914 11.6806 8.88618 11.8084C8.75322 11.9362 8.58847 12 8.39192 12ZM5.61715 12C5.4206 12 5.25585 11.9362 5.12289 11.8084C4.98994 11.6806 4.92346 11.5223 4.92346 11.3334C4.92346 11.1445 4.98994 10.9862 5.12289 10.8584C5.25585 10.7306 5.4206 10.6667 5.61715 10.6667C5.8137 10.6667 5.97845 10.7306 6.11141 10.8584C6.24436 10.9862 6.31084 11.1445 6.31084 11.3334C6.31084 11.5223 6.24436 11.6806 6.11141 11.8084C5.97845 11.9362 5.8137 12 5.61715 12ZM11.1667 12C10.9702 12 10.8054 11.9362 10.6724 11.8084C10.5395 11.6806 10.473 11.5223 10.473 11.3334C10.473 11.1445 10.5395 10.9862 10.6724 10.8584C10.8054 10.7306 10.9702 10.6667 11.1667 10.6667C11.3632 10.6667 11.528 10.7306 11.661 10.8584C11.7939 10.9862 11.8604 11.1445 11.8604 11.3334C11.8604 11.5223 11.7939 11.6806 11.661 11.8084C11.528 11.9362 11.3632 12 11.1667 12Z"
//                           fill="#FFB163"
//                         />
//                       </g>
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <input
//                   onChange={handleChange}
//                   name="city"
//                   value={formData.city}
//                   type="text"
//                   className="border w-full  h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
//                   placeholder="Medical History"
//                 />
//               </div>

//               <div className="flex justify-between items-center border w-8/12 h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none">
//                 <div>
//                   <input
//                     onChange={handleChange}
//                     name="city"
//                     value={formData.city}
//                     type="text"
//                     placeholder="Medical History"
//                   />
//                 </div>
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="17"
//                     height="12"
//                     viewBox="0 0 17 12"
//                     fill="none"
//                   >
//                     <path
//                       d="M4.25 12C3.07803 12 2.0767 11.6062 1.24602 10.8188C0.415341 10.0312 0 9.06875 0 7.93125C0 6.95625 0.302652 6.0875 0.907955 5.325C1.51326 4.5625 2.3053 4.075 3.28409 3.8625C3.60606 2.7125 4.25 1.78125 5.21591 1.06875C6.18182 0.35625 7.27652 0 8.5 0C10.0068 0 11.285 0.509375 12.3347 1.52813C13.3843 2.54688 13.9091 3.7875 13.9091 5.25C14.7977 5.35 15.535 5.72188 16.121 6.36563C16.707 7.00938 17 7.7625 17 8.625C17 9.5625 16.6619 10.3594 15.9858 11.0156C15.3097 11.6719 14.4886 12 13.5227 12H9.27273C8.84773 12 8.4839 11.8531 8.18125 11.5594C7.8786 11.2656 7.72727 10.9125 7.72727 10.5V6.6375L6.49091 7.8L5.40909 6.75L8.5 3.75L11.5909 6.75L10.5091 7.8L9.27273 6.6375V10.5H13.5227C14.0636 10.5 14.5208 10.3188 14.8943 9.95625C15.2678 9.59375 15.4545 9.15 15.4545 8.625C15.4545 8.1 15.2678 7.65625 14.8943 7.29375C14.5208 6.93125 14.0636 6.75 13.5227 6.75H12.3636V5.25C12.3636 4.2125 11.9869 3.32812 11.2335 2.59688C10.4801 1.86563 9.56894 1.5 8.5 1.5C7.43106 1.5 6.51989 1.86563 5.76648 2.59688C5.01307 3.32812 4.63636 4.2125 4.63636 5.25H4.25C3.50303 5.25 2.86553 5.50625 2.3375 6.01875C1.80947 6.53125 1.54545 7.15 1.54545 7.875C1.54545 8.6 1.80947 9.21875 2.3375 9.73125C2.86553 10.2438 3.50303 10.5 4.25 10.5H6.18182V12H4.25Z"
//                       fill="#FFB163"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center border w-9/12  h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none">
//                 <div>
//                   <input
//                     onChange={handleChange}
//                     name="city"
//                     value={formData.city}
//                     type="text"
//                     placeholder="Vaccination Copy"
//                   />
//                 </div>
//                 <div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="17"
//                     height="12"
//                     viewBox="0 0 17 12"
//                     fill="none"
//                   >
//                     <path
//                       d="M4.25 12C3.07803 12 2.0767 11.6062 1.24602 10.8188C0.415341 10.0312 0 9.06875 0 7.93125C0 6.95625 0.302652 6.0875 0.907955 5.325C1.51326 4.5625 2.3053 4.075 3.28409 3.8625C3.60606 2.7125 4.25 1.78125 5.21591 1.06875C6.18182 0.35625 7.27652 0 8.5 0C10.0068 0 11.285 0.509375 12.3347 1.52813C13.3843 2.54688 13.9091 3.7875 13.9091 5.25C14.7977 5.35 15.535 5.72188 16.121 6.36563C16.707 7.00938 17 7.7625 17 8.625C17 9.5625 16.6619 10.3594 15.9858 11.0156C15.3097 11.6719 14.4886 12 13.5227 12H9.27273C8.84773 12 8.4839 11.8531 8.18125 11.5594C7.8786 11.2656 7.72727 10.9125 7.72727 10.5V6.6375L6.49091 7.8L5.40909 6.75L8.5 3.75L11.5909 6.75L10.5091 7.8L9.27273 6.6375V10.5H13.5227C14.0636 10.5 14.5208 10.3188 14.8943 9.95625C15.2678 9.59375 15.4545 9.15 15.4545 8.625C15.4545 8.1 15.2678 7.65625 14.8943 7.29375C14.5208 6.93125 14.0636 6.75 13.5227 6.75H12.3636V5.25C12.3636 4.2125 11.9869 3.32812 11.2335 2.59688C10.4801 1.86563 9.56894 1.5 8.5 1.5C7.43106 1.5 6.51989 1.86563 5.76648 2.59688C5.01307 3.32812 4.63636 4.2125 4.63636 5.25H4.25C3.50303 5.25 2.86553 5.50625 2.3375 6.01875C1.80947 6.53125 1.54545 7.15 1.54545 7.875C1.54545 8.6 1.80947 9.21875 2.3375 9.73125C2.86553 10.2438 3.50303 10.5 4.25 10.5H6.18182V12H4.25Z"
//                       fill="#FFB163"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center gap-2">
//                 <button
//                   className="bg-white w-2/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
//                   onClick={handlePrevious}
//                 >
//                   <ChevronLeftIcon />
//                 </button>
//                 <button
//                   className="bg-borderColor w-10/12 h-[50px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
//                   onClick={handleNext}
//                 >
//                   Complete Pet Profile
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PetProfile;














import React, { useState } from "react";
import nameIcon from "../assets/nameIcon.png";
import { Checkbox } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const PetProfile = () => {
  const [step, setStep] = useState(1); // To keep track of sign-up steps

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    medicalHistory: "",
    vaccinationCopy: "",
    termsChecked: false,
    legalTermsChecked: false,
    vaccinationCopy: null, 
    medicalHistory: null
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

  const handleFileSelect = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          [fieldName]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
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

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
            <div className="flex flex-col gap-4">
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              type="text"
              className=" h-[38px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
              placeholder="Name"
            />

            <div className="flex justify-between items-center gap-2">
              <input
                onChange={handleChange}
                name="type"
                value={formData.type}
                type="text"
                className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Type"
              />
              <input
                onChange={handleChange}
                name="breed"
                value={formData.breed}
                type="text"
                className="w-6/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Breed"
              />
            </div>

            <div className="flex items-center justify-start h-[15px] gap-1">
              <Checkbox
                style={{ padding: "0" }}
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
                Neutread or Sprayed
              </p>
            </div>

            <button
              className="bg-borderColor h-[52px] hover:bg-opacity-75 text-black font-bold text-xl py-2 px-4 rounded-xl"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
            <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center gap-2">
              <input
                onChange={handleChange}
                name="address1"
                value={formData.address1}
                type="text"
                className="w-4/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Age*"
              />
              <input
                onChange={handleChange}
                name="address2"
                value={formData.address2}
                type="text"
                className="w-3/12 h-[39px] border border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Weight*"
              />

              <div className="border px-2 flex justify-between items-center h-[39px] w-5/12 text-center  border-borderColor rounded-xl   text-xs focus:outline-none">
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="text-xs focus:outline-none"
                      label="Date"
                      style={{ height: "39px" }}
                    />
                  </LocalizationProvider>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_555_820"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_555_820)">
                      <path
                        d="M3.53607 14.6667C3.15454 14.6667 2.82792 14.5362 2.55623 14.275C2.28453 14.0139 2.14868 13.7 2.14868 13.3334V4.00004C2.14868 3.63337 2.28453 3.31949 2.55623 3.05837C2.82792 2.79726 3.15454 2.66671 3.53607 2.66671H4.22976V1.33337H5.61715V2.66671H11.1667V1.33337H12.5541V2.66671H13.2478C13.6293 2.66671 13.9559 2.79726 14.2276 3.05837C14.4993 3.31949 14.6352 3.63337 14.6352 4.00004V13.3334C14.6352 13.7 14.4993 14.0139 14.2276 14.275C13.9559 14.5362 13.6293 14.6667 13.2478 14.6667H3.53607ZM3.53607 13.3334H13.2478V6.66671H3.53607V13.3334ZM3.53607 5.33337H13.2478V4.00004H3.53607V5.33337ZM8.39192 9.33337C8.19538 9.33337 8.03063 9.26948 7.89767 9.14171C7.76471 9.01393 7.69823 8.8556 7.69823 8.66671C7.69823 8.47782 7.76471 8.31949 7.89767 8.19171C8.03063 8.06393 8.19538 8.00004 8.39192 8.00004C8.58847 8.00004 8.75322 8.06393 8.88618 8.19171C9.01914 8.31949 9.08562 8.47782 9.08562 8.66671C9.08562 8.8556 9.01914 9.01393 8.88618 9.14171C8.75322 9.26948 8.58847 9.33337 8.39192 9.33337ZM5.61715 9.33337C5.4206 9.33337 5.25585 9.26948 5.12289 9.14171C4.98994 9.01393 4.92346 8.8556 4.92346 8.66671C4.92346 8.47782 4.98994 8.31949 5.12289 8.19171C5.25585 8.06393 5.4206 8.00004 5.61715 8.00004C5.8137 8.00004 5.97845 8.06393 6.11141 8.19171C6.24436 8.31949 6.31084 8.47782 6.31084 8.66671C6.31084 8.8556 6.24436 9.01393 6.11141 9.14171C5.97845 9.26948 5.8137 9.33337 5.61715 9.33337ZM11.1667 9.33337C10.9702 9.33337 10.8054 9.26948 10.6724 9.14171C10.5395 9.01393 10.473 8.8556 10.473 8.66671C10.473 8.47782 10.5395 8.31949 10.6724 8.19171C10.8054 8.06393 10.9702 8.00004 11.1667 8.00004C11.3632 8.00004 11.528 8.06393 11.661 8.19171C11.7939 8.31949 11.8604 8.47782 11.8604 8.66671C11.8604 8.8556 11.7939 9.01393 11.661 9.14171C11.528 9.26948 11.3632 9.33337 11.1667 9.33337ZM8.39192 12C8.19538 12 8.03063 11.9362 7.89767 11.8084C7.76471 11.6806 7.69823 11.5223 7.69823 11.3334C7.69823 11.1445 7.76471 10.9862 7.89767 10.8584C8.03063 10.7306 8.19538 10.6667 8.39192 10.6667C8.58847 10.6667 8.75322 10.7306 8.88618 10.8584C9.01914 10.9862 9.08562 11.1445 9.08562 11.3334C9.08562 11.5223 9.01914 11.6806 8.88618 11.8084C8.75322 11.9362 8.58847 12 8.39192 12ZM5.61715 12C5.4206 12 5.25585 11.9362 5.12289 11.8084C4.98994 11.6806 4.92346 11.5223 4.92346 11.3334C4.92346 11.1445 4.98994 10.9862 5.12289 10.8584C5.25585 10.7306 5.4206 10.6667 5.61715 10.6667C5.8137 10.6667 5.97845 10.7306 6.11141 10.8584C6.24436 10.9862 6.31084 11.1445 6.31084 11.3334C6.31084 11.5223 6.24436 11.6806 6.11141 11.8084C5.97845 11.9362 5.8137 12 5.61715 12ZM11.1667 12C10.9702 12 10.8054 11.9362 10.6724 11.8084C10.5395 11.6806 10.473 11.5223 10.473 11.3334C10.473 11.1445 10.5395 10.9862 10.6724 10.8584C10.8054 10.7306 10.9702 10.6667 11.1667 10.6667C11.3632 10.6667 11.528 10.7306 11.661 10.8584C11.7939 10.9862 11.8604 11.1445 11.8604 11.3334C11.8604 11.5223 11.7939 11.6806 11.661 11.8084C11.528 11.9362 11.3632 12 11.1667 12Z"
                        fill="#FFB163"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <input
                onChange={handleChange}
                name="city"
                value={formData.city}
                type="text"
                className="border w-full  h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none"
                placeholder="Medical History"
              />
            </div>

            <label className="flex justify-between items-center border w-8/12 h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none cursor-pointer">
  <input
    onChange={(e) => handleFileSelect(e, 'medicalHistory')}
    name="medicalHistory"
    type="file"
    accept="image/*, .pdf"
    className="hidden"
  />
  <div>
    <span className="text-gray-400">Medical History</span>
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
    >
      <path
        d="M4.25 12C3.07803 12 2.0767 11.6062 1.24602 10.8188C0.415341 10.0312 0 9.06875 0 7.93125C0 6.95625 0.302652 6.0875 0.907955 5.325C1.51326 4.5625 2.3053 4.075 3.28409 3.8625C3.60606 2.7125 4.25 1.78125 5.21591 1.06875C6.18182 0.35625 7.27652 0 8.5 0C10.0068 0 11.285 0.509375 12.3347 1.52813C13.3843 2.54688 13.9091 3.7875 13.9091 5.25C14.7977 5.35 15.535 5.72188 16.121 6.36563C16.707 7.00938 17 7.7625 17 8.625C17 9.5625 16.6619 10.3594 15.9858 11.0156C15.3097 11.6719 14.4886 12 13.5227 12H9.27273C8.84773 12 8.4839 11.8531 8.18125 11.5594C7.8786 11.2656 7.72727 10.9125 7.72727 10.5V6.6375L6.49091 7.8L5.40909 6.75L8.5 3.75L11.5909 6.75L10.5091 7.8L9.27273 6.6375V10.5H13.5227C14.0636 10.5 14.5208 10.3188 14.8943 9.95625C15.2678 9.59375 15.4545 9.15 15.4545 8.625C15.4545 8.1 15.2678 7.65625 14.8943 7.29375C14.5208 6.93125 14.0636 6.75 13.5227 6.75H12.3636V5.25C12.3636 4.2125 11.9869 3.32812 11.2335 2.59688C10.4801 1.86563 9.56894 1.5 8.5 1.5C7.43106 1.5 6.51989 1.86563 5.76648 2.59688C5.01307 3.32812 4.63636 4.2125 4.63636 5.25H4.25C3.50303 5.25 2.86553 5.50625 2.3375 6.01875C1.80947 6.53125 1.54545 7.15 1.54545 7.875C1.54545 8.6 1.80947 9.21875 2.3375 9.73125C2.86553 10.2438 3.50303 10.5 4.25 10.5H6.18182V12H4.25Z"
        fill="#FFB163"
      />
    </svg>
  </div>
</label>

<label className="flex justify-between items-center border w-9/12 h-[39px] border-borderColor rounded-xl bg-white px-4 text-xs focus:outline-none cursor-pointer">
  <input
    onChange={(e) => handleFileSelect(e, 'vaccinationCopy')}
    name="vaccinationCopy"
    type="file"
    accept="image/*, .pdf"
    className="hidden"
  />
  <div>
    <span className="text-gray-400">Vaccination Copy</span>
  </div>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
    >
      <path
        d="M4.25 12C3.07803 12 2.0767 11.6062 1.24602 10.8188C0.415341 10.0312 0 9.06875 0 7.93125C0 6.95625 0.302652 6.0875 0.907955 5.325C1.51326 4.5625 2.3053 4.075 3.28409 3.8625C3.60606 2.7125 4.25 1.78125 5.21591 1.06875C6.18182 0.35625 7.27652 0 8.5 0C10.0068 0 11.285 0.509375 12.3347 1.52813C13.3843 2.54688 13.9091 3.7875 13.9091 5.25C14.7977 5.35 15.535 5.72188 16.121 6.36563C16.707 7.00938 17 7.7625 17 8.625C17 9.5625 16.6619 10.3594 15.9858 11.0156C15.3097 11.6719 14.4886 12 13.5227 12H9.27273C8.84773 12 8.4839 11.8531 8.18125 11.5594C7.8786 11.2656 7.72727 10.9125 7.72727 10.5V6.6375L6.49091 7.8L5.40909 6.75L8.5 3.75L11.5909 6.75L10.5091 7.8L9.27273 6.6375V10.5H13.5227C14.0636 10.5 14.5208 10.3188 14.8943 9.95625C15.2678 9.59375 15.4545 9.15 15.4545 8.625C15.4545 8.1 15.2678 7.65625 14.8943 7.29375C14.5208 6.93125 14.0636 6.75 13.5227 6.75H12.3636V5.25C12.3636 4.2125 11.9869 3.32812 11.2335 2.59688C10.4801 1.86563 9.56894 1.5 8.5 1.5C7.43106 1.5 6.51989 1.86563 5.76648 2.59688C5.01307 3.32812 4.63636 4.2125 4.63636 5.25H4.25C3.50303 5.25 2.86553 5.50625 2.3375 6.01875C1.80947 6.53125 1.54545 7.15 1.54545 7.875C1.54545 8.6 1.80947 9.21875 2.3375 9.73125C2.86553 10.2438 3.50303 10.5 4.25 10.5H6.18182V12H4.25Z"
        fill="#FFB163"
      />
    </svg>
  </div>
</label>

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
                Complete Pet Profile
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" sm:w-full w-10/12 m-4 py-12 px-4 rounded-3xl border-2 border-borderColor backdrop-blur-2xl relative z-10">
        <div className="justify-center flex">
          <img src={nameIcon} className="w-48 h-28" alt="Name Icon" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="text-gray-800 font-poppins text-4xl font-medium leading-8 tracking-wide">
              Create your Pet Profile
            </p>
            {step === 1 && (
              <span className="flex justify-center items-center flex-col gap-1">
                {" "}
                <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
                  Step 1 : Enter your pet's details
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
                </svg>
              </span>
            )}
            {step === 2 && (
              <span className="flex justify-center items-center flex-col gap-1">
                <p className="text-black font-poppins text-xl font-normal leading-8 tracking-tight">
                  Step 2 : Enter other details of your pet
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
                </svg>
              </span>
            )}
          </div>

          {renderStepContent()}
        </div>
      </div>
    </>
  );
};

export default PetProfile;
