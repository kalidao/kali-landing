import React from "react";
import { Heading } from "../styles/heading";
import { styled } from "../styles/stitches.config";
import { partners } from "../constants/partners";
import Image from "next/image";

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "$white",
});

const PartnerStream = styled("div", {
  display: "flex",
  gap: "1rem",
});

function Partners() {
  return (
    <Box>
      <Heading>Partners</Heading>
      <PartnerStream>
        {partners &&
          partners.map((partner, index) => (
            <img src={partner.icon} alt={partner.name} />
            // <Image
            //   key={index}
            //   src={partner.icon}
            //   height={450}
            //   width={800}
            //   layout="responsive"
            //   alt={partner.name}
            //   quality={65}
            // />
          ))}
      </PartnerStream>
    </Box>
  );
}

export default Partners;
