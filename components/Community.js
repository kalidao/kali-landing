import React, { useState } from "react";
import { tweets } from "../constants/tweets";
import { styled } from "../styles/stitches.config";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

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

const Button = styled("button", {
  color: "$white",
  border: "none",
  background: "none",
  borderRadius: "3rem",
  "&:hover": {
    background: "$red",
  },
});

const IconButton = ({ icon, onClick }) => {
  return <Button onClick={onClick}>{icon}</Button>;
};

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
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Box>
      {/* TODO: ADD RESPONSIVE SLIDER */}
      <Tweets>
        <IconButton icon={<ChevronLeftIcon />} onClick={handlePrev} />
        {tweets &&
          tweets.map((tweet) => (
            <Tweet key={tweet.from}>
              <TwitterTweetEmbed key={tweet.from} tweetId={tweet.tweetId} />
            </Tweet>
          ))}
        <IconButton icon={<ChevronRightIcon />} onClick={handleNext} />
      </Tweets>
    </Box>
  );
}
