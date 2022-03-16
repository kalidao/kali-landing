import React from "react";
import { Heading } from "../styles/heading";
import { styled } from "../styles/stitches.config";
import Image from "next/image";
import { features } from "../constants/features";

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "20px",
});

const Cards = styled("div", {
  display: "flex",
  gap: "1rem",
});

const Card = styled("div", {
  backgroundImage:
    "linear-gradient(352deg, #ff0000 0%, rgba(242, 4, 5, 0.83) 16.67%, rgba(229, 7, 8, 0.67) 33.33%, rgba(217, 10, 11, 0.5) 50%, rgba(204, 12, 12, 0.33) 66.67%, rgba(180, 13, 14, 0) 100%)",
  filter: blur(2),
  padding: "1rem",
  borderRadius: "2rem",
  maxHeight: "25vh",
  minWidth: "10rem",
  boxShadow: "2px 2px 2px rgb(0, 100, 26)",
  color: "$white",
});

const Title = styled("div", {
  fontWeight: "800",
  fontSize: "16px",
  paddingBottom: "1rem",
});
const Description = styled("div", {});

const FeatureCard = ({ title, image, description }) => {
  return (
    <Card>
      <img src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

function Features() {
  return (
    <Box>
      {/* <Heading>Features</Heading> */}
      <Cards>
        {features &&
          features.map((feature) => (
            <FeatureCard
              title={feature.title}
              image={feature.image}
              description={feature.description}
            />
          ))}
      </Cards>
    </Box>
  );
}

export default Features;
