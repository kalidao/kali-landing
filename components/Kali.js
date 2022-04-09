import React from "react";
import Image from "next/image";
import { styled } from "@stitches/react";
import logo from "../public/img/kali-logo.svg";

const LogoContainer = styled("div", {
  padding: "8.11px 7.9px 8.6px 0.92px",
});

export default function Kali() {
  return (
    <LogoContainer>
      <Image src={logo.src} alt="KALI logo" width="59.79px" height="59.79px" />
    </LogoContainer>
  );
}
