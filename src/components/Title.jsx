import { Box, Typography } from "@mui/material";
import React from "react";

const Title = ({ title, width = "95%", fontSize = "17px" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        background:
          "transparent linear-gradient(45deg, #8E0E76 0%, #381A73 25%, #1E2E71 50%, #0F4374 75%, #08717A 100%) 0% 0% no-repeat padding-box",
        width,
        marginLeft: "auto",
        marginRight: "auto",
        height: "40px",
        color: "#fff",
        borderRadius: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize,
        fontWeight: "900",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Typography sx={{ fontSize }}>{title}</Typography>
    </Box>
  );
};

export default Title;
