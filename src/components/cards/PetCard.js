import React from "react";
import { Box, Card, CardMedia, Typography, IconButton } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import { styled } from "@mui/system";
import PetImg from "../../assets/PetImg.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const CustomIconButton = styled(IconButton)({
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  margin: "0 8px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
});

export default function UserProfileCard() {
  return (
    <Card
      sx={{
        minWidth: 415,
        height: 350,
        position: "relative",
        borderRadius: 6,
        margin: "20px",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={PetImg}
        alt="Golden retriever named Bruno looking out of the car window"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          p: 2,
          color: "white",
        }}
      >
        <div className="flex justify-between p-2 items-center">
          <div className="flex flex-col gap-2">
            <div
              className="text-white font-poppins leading-12 tracking-wide text-5xl font-semibold"
              variant="h5"
              component="div"
            >
              Bruno
            </div>
            <div class="h-1 w-4/12 bg-borderColor mt-1"></div>
            <div className="text-borderColor text-xs font-medium">
              Golden retriever • Pet of Sanjay
            </div>
          </div>
          <div className="flex flex-col ">
            <div>@brunothedog</div>
            <div className="flex justify-around items-center">
              <FacebookIcon />
              <InstagramIcon />
              <Twitter />
            </div>
          </div>
        </div>
      </Box>
    </Card>
  );
}
