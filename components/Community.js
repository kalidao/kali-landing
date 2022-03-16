import React, { useState } from "react";
import { tweets } from "../constants/tweets";
import { styled } from "../styles/stitches.config";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Heading, SubHeading } from "../styles/heading";

const Box = styled("div", {
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Tweets = styled("div", {
  display: "flex",
  gap: "1rem",
  overflow: "hidden",
});

const Tweet = styled("div", {});

export default function Community() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === tweets.length - 1) {
      setIndex(0);
      setXPos(0);
    } else {
      setIndex(index + 1);
      setXPos(xPos - width);
    }
  };

  return (
    <Box>
      {/* <Heading>Community</Heading> */}
      {/* <SubHeading css={{ color: "$gray" }}>We love you too!</SubHeading> */}
      {/* TODO: ADD RESPONSIVE SLIDER */}
      <Tweets>
        {tweets &&
          tweets.map((tweet) => (
            <Tweet>
              <TwitterTweetEmbed key={tweet.from} tweetId={tweet.tweetId} />
            </Tweet>
          ))}
      </Tweets>
    </Box>
  );
}
