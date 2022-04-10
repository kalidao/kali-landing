import React from "react";
import { styled } from "../styles/stitches.config";
import { partners } from "../constants/partners";
import Image from "next/image";
import hashed from "../public/partners/hashed.svg";
import seedclub from "../public/partners/seedclub.svg";
import lexdao from "../public/partners/lexdao.svg";
import lexpunk from "../public/partners/lexpunk.svg";

const PartnerStream = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  zIndex: "1",
  marginTop: "3rem",
});
 
function Partners() {
  return (
      <PartnerStream>
        <Image src={lexpunk.src} height="45px" width="50px" />
        <Image src={lexdao.src} height="45px" width="50px" />
        <Image src={seedclub.src} height="45px" width="110px" />
        <Image src={hashed.src} height="45px" width="110px" />
      </PartnerStream>
  );
}

export default Partners;
