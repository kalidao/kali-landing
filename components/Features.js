import React from "react";
import { Heading } from "../styles/heading";
import { styled } from "../styles/stitches.config";
import Image from "next/image";
import { features } from "../constants/features";

const Box = styled("div", {
  display: "grid",
  margin: "4rem 0rem 0rem 0rem",
  zIndex: "10"
  //flexDirection: "column",
  //justifyContent: "center",
  //alignItems: "center",
});

const Cards = styled("div", {
  display: "flex",
  gap: "1rem",
});

const Card = styled("div", {
  maxHeight: "25vh",
  minWidth: "10rem",
  color: "$black",
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
          features.map((feature, index) => (
            <FeatureCard
              key={index}
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
