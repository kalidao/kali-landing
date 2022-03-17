import React from "react";
import { styled } from "../styles/stitches.config";
import { EnterIcon } from "@radix-ui/react-icons";
import { SubHeading } from "../styles/heading";
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

const CallButton = styled("button", {
  color: "$white",
  background: "$gold",
  padding: "10px",
  borderRadius: "18px",
  border: "none",
  boxShadow: "2px 2px 5px red",
  fontWeight: "800",
  fontSize: "16px",
  maxWidth: "8.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

function CTA() {
  return (
    <Box>
      <Heading>DAO setup and incorporation made easy</Heading>
      <SubHeading css={{ color: "$gray" }}>
        KALI launches complete internet-native orgs. Invest, build and
        collaborate with anyone, anywhere.
      </SubHeading>
      <CallButton as="a" href="https://app.kalidao.xyz/" target="_blank">
        Launch App <EnterIcon />
      </CallButton>
    </Box>
  );
}

export default CTA;
