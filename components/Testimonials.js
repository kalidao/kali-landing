import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { testimonials } from "../constants/testimonials";
import { styled } from "../styles/stitches.config";

const Box = styled("div", {
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Heading = styled("h2", {
  color: "$white",
  fontSize: "32px",
});

const Tweets = styled("div", {
  display: "flex",
  gap: "10px",
});

export default function Testimonials() {
  return (
    <Box>
      <Heading>Testimonials</Heading>
      <Tweets>
        {testimonials &&
          testimonials.map((testimonial, index) => (
            <TwitterTweetEmbed
              key={index}
              tweetId={testimonial}
              options={{ height: "100px", width: "400px" }}
            />
          ))}
      </Tweets>
    </Box>
  );
}
