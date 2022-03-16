import React from "react";
import { styled } from "../styles/stitches.config";
import {
  NavMenu,
  NavMenuList,
  NavMenuLinkIcon,
  NavMenuTrigger,
  NavMenuItem,
  NavMenuContent,
  ContentList,
  ContentListItem,
  ContentListItemIcon,
  NavMenuViewport,
  NavMenuIndicator,
} from "../styles/nav";
import {
  DiscordLogoIcon,
  EnterIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});

export default function Nav() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem>
          <NavMenuTrigger>Resources</NavMenuTrigger>
          <NavMenuContent>
            <ContentList layout="one">
              <ContentListItem
                title="Docs"
                href="https://docs.kalidao.xyz/"
                target="_blank"
              >
                Learn the inner workings of a Kali DAO.
              </ContentListItem>
              <ContentListItem
                title="Blog"
                href="https://mirror.xyz/kalico.eth"
                target="_blank"
              >
                Read about our vision for DAOs.
              </ContentListItem>
              <ContentListItemIcon
                title="GitHub"
                icon={<GitHubLogoIcon />}
                href="https://github.com/kalidao/"
                target="_blank"
              >
                Browse our open-source codebase.
              </ContentListItemIcon>
            </ContentList>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuTrigger>Community</NavMenuTrigger>
          <NavMenuContent>
            <ContentList layout="one">
              <ContentListItemIcon
                title="Twitter"
                icon={<TwitterLogoIcon />}
                href="https://twitter.com/_KaliDAO"
                target="_blank"
              >
                Keep updated with the latest in KALI.
              </ContentListItemIcon>
              <ContentListItemIcon
                title="Discord"
                icon={<DiscordLogoIcon />}
                href="https://discord.com/invite/UKCS9ghzUE"
                target="_blank"
              >
                Participate in our community.
              </ContentListItemIcon>
            </ContentList>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLinkIcon href="https://app.kalidao.xyz/" target="_blank">
            Launch App
            <EnterIcon />
          </NavMenuLinkIcon>
        </NavMenuItem>
        <NavMenuIndicator />
      </NavMenuList>
      <ViewportPosition>
        <NavMenuViewport />
      </ViewportPosition>
    </NavMenu>
  );
}

// Community
// Docs
// Launch App
