import React from "react";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import { styled } from "../styles/stitches.config";

const Socials = styled("div", {
  display: "flex",
  gap: "1rem",
  zIndex: "2",
});
const SocialLink = styled("a", {
  color: "$gray",
});

export default function SocialsFooter() {
  return (
    <Socials>
      <SocialLink href="https://twitter.com/_KaliDAO" target="_blank">
        <TwitterLogoIcon />
      </SocialLink>
      <SocialLink href="https://discord.com/invite/UKCS9ghzUE" target="_blank">
        <DiscordLogoIcon />
      </SocialLink>
      <SocialLink href="https://github.com/kalidao/" target="_blank">
        <GitHubLogoIcon />
      </SocialLink>
    </Socials>
  );
}
