import React from "react";
import { styled } from "../styles/stitches.config";

const Box = styled("div", {
  color: "$gray",
});

export default function Disclaimer() {
  return <Box>Developed by KaliCo</Box>;
}
