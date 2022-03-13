import React from "react";
import Image from "next/image";
import { styled } from "@stitches/react";
import logo from "../public/img/logo-minimal.png";
const LogoContainer = styled("div", {
  padding: "10px",
});

export default function Kali() {
  return (
    <LogoContainer>
      <Image src={logo.src} alt="KALI logo" height="100px" width="62px" />
    </LogoContainer>
  );
}
