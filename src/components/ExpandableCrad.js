import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ExpandableCrad = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="collapsible-card w-12/12 my-8 mx-0 xl:mx-8 bg-white">
      <div
        id="header"
        class="header relative cursor-pointer flex justify-start gap-2 items-center my-10 xl:my-2 text-black font-poppins text-3xl font-semibold leading-10 tracking-wider"
        onClick={() => {
          setToggle((prev) => {
            return !prev;
          });
        }}
      >
        {props.data.title}

        {toggle ? (
          <RemoveIcon
            className="absolute top-2 right-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // to prevent collapse when clicking on the icon
              setToggle(false);
            }}
            style={{ color: "#DA9145" }}
          />
        ) : (
          <AddIcon
            className="absolute top-2 right-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // to prevent collapse when clicking on the icon
              setToggle(true);
            }}
            style={{ color: "#DA9145" }}
          />
        )}
      </div>
      <div class="text-justify text-lg font-light text-cardTextColor leading-[40px] h-1 w-2/12 mx-[20px] bg-borderColor my-4 "></div>{" "}
      <div
        class="content"
        style={{
          height: toggle ? "100px" : "0px",
        }}
      >
        {props.data.description}
      </div>
    </div>
  );
};

export default ExpandableCrad;
