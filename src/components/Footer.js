import React from "react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import nameIcon from "../assets/nameIcon.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function App() {
  return (
    <div className="bg-cardBg">
    <div className="p-8 xl:p-20 flex justify xl:flex-row flex-col">
       <div className=" w-full xl:w-6/12 flex justify-start xl:justify-center xl:items-center items-start">
       <img src={nameIcon} alt="img" />
       </div>
       <div className="xl:w-6/12 w-10/12 font-poppins flex justify-start items-start xl:items-center gap-3 flex-col">
        <div className="text-2xl font-bold">Ready to unleash the best for your pet?</div>
        <div className="text-sm font-light">Join us now or log in to enhance their well-being!</div>
        <div className="flex justify-end items-center">
            <button className="border-borderColor w-max  border-4 font-poppins cursor-pointer py-2 px-4 font-bold hover:text-white text-borderColor hover:bg-borderColor   focus:outline-none rounded-2xl  text-lg">
              Register as pet parent
              <KeyboardArrowRightIcon  />
            </button>
          </div>
          </div>
    </div>
    <div class="h-[1px] w-6/12 mx-auto bg-borderColor"></div>{" "}
      <div className="px-8 xl:p-4 pt-20">
        <div className="xl:flex-nowrap flex-wrap justify-between gap-[20px] xl:gap-0 flex xl:justify-evenly items-center text-borderColor">
          <div
            lg="3"
            md="6"
            className="mb-4 mb-md-0 flex justify-start gap-2 flex-col text-justify"
          >
            <h5 className="text-uppercase text-xl font-semibold font-poppins mb-0">
              Links
            </h5>

            <ul className="list-unstyled mb-0 flex flex-col gap-2">
              <li>
                <a href="#!" className="text-dark">
                  My Account
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  News
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div
            lg="3"
            md="6"
            className="mb-4 mb-md-0  flex justify-start gap-2 flex-col text-justify"
          >
            <h5 className="text-uppercase text-xl font-semibold font-poppins">
              Partner
            </h5>

            <ul className="list-unstyled flex flex-col gap-2">
              <li>
                <a href="#!" className="text-dark">
                  Refer and earn
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  About us
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Carrers
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div
            lg="3"
            md="6"
            className="mb-4 mb-md-0  flex justify-start gap-2 flex-col text-justify"
          >
            <h5 className="text-uppercase text-xl font-semibold font-poppins">
              Legal
            </h5>
            <div className="flex flex-col gap-2">
              <div>Terms and privacy</div>

              <div> Refund Policies</div>
            </div>
          </div>

          <div
            lg="3"
            md="6"
            className="mb-4 mb-md-0 gap-4 flex justify-normal flex-col"
          >
            <h5 className="text-uppercase text-xl font-semibold font-poppins mb-0">
              Follow us on
            </h5>
            <div className="flex gap-2 justify-center">
              <Instagram />
              <Facebook />
              <Twitter />
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cardBg  text-center p-3 ">animation</div>
    </div>
  );
}
