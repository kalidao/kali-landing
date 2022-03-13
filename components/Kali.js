import React from "react";
import Image from "next/image";
import { styled } from "@stitches/react";

const LogoContainer = styled("div", {
  padding: "10px",
});

export default function Kali() {
  return (
    <LogoContainer>
      <Image
        src="/../public/img/logo-minimal.png"
        alt="KALI logo"
        height="100px"
        width="62px"
      />
    </LogoContainer>
  );
}
