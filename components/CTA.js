import React from "react";
import { styled } from "../styles/stitches.config";

const Box = styled("div", {
  color: "$white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
});

const Heading = styled("h1", {
  color: "$white",
  fontSize: "35px",
});

const SubHeading = styled("p", {
  color: "$white",
  maxWidth: "70vw",
  marginTop: "0",
  marginBottom: "20px",
});

const CallButton = styled("button", {
  color: "$white",
  background: "$gold",
  padding: "10px",
  borderRadius: "18px",
  border: "none",
  boxShadow: "2px 2px 5px red",
  fontWeight: "800",
  fontSize: "16px",
  maxWidth: "115px",
});

function CTA() {
  return (
    <Box>
      <Heading>Automate limited liability and compliance with code.</Heading>
      <SubHeading>
        sdsdsdsdsdsdsds sdsdsdsdsdsdsds sdsdsdsdsdsdsds sdsdsdsdsdsdsds
        sdsdsdsdsdsdsds sdsdsdsdsdsdsds sdsdsdsdsdsdsds sdsdsdsdsdsdsds
        sdsdsdsdsdsdsds sdsdsdsdsdsdsds
      </SubHeading>
      <CallButton as="a" href="https://app.kalidao.xyz/" target="_blank">
        Launch App
      </CallButton>
    </Box>
  );
}

export default CTA;
